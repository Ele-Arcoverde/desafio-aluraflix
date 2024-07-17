import React from 'react';

const Banner = ({ imagem, titulo }) => (
  <div className="banner" style={{ backgroundImage: `url(${imagem})` }}>
    <h1>{titulo}</h1>
  </div>
);

export default Banner;
