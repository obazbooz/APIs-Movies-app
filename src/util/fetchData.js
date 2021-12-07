import axios from 'https://cdn.skypack.dev/axios';

// "axios" function to fetch  movies  data fro API with built-in error handling
export async function fetchMoviesData(url) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
  }
}
