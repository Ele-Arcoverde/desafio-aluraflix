import Card from '../Card/Card';
import Home from '../Home/Home';
import './Header.css'
import React from 'react'

const Header = () => (
  <header>
    <div className="logo">
      <img src='./imagens/assets/logo_img1.png' alt='logoAluraFlix' />
    </div>
    <nav>
      <button src='./imagens/Button_home.png' href='./Home.js' onClick={() => Home () }></button>
      <button src='./imagens/Button_novo-video.png'  href='./Card.js.' alt="" onClick={() => Card()}></button>
    </nav>
  </header>
)

export default Header;


 //<Link to="/novo-video">Novo Vídeo</Link> = Em <nav>

 //json-server --watch db.json --port 3001
