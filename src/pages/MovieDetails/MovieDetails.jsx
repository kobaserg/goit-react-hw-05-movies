import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchMovieID } from 'components/API/FetchApi';
import {
  ImgPoster,
  Movie,
  NavMovie,
  NavMovieItem,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    FetchMovieID(movieId)
      .then(movie => setMovie(movie))
      .catch(error => console.log('ERROR'));
  }, [movieId]);

  const imgMovie = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

  return (
    <div>
      <Movie>
        <ImgPoster src={imgMovie} alt={movie.original_title} />
      </Movie>
      <h4>Additional Information</h4>
      <NavMovie>
        <NavMovieItem to="cast">Cast</NavMovieItem>
        <NavMovieItem to="reviews">Reviews</NavMovieItem>
      </NavMovie>
      <Outlet />
    </div>
  );
};
