import React from 'react';

const Yorum = (props) => {
  const { yorum } = props;
  /* ADIM 4: Yorumların ekranda isim ve yorum şeklinde görünmesini sağlayalım. sahteVeri'ye bakabilirsin */

  return (
    <div className="comment-text" data-testid="yorum-area">
      <span className="user">{yorum.username}</span>{' '}
      <span className="comment">{yorum.text}</span>
    </div>
  );
};

export default Yorum;
