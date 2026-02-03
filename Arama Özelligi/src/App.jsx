import React, { useState } from 'react';

/* 
  ADIM 0: AramaCubugu'nu import edebilirsin.
  */
import Gonderiler from './components/Gonderiler/Gonderiler.jsx';
import sahteVeri from './sahteVeri.js';
import './App.css';
import AramaCubugu from './components/AramaCubugu/AramaCubugu.jsx';

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [aramaKriteri, setAramaKriteri] = useState('');

  /* 
  ADIM 1: Burada bir change Handler fonskiyonu yazabilirsin.
  */
  const aramaHandler = (value) => {
    setAramaKriteri(value);
    if (value === '') {
      setGonderiler(sahteVeri);
      return;
    }

    const aramaSonuclari = gonderiler.filter((gonderi) => {
      if (gonderi.username.includes(value)) {
        return gonderi;
      } else {
        return false;
      }
    });
    setGonderiler(aramaSonuclari);
  };

  const gonderiyiBegen = (gonderiID) => {
    const yeniGonderiler = gonderiler.map((gonderi) => {
      if (gonderi.id === gonderiID) {
        return { ...gonderi, likes: gonderi.likes + 1 };
      } else {
        return gonderi;
      }
    });
    setGonderiler(yeniGonderiler);
  };

  return (
    <div className="App">
      <AramaCubugu aramaKriteri={aramaKriteri} aramaHandler={aramaHandler} />

      <Gonderiler gonderiyiBegen={gonderiyiBegen} gonderiler={gonderiler} />
    </div>
  );
};

export default App;
