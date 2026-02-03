import React, { useState } from 'react';

export default function Main({ addUser }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addUser(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="main-container">
      <h2>Kullanıcı Kaydı</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Çalışanın tam adı ve soyadı" // ✅ Testin istediği placeholder
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
}
