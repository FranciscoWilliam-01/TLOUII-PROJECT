import React from 'react';
import Header from '../../components/header/header';
import './styles.css';
import Banner from '../../assets/BANNER.jpg';
import Footer from '../../components/footer/footer';

function Contato() {
  return (
    <>
      <Header/>
      <img class='banner' src={Banner}/>
      <div class="formulario-titulo-conteudo">
        <div class="formulario-titulo">Contato</div>
        <form action="./Contato.js">
            <div class="conteudo">
                <label for="text">Nome</label>
                <input style={{display: 'block'}}id="text"type="text"name="text"placeholder="Nome"/>

                <label for="email">E-mail</label>
                <input style={{display: 'block'}}id="email"type="email"name="e-mail"placeholder="Coloque um e-mail válido"/>
    
                <label for="password">Senha</label>
                <input style={{display: 'block'}}id="password"type="password"name="password"placeholder="Senha"/>  
            </div>
            <div class="textarea">
                <textarea style={{display: 'block'}}id="mensagem"type="text"name="mensagem"placeholder="Digite sua mensagem aqui."rows="10">
                </textarea>
            </div>
            <div class="button-space">
                <button id="button">
                    Enviar
                </button>
            </div>
        </form>   
      </div>
      <Footer/>
    </>
  );
}

export default Contato;