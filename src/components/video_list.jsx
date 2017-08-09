import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    // avoid using for loops, use map instead
    // when outputing an array, React elements must have an unique identifier
    // such as the property key={video.etag}, which is a parameter in the object
    // that returns in the youtube API
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
                    onVideoSelect={props.onVideoSelect}
                    key={video.etag}
                    video={video} />
    });

    // to insert a class in a HTML component in JSX, to avoid conflict with the reserved word "class",
    // we use className instead
    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;
