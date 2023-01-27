import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "08e32ba35715aadb4433f7e086b1fcaa",
    language: "ko-KR",
  },
});

export default instance;
