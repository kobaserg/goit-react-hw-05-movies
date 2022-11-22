import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchMovieID } from 'components/API/FetchApi';
import {
  ImgPoster,
  Movie,
  NavMovie,
  NavMovieItem,
  Link,
  Description,
  Content,
  Genres,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    FetchMovieID(movieId)
      .then(setMovie)
      .catch(error => console.log('ERROR'));
  }, [movieId]);

  const imgMovie = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

  const backLink = location.state?.from;

  if (!movie.genres) {
    return;
  }

  return (
    <div>
      <Link to={backLink}>&#8592; Go back</Link>
      <Movie>
        <Description>
          <ImgPoster src={imgMovie} alt={movie.original_title} />
          <Content>
            <h3>
              {movie.original_title} ({movie.release_date.slice(0, 4)})
            </h3>
            <h5>User score: {movie.vote_average}</h5>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
            <h5>Genres</h5>
            <p>
              {movie.genres.map(({ id, name }) => {
                return <Genres key={id}> {name}</Genres>;
              })}
            </p>
          </Content>
        </Description>
      </Movie>
      <h4>Additional Information</h4>
      <NavMovie>
        <NavMovieItem to="cast" state={{ from: location.state.from }}>
          Cast
        </NavMovieItem>
        <NavMovieItem to="reviews" state={{ from: location.state.from }}>
          Reviews
        </NavMovieItem>
      </NavMovie>
      <Outlet />
    </div>
  );
};
