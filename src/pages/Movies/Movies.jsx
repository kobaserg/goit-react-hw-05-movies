import { Outlet, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchSearchQuery } from 'components/API/FetchApi';
import { NavFilmItem, ListFilm, ItemFilm } from '../../pages/Home/Home.styled';
import Notiflix from 'notiflix';
import { NavForm, NavBtn } from './Movies.styled';

export const Movies = () => {
  const [filmSearch, setFilmSearch] = useState('');
  const [filmSearchGallery, setFilmSearchGallery] = useState([]);
  const [filmSearchParams, setFilmSearchParams] = useSearchParams();
  let film = filmSearchParams.get('query') ?? '';

  useEffect(() => {
    setFilmSearch(film);
    setFilmSearchGallery([]);
    FetchSearchQuery(filmSearch)
      .then(gallery => {
        if (gallery.results.length === 0) {
          Notiflix.Notify.failure('Film not found');
          setFilmSearch('');
          return;
        }
        setFilmSearchGallery(gallery.results);
      })
      .catch(error => console.log('ERROR'));
  }, [filmSearch, film]);

  const handleSubmitSearchFilm = event => {
    event.preventDefault();
    if (film === '') {
      setFilmSearchParams({});
      Notiflix.Notify.warning('Enter a search term');
      return;
    }
    setFilmSearchParams({ query: film });
    setFilmSearch(film);
    event.target.reset();
  };

  const handleSearchForm = event => {
    film = event.target.value;
  };

  return (
    <div>
      <Outlet />
      <NavForm onSubmit={handleSubmitSearchFilm}>
        <input
          class="input"
          type="text"
          name="searchform"
          autocomplete="off"
          autofocus
          placeholder="Search movie for found"
          onChange={handleSearchForm}
        ></input>
        <NavBtn type="submit" to={`query=${film}`}>
          Search
        </NavBtn>
      </NavForm>

      {filmSearchGallery && (
        <ListFilm>
          {filmSearchGallery.map(({ id, title }) => {
            return (
              <ItemFilm key={id}>
                <NavFilmItem to={`${id}`}>{title}</NavFilmItem>
              </ItemFilm>
            );
          })}
        </ListFilm>
      )}
    </div>
  );
};
