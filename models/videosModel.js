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
    const date = new Date().getTime();

    const newVideo = {
        title: videoData.title,
        channel: 'BrainStation May 2022',
        image: 'http://localhost:8080/images/Upload-video-preview.jpg',
        description: videoData.description, 
        views: '1',
        likes: '1',
        duration: '4:16',
        video: 'https://project-2-api.herokuapp.com/stream',
        timestamp: date,
        comments: [{name:'Slobodan Zee Man',comment:'Hot like a Miami night! Love to see it.',likes:1,timestamp:new Date.getTime()}],
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