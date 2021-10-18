import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png';
import userIlustration from '../../assets/user-ilustration.png'
import imgUserInfo from '../../assets/img-user-info.svg';
import userActionimg from '../../assets/img-user-action.svg';
import {FiLogOut} from 'react-icons/fi';

export default function Profile (){
    const userName = localStorage.getItem('name');
    const userEmail = localStorage.getItem('email');
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

            <section className="perfil" >
            <h1>Perfil</h1>
                <div className="user-info">
                
                    <div className="User-profile">
                   
                            <div className="box-name">
                                <p>Nome:</p>
                                <h2>{userName}</h2>
                            </div>

                            <div className="box-email">
                                <p>Email:</p>
                                <h2>{userEmail}</h2>
                            </div>
                    </div>

                    <div className="background-user">
                        <img src={imgUserInfo} alt=""></img>
                    </div>

                </div>

                <section className="user-action">
                <img src={userActionimg} alt="a"></img>
                    <div className="profile-certificate">
                        <h2>Preparado para obter seu certificado?</h2>
                        <p>Para garantir o seu certificado é necessário alcançar</p>
                        <p>80% de aproveitamento na prova final do curso.</p>
                    </div>
                </section>
            </section>
            
        </div>
    );
}