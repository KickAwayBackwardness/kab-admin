import React, { useState } from "react";
import { useSelector } from "react-redux";

const MusicWaveIcon = () => {
  const { isOpen } = useSelector((state) => state.humburgerSlice);
  const [isPlay, setIsPlay] = useState(true);

  return (
    <div
      className="music-icon__wrapper relative z-[2]  w-[65px] h-[65px] flex items-center justify-center cursor-pointer"
      onClick={() => setIsPlay((prev) => !prev)}
    >
      <div className="music-icon w-[15px] mb-[10px] flex items-center justify-between">
        <span
          className={`inline-block w-[1px] h-[5px] ${
            isOpen ? "bg-white" : "bg-black"
          } ${isPlay ? "animate-music-wave-200ms" : ""} `}
        ></span>
        <span
          className={`inline-block w-[1px] h-[5px] ${
            isOpen ? "bg-white" : "bg-black"
          } ${isPlay ? "animate-music-wave-300ms" : ""} `}
        ></span>
        <span
          className={`inline-block w-[1px] h-[5px] ${
            isOpen ? "bg-white" : "bg-black"
          } ${isPlay ? "animate-music-wave-400ms" : ""} `}
        ></span>
        <span
          className={`inline-block w-[1px] h-[5px] ${
            isOpen ? "bg-white" : "bg-black"
          } ${isPlay ? "animate-music-wave-200ms" : ""} `}
        ></span>
      </div>
    </div>
  );
};

export default MusicWaveIcon;
