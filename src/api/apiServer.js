import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const options = {
  headers: {
	
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTZkMTQ0NjUwMDNlZDkwYTQxNWZjMTFiMDc4ODk3YyIsIm5iZiI6MTc0MzYyMDUzMC45MjIsInN1YiI6IjY3ZWQ4OWIyODM2YzhlZGE3Y2FiMDZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eX5twDEVcbdZLLNQZk1JVAd44jxFpuSPQiKyHFHneYo'
  }
};




export const getTrendingMovies = axios(API_URL, options) => {
    const { data } = await axios.get("trending/movie/day");
    return getTrendingMovies
}
