import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/api';
import styles from './MovieCast.module.css';

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/200x300?text=No+Image';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    let isMounted = true;
    fetchMovieCredits(movieId)
      .then((data) => {
        if (isMounted) setCast(data.cast);
      })
      .catch((error) => console.error('Error fetching cast:', error));

    return () => {
      isMounted = false;
    };
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h3>Cast</h3>
      {cast.length > 0 ? (
        <ul className={styles.list}>
          {cast.map((actor) => (
            <li key={actor.id} className={styles.item}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : PLACEHOLDER_IMAGE
                }
                alt={actor.name}
                className={styles.image}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available.</p>
      )}
    </div>
  );
};

export default MovieCast;
