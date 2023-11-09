import React from 'react';
import Header from '../../components/header/header';
import './styles.css';
import Banner from '../../assets/BANNERZAO.jpg';
import Video from '../../assets/SnapInsta.io-The Last of Us 2 Trailer 4K Legendado (1).mp4';
import Cards from '../../components/cards/cards';
import Footer from '../../components/footer/footer';
import {Link} from 'react-router-dom';

function Home() {
  return(
    <>
      <Header/>
      <img alt="meu banner" class='banner' src={Banner}/>
      <div id='trailer-container'>
        <div className='content'>
          <video controls className='trailer'>
            <source src={Video} />
            Seu navegador não possui suporte para vídeo
          </video>
          <div id='sinopse'>
            <p className='description'>
                Ambientado cinco anos após os eventos de The Last of Us, o jogador assume o papel de duas protagonistas em um Estados Unidos pós-apocalíptico: Ellie, que busca por vingança após um evento traumático, e Abby, uma soldada que se envolve em um conflito entre uma milícia e um culto.
            </p>
            <Link style={{ textDecoration: 'none' }} to='https://www.amazon.com.br/Last-Us-Part-II-PlayStation/dp/B07ZGFHZVZ/ref=asc_df_B07ZGFHZVZ/?tag=googleshopp00-20&linkCode=df0&hvadid=379738035108&hvpos=&hvnetw=g&hvrand=497612539801973681&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-919398663091&th=1'>
              <button className='button'>Comprar game</button>
            </Link>
          </div>
        </div>
      </div>
      <Cards/>
      <Footer/>
    </>
  )
}

export default Home;