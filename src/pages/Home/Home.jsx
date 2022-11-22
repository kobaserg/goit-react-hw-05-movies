import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FetchMovieTrand } from '../../components/API/FetchApi';
import { NavFilmItem, ListFilm, ItemFilm } from './Home.styled';

export const Home = () => {
  const [movieTrends, setMovieTrends] = useState([]);
  const location = useLocation();

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
      <ListFilm>
        {movieTrends.map(({ id, title }) => {
          return (
            <ItemFilm key={id}>
              <NavFilmItem to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </NavFilmItem>
            </ItemFilm>
          );
        })}
      </ListFilm>
    </div>
  );
};
