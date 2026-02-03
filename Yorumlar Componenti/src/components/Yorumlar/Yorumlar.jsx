import React from 'react';
import './Yorumlar.css';
import Yorum from './Yorum';

/* ADIM 1: Yorum component'ini import edelim */

const Yorumlar = (props) => {
  const { yorumlar } = props;

  return (
    <div>
      {yorumlar.map((comment) => {
        return <Yorum yorum={comment} />;
      })}
    </div>
  );
};

export default Yorumlar;
