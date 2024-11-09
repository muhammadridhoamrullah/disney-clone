import axios from "axios";

const API_KEY = "89390febad178a7bbd3f7342591be00d";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export default instance;
