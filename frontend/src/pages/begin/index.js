import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png';
import userIlustration from '../../assets/user-ilustration.png'
import certificate from '../../assets/certificate-img.png'

import {FiLogOut} from 'react-icons/fi';

export default function Begin (){
    const userName = localStorage.getItem('name');
    return(
        <div className="profile-container">
            <header>
                <div className="userMenu">
                    <img src={logo} alt="Logo"></img>
                </div>

                <div className="user">
                    <button className="btn-action" type="button">
                        <Link to="/course">
                           Cursos
                        </Link>
                    </button>

                    <button className="btn-action" type="button">
                        <Link to="/profile">
                           Perfil
                        </Link>
                    </button>

                    <button type="button" className="btn-action">
                        <Link to="/">
                            <FiLogOut size={18} color="white">
                            </FiLogOut>
                        </Link>
                    </button>

                    <div>
                        <span>Bem vindo,</span>
                        <h1>{userName}</h1>
                    </div>

                    <img src={userIlustration} alt="ilustração" className="userIlustration"></img>

                </div>

            </header>

            <div className="page-course">
                <h1>Iniciando no mundo SAP</h1>
                <div className="videos">
                    <h2>#1 SAP Overview </h2>
                    <iframe 
                        width="560" 
                        height="315" src="https://www.youtube.com/embed/271ipaccOj8" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                     </iframe>
                </div>

                <div className="videos">
                    <h2>#2 Como Cadastrar um PN</h2>
                    <iframe 
                        width="560" 
                        height="315" src="https://www.youtube.com/embed/d93mzwv9MEw" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                     </iframe>
                </div>

                

                <div className="certificate">
                    <h1>Certificação</h1>
                    <section className="user-action">
                    
                    <div className="profile-certificate">
                        <img src={certificate} alt="icone de hash"></img>
                        <div>
                            <h2>Preparado para obter seu certificado?</h2>
                            <p>Basta clicar aqui e tera acesso a nossa prova.</p>
                            <p>Lembrando que tem que atingir 80% da nota final.</p>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </div>
    );
}