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
    const { title, channel, image, description, views, likes, duration, video } = videoData;
    const date = new Date().getTime();

    const videosData = readVideos();

    const newVideo = {
        title, // title: title
        channel,
        image,
        description, 
        views,
        likes,
        duration,
        video,
        timestamp: date, 
        comments: [{name:'Slobodan Zee Man',comment:'Hot like a Miami night! Love to see it.',likes:2,timestamp:date},{name:'Brishan Tha King',comment:'Nice and funky like Funky Fridays! Keep it up guys.',likes:2,timestamp:date}],
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