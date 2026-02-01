import React, { useState } from "react";
import "./App.css";
import sahteVeri from "./sahteVeri"; // ← EKLENDİ

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [aramaKriteri, setAramaKriteri] = useState("");

  const aramaHandler = (value) => {
    setAramaKriteri(value);
    if (value === "") {
      setGonderiler(sahteVeri);
      return;
    }

    const aramaSonuclari = gonderiler.filter((gonderi) =>
      gonderi.username.includes(value)
    );

    setGonderiler(aramaSonuclari);
  };

  const gonderiyiBegen = (gonderiID) => {
    const yeniGonderiler = gonderiler.map((gonderi) =>
      gonderi.id === gonderiID
        ? { ...gonderi, likes: gonderi.likes + 1 }
        : gonderi
    );

    setGonderiler(yeniGonderiler);
  };

  return (
    <div className="App">
      {/* Buraya AramaCubugu ve Gonderiler componentleri gelecek */}
    </div>
  );
};

export default App;
