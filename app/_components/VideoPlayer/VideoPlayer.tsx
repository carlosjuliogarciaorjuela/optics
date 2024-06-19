/// src/components/VideoPlayer.tsx
import React from "react";

interface VideoPlayerProps {
  videoSrc: string;
  captionsSrc?: string;
  controls?: boolean;
  autoplay?: boolean;
  preload?: "auto" | "metadata" | "none";
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc,
  captionsSrc,
  controls = true,
  autoplay = false,
  preload = "none",
}) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <video
        className="w-full h-full object-cover rounded-lg shadow-lg"
        controls={controls}
        preload={preload}
        autoPlay={autoplay}
      >
        <source src={videoSrc} type="video/mp4" />
        {captionsSrc && (
          <track
            src={captionsSrc}
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        )}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
