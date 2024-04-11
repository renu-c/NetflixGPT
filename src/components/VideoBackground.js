// import React, { useEffect } from "react";
// import { API_OPTIONS } from "../Utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addTrailerVideo } from "../Utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  // const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // const dispatch = useDispatch();
  // const getMovieVideo = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/823464/videos?language=en-US",
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   const filterData = json.results.filter((video) => video.type === "Trailer");
  //   const trailer = filterData[0];
  //   const trailer = filterData.length ? filterData[0] : json.results[0];
  //   console.log(trailer);
  //   dispatch(addTrailerVideo(trailer));
  // };
  // useEffect(() => {
  //   getMovieVideo();
  // }, []);

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/XeDbyVODQ5M?si=nKKyZl_llwHi4uem?&autoplay=1&mute=1"
        title="YouTube video player"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
