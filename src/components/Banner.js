import axios from "../api/axios";
import React, { useEffect } from "react";
import requests from "../api/request";
import { useState } from "react";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보 가져오기
    const response = await axios.get(requests.fetchNowPlaying);

    // 영화들중 하나의 ID 가져오기
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { apeend_to_response: "videos" },
    });
    setMovie(movieDetail);
    console.log(movie);
  };

  return <div>Banner</div>;
};

export default Banner;
