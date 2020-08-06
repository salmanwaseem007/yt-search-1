import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  //   console.log(props.videos);
  const renderedList = props.videos.map((video) => {
    // console.log(video.id.videoId);
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={props.onVideoSelect}
      ></VideoItem>
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
