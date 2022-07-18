const fs = require('fs');

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

const getVideoIndex = (videoId) => {
    const videosData = readVideos();
    const index = videosData.findIndex(object => object.id === videoId);
    return index; 
}

const createVideo = (videoData) => {
    const { title, channel, image, description, views, likes, duration, video, id } = videoData;
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
        id
    }

    videosData.push(newVideo);

    writeVideo(videosData);

    return newVideo;
}

const createComment = (commentData) => {
    const { videoId, name, comment } = commentData;
    const date = new Date().getTime();

    const videosData = readVideos();
    const videoData = getIndividualVideo(videoId);
    const videoIndex = getVideoIndex(videoId); 

    const newComment = {
        name, // name: name
        comment,
        likes: 0,
        timestamp: date 
    }

    videoData.comments.unshift(newComment);
    
    videosData.splice(videoIndex, 1, videoData);

    writeVideo(videosData);

    return newComment;
}

module.exports = {
    getAllVideos,
    getIndividualVideo,
    createVideo,
    createComment
}