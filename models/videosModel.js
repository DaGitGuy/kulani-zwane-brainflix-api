const fs = require('fs');
const { v4: uuid } = require('uuid');

const readVideos = () => {
    const videosDataFile = fs.readFileSync('./data/videos.json');
    const videosData = JSON.parse(videosDataFile);
    return videosData;
}

const writeVideo = (videoData) => {
    fs.writeFileSync('./data/videos.json', JSON.stringify(videoData));
}

const getAllVideos = () => {
    return readVideos();
}

const getIndividualVideo = (videoId) => {
    const videosData = readVideos();
    const singleVideo = videosData.find(video => video.id === videoId);
    return singleVideo;
}

const createVideo = (videoData) => {
    const videosData = readVideos();

    const newVideo = {
        title: videoData.title,
        channel: videoData.channel,
        image: videoData.image,
        description: videoData.description, 
        views: videoData.views,
        likes: videoData.likes,
        duration: videoData.duration,
        video: videoData.video,
        timestamp: videoData.timestamp,
        comments: videoData.comments,
        id: uuid()
    }

    videosData.push(newVideo);

    writeVideo(videosData);

    return newVideo;
}

module.exports = {
    getAllVideos,
    getIndividualVideo,
    createVideo
}