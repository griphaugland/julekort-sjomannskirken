import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

interface VideoProps {
  src: string;
}

const Video: React.FC<VideoProps> = ({ src }) => {
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPlaying(true);
    }, 300);
  }, []);
  return (
    <div className="relative pt-[56.25%] bg-gray-100 rounded-lg overflow-hidden">
      <ReactPlayer
        url={src}
        className="absolute top-0 left-0"
        width="100%"
        height="100%"
        controls={true}
        playing={playing}
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            Loading...
          </div>
        }
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
              disablePictureInPicture: true,
            },
          },
        }}
      />
    </div>
  );
};

export default Video;
