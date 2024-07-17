import React from 'react';

const Card = ({ video, aoEditar, aoExcluir }) => (
  <div className="cartao-video">
    <img src={video.imagem} alt={video.titulo} />
    <h3>{video.titulo}</h3>
    <p>{video.descricao}</p>
    <button onClick={() => aoEditar(video)}></button>
    <button onClick={() => aoExcluir(video.id)}></button>
  </div>
);

export default Card;
