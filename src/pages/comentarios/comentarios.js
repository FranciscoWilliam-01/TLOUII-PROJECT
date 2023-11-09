import React from 'react';
import Header from '../../components/header/header';
import './styles.css';
import Banner from '../../assets/BANNERELLIE.jpg';
import Footer from '../../components/footer/footer';
import Comments from '../../components/comments/comments';

function Comentarios() {
  return (
    <>
      <Header/>
      <img alt="my banner"class='banner' src={Banner}/>
      <Comments/>
      <Footer/>
    </>
  );
}

export default Comentarios;