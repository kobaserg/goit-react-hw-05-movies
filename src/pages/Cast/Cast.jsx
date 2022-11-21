import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchMovieCastId } from 'components/API/FetchApi';
import { ImgProfile } from './Cast.styled';

export const Cast = () => {
  const [stars, setStars] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    FetchMovieCastId(movieId)
      .then(movie => setStars(movie.cast))
      .catch(error => console.log('ERROR'));
  }, [movieId]);

  return (
    <div>
      <ul>
        {stars.map(({ profile_path, name, character }) => {
          const starProfile = 'https://image.tmdb.org/t/p/w500' + profile_path;
          return (
            <li key={name}>
              <ImgProfile src={starProfile} alt={name} />
              <h5>{name}</h5>
              <h5>Character : {character}</h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
