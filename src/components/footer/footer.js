import React from "react";
import { Link } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/LOGOVAGALUMES.jpg';

function Footer(){
    return (

    <footer>
        <img alt="minha logo"id='logo' src={Logo}/>
        <span>Todos  os direitos reservados © </span> 
        <span>Desenvolvido por: Francisco William</span>

        <nav class="footer-navigation">
            <ul class="footer-list">
                <Link style={{ textDecoration: 'none' }} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/fotos'>
                    <li>Fotos</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/contato'>
                    <li>Contato</li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/comentarios'>
                    <li>Comentários</li>
                </Link>
            </ul>
        </nav>
    </footer>
    );
}

export default Footer;