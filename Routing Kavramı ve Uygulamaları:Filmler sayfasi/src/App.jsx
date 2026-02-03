import React, { useState } from 'react';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import FilmListesi from './components/FilmListesi';
import Film from './components/Film';
import { movies } from './sahteVeri.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [filmler, setFilmler] = useState(movies);

  const KaydedilenlerListesineEkle = (movie) => {
    const savedMovie = savedMovies.find((item) => item.id === movie.id);
    if (!savedMovie) {
      setSavedMovies([...savedMovies, movie]);
    }
  };

  return (
    <Router>
      <KaydedilenlerListesi list={savedMovies} />
      <Switch>
        <Route exact path="/">
          <FilmListesi movies={filmler} />
        </Route>
        <Route path="/filmler/:id">
          <Film KaydedilenlerListesineEkle={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
    </Router>
  );
}
