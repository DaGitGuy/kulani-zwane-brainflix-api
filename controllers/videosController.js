const videosModel = require('../models/videosModel');

const getAllVids = (req, res) => {
    const vidsData = videosModel.getAllVideos();
    const filteredVidsData = vidsData.map(vid => {
        return {
            id: vid.id,
            title: vid.title,
            channel: vid.channel,
            image: vid.image
        }
    })
    res.status(200).json(filteredVidsData);
}

const getIndividualVid = (req, res) => {
    const { videoId } = req.params;
    const singleVid = videosModel.getIndividualVideo(videoId);

    if (!singleVid) {
        return res.status(404).send('Video not found.');
    }

    res.status(200).json(singleVid);
}

const createVid = (req, res) => {
    const { title, channel, image, description, views, likes, duration, video, id } = req.body;

    if (!title || !description) {
        return res.status(400).send('Video title and description are required.')
    }

    const newVid = videosModel.createVideo({
        title, // title: title
        channel,
        image,
        description,
        views,
        likes,
        duration,
        video,
        id
    });
    
    res.status(201).json(newVid);
}

module.exports = {
    getAllVids,
    getIndividualVid,
    createVid
}