import React from 'react';

const VideoDetail = ({video}) => {
    // When the page first renders, it still doesn't have the data from the API,
    // therefore, no video. In orther to avoid application errors when first
    // rendering it, we have to make a verification to see if videos are empty
    // If video is empty, as we have a return with the div Loading,
    // the function stops there and the error doesn't occur
    if (!video){
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    // using "crase" instead of single quotes is a ES6 feature, and is the same as
    // 'https://www.youtube.com/embed/${videoId}' + videoId concatenates two strings
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;
