import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png';
import userIlustration from '../../assets/user-ilustration.png'
import hash from '../../assets/hash-course.png'


import {FiLogOut} from 'react-icons/fi';

export default function course (){
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
                <h1 className="">Cursos</h1>
                <div className="Course">
                  <h2 className="nivel">Nivel: Básico</h2>
                    <Link to="/Begin">
                        <div className="content-course">
                            <div className="description">
                                <h2>Iniciando no mundo SAP</h2>
                                <p>Aprenda o Básico de SAP, desde os módulos até licenciamento.</p>
                                <span>Instrutor: Gustavo Henrique</span>
                            </div>
                            <img src={hash} alt="icone de hash"></img>
                        </div>
                    </Link>
                </div>

                <div className="Course">
                  <h2 className="nivel">Nivel: Intemediario</h2>
                    <Link to="/Begin">
                        <div className="content-course">
                            <div className="description">
                                <h2>Aprenda sobre Crystal Reports</h2>
                                <p>Aprenda sobre a ferramenta mais utilizada para gerar relatorios.</p>
                                <span>Instrutor: Gustavo Henrique</span>
                            </div>
                            
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}