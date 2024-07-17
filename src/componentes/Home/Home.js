import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';  // Ajuste o caminho
import Banner from '../Banner/Banner';  // Ajuste o caminho
import Card from '../Card/Card';  // Ajuste o caminho
import Footer from '../Footer/Footer';  // Ajuste o caminho
import Modal from '../Modal/Modal';  // Ajuste o caminho

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/videos')
   .then(response => {setVideos(response.data)})
   .catch(error => {
    console.error("There was an error!", error);
  }); 
    return () => {
      // Lógica de limpeza (se houver)
    }; 
  }, []);
  
/*axios.get('http://localhost:3001/videos')
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error("There was an error!", error);
});*/


  const aoEditar = (video) => {
    setSelectedVideo(video);
  };

  const aoExcluir = (id) => {
    axios.delete(`http://localhost:3001/videos/${id}`)
      .then(() => setVideos(videos.filter(video => video.id !== id)));
  };

  const aoSalvar = (video) => {
    axios.put(`http://localhost:3001/videos/${video.id}`, video)
      .then(response => {
        setVideos(videos.map(v => v.id === video.id ? response.data : v));
        setSelectedVideo(null);
      });
  };

  return (<>
      <Header />
      <Banner imagem="./imagens/banner_main.png" titulo="AluraFlix" />
      <div className="categorias">
        {['Frontend', 'Backend', 'Inovação'].map(categoria => (
          <div key={categoria} className="categoria">
            <h2>{categoria}</h2>
            <div className="cartoes-videos">
              {videos.filter(video => video.categoria === categoria).map(video => (
                <Card key={video.id} video={video} aoEditar={aoEditar} aoExcluir={aoExcluir} />
              ))}
            </div>
          </div>
        ))}
      </div>
{selectedVideo && <Modal video={selectedVideo} aoFechar={() => setSelectedVideo(null)} aoSalvar={aoSalvar} />}
      <Footer />

    </>
    );
}

export default Home
