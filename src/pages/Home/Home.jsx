import { FilmList } from 'components/FilmList';
import { useState, useEffect } from 'react';
import { FetchMovieTrand } from '../../components/API/FetchApi';
import { NavFilmItem, ListFilm, ItemFilm } from './Home.styled';

export const Home = () => {
  const [movieTrends, setMovieTrends] = useState([]);

  useEffect(() => {
    FetchMovieTrand(1)
      .then(gallery => {
        setMovieTrends(gallery.results);
      })
      .catch(error => console.log('ERROR'));
  }, []);

  return (
    <div>
      <h1>Tranding Day</h1>
      {/* <FilmList filmList={movieTrends} /> */}
      <ListFilm>
        {movieTrends.map(({ id, title }) => {
          return (
            <ItemFilm key={id}>
              <NavFilmItem to={`/movies/${id}`}>{title}</NavFilmItem>
            </ItemFilm>
          );
        })}
      </ListFilm>
    </div>
  );
};
