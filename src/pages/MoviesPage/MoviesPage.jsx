import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import { searchMovies } from '../../services/api';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('query');

    if (queryParam) {
      setQuery(queryParam);
      searchMovies(queryParam).then((data) => setMovies(data.results));
    }
  }, [location.search]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/movies?query=${query}`);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search movies..."
        />
        <button type="submit" className={styles.button}>
          Search...
        </button>
      </form>
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p className={styles.p}>No movies found.</p>
      )}
    </div>
  );
};

export default MoviesPage;
