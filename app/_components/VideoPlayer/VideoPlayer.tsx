// src/components/VideoPlayer.tsx
import React from "react";

interface VideoPlayerProps {
  videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  return (
    <div className="flex justify-center items-center w-full h-80 md:h-96 lg:h-120 xl:h-144 2xl:h-160">
      <iframe
        className="w-full h-full object-cover rounded-lg shadow-lg"
        src={videoSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
