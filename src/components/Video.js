import React from "react";
import video from "../data/video";
function Video () {
    return (
    <>
        <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            allowFullScreen
            title="Thinking in React"
        />
        <h1>{video.title}</h1>
        <span>{video.views} Views | Uploaded {video.createdAt}</span>
    </>
    )

}
export default Video;