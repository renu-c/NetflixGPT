import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video text-white pt-[15%] px-12 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold w-1/4">{title}</h1>
      <p className="py-6 text-lg">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-12 text-xl  rounded-lg mt-2 hover:opacity-5">
          Play
        </button>
        <button className=" mx-2 bg-gray-500 text-white p-2 px-12 text-xl bg-opacity-50 rounded-lg mt-2">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
