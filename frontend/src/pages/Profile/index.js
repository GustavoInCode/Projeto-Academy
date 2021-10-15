import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png';
import userIlustration from '../../assets/user-ilustration.png'
import {FiLogOut} from 'react-icons/fi';

export default function Profile (){
    const userName = localStorage.getItem('name');
    const userEmail = localStorage.getItem('email');
    return(
        <div className="profile-container">
            <header>
                <div className="userMenu">
                <img src={logo} alt="Logo"></img>
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
                </div>

                <div className="user">
                    <div>
                        <span>Bem vindo,</span>
                        <h1>{userName}</h1>
                    </div>
                    
                    <img src={userIlustration} alt="ilustração" className="userIlustration"></img>
                </div>

            </header>

            <section className="perfil" >
                <h1>Perfil</h1>
                <div className="user-info">
                    <div className="box-name">
                        <p>Nome:</p>
                        <h1>{userName}</h1>
                    </div>

                    <div className="box-name">
                        <p>Email:</p>
                        <h1>{userEmail}</h1>
                    </div>
                </div>

                <div className="user-info">
                    <div className="box-name">
                        <p>Alterar senha?</p>
                        <input type="password" placeholder="Digite a sua nova senha"></input>
                        <button type="submit">Solicitar alteração</button>
                    </div>

                    <div className="box-name">
                        <p>Alterar email?</p>
                        <input type="email" placeholder="Digite o seu novo email"></input>
                        <button type="submit">Solicitar alteração</button>
                    </div>
                </div>

                <div className="user-info">
                    <div className="box-name">
                        <p>Deseja enviar sua Sugestão ou Critica?</p>
                        <p>envie um email para testando@hotmail.com </p>
                    </div>
                </div>
            </section>
        </div>
    );
}