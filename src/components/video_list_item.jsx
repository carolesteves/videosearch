import React from 'react';

// passing {video} in the function parameter is the same as
// assigning the content to a variable, like const video = props.video;
const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </li>
    );
};

export default VideoListItem;
