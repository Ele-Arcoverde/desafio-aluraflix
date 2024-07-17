import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';  // Ajuste o caminho
import Footer from '../Footer/Footer';  // Ajuste o caminho
import Formulario from '../Formulario/Formulario';  // Ajuste o caminho

const Videoteca = () => {
  const aoEnviar = (e) => {
    e.preventDefault();
    const novoVideo = {
      titulo: e.target.titulo.value,
      categoria: e.target.categoria.value,
      imagem: e.target.imagem.value,
      video: e.target.video.value,
      descricao: e.target.descricao.value
    };
    axios.post('http://localhost:3001/videos', novoVideo)
      .then(response => console.log(response.data));
  };

  return (
    <>
      <Header />
      <main>
        <h1>Novo Vídeo</h1>
        <Formulario aoEnviar={aoEnviar} />
      </main>
      <Footer />
    </>
  );
};

export default Videoteca;

