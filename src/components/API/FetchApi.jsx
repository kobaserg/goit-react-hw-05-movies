const API_KEY = '1c5c067e324c39f9223ad13ef9891a0a';
const mainHTTP = 'https://api.themoviedb.org/3/';

export const FetchMovieTrand = page => {
  return fetch(
    `${mainHTTP}trending/movie/day?api_key=${API_KEY}&
        &page=${page}`
  ).then(responce => responce.json());
};

export const FetchMovieID = id => {
  return fetch(`${mainHTTP}movie/${id}?api_key=${API_KEY}`).then(responce =>
    responce.json()
  );
};

export const FetchMovieRevId = id => {
  return fetch(`${mainHTTP}movie/${id}/reviews?api_key=${API_KEY}`).then(
    responce => responce.json()
  );
};

export const FetchMovieCastId = id => {
  return fetch(`${mainHTTP}movie/${id}/credits?api_key=${API_KEY}`).then(
    responce => responce.json()
  );
};

export const FetchGenres = () => {};

export const FetchSearchQuery = query => {
  return fetch(
    `${mainHTTP}search/movie?api_key=${API_KEY}&query=${query}`
  ).then(responce => responce.json());
};
