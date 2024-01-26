import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_URL } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideoData();
  }, []);

  const fetchVideoData = async () => {
    const videoData = await fetch(YOUTUBE_API_URL);

    const videoJSON = await videoData.json();

    console.log(videoJSON.items);
    setVideos(videoJSON.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return <VideoCard key={video.id} details={video} />;
      })}
    </div>
  );
};

export default VideoContainer;
