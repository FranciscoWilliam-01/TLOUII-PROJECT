import React from 'react';
import Header from '../../components/header/header';
import './styles.css';
import Footer from '../../components/footer/footer';

function Fotos() {
  return (
    <>
      <Header/>
      <div class="photos-cards-container">
        <div class="cards-contents">
            <div class="cardz banner-a"></div>
            <div class="cardz banner-b"></div>
            <div class="cardz banner-c"></div>
            <div class="cardz banner-d"></div>
            <div class="cardz banner-e"></div>
            <div class="cardz banner-f"></div>
            <div class="cardz banner-g"></div>
            <div class="cardz banner-h"></div>
            <div class="cardz banner-i"></div>  
        </div>
      </div> 
      <Footer/>
    </>
  );
}

export default Fotos;