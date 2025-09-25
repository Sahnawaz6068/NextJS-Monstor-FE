'use client'
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import React, { useState } from "react";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-[35%] w-[40rem] bg-[#171717] p-4 flex items-center justify-between rounded-md text-white">
      <div className="w-16 h-16 bg-gray-700 rounded-md"></div>
      <div className="flex items-center gap-6">
        <SkipBack
          size={24}
          className="cursor-pointer hover:text-white transition-colors"
        />
        {isPlaying ? (
          <Pause
            size={24}
            className="cursor-pointer hover:text-gray-300 transition-colors"
            onClick={() => setIsPlaying(false)}
          />
        ) : (
          <Play
            size={24}
            className="cursor-pointer hover:text-gray-300 transition-colors"
            onClick={() => setIsPlaying(true)}
          />
        )}
        <SkipForward
          size={24}
          className="cursor-pointer hover:text-white transition-colors"
        />
      </div>

      <div className="flex items-center gap-4 text-gray-400 w-[22rem]">
        <span>2:21</span>
        <div className="relative flex-1 h-1 bg-gray-700 rounded-md mx-2">
          <div
            className="absolute top-0 left-0 h-1 bg-white rounded-md"
            style={{ width: "50%" }}
          />
          <input
            className="absolute top-0 left-0 w-full h-1 bg-transparent cursor-pointer"
            type="range"
          />
        </div>
        <span>3:11</span>
      </div>
    </div>
  );
};

export default Player;