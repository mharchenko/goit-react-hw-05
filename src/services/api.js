import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_READ_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGFhOWYzMjU1M2E4ODBkMTkwMTkyNjcxNGJiNDc4OCIsIm5iZiI6MTczNjU5NTU3MS42NzgwMDAyLCJzdWIiOiI2NzgyNTg3MzYwMWFjZmU3YmQ0ZWU5NDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zkmHMUG_CIVWvTI1qGF5mVLtfWDFNbBeHMZ3Z2sxRLA';

const headers = {
  Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
};

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/trending/movie/day`, {
      headers,
    });
    return data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const { data } = await axios.get(`${API_URL}/movie/${movieId}`, {
      headers,
    });
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchMovieCredits = async (movieId) => {
  try {
    const { data } = await axios.get(`${API_URL}/movie/${movieId}/credits`, {
      headers,
    });
    return data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const { data } = await axios.get(`${API_URL}/movie/${movieId}/reviews`, {
      headers,
    });
    return data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/search/movie?include_adult=false&language=en-US&query=${encodeURIComponent(
        query
      )}`,
      { headers }
    );
    return data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};
