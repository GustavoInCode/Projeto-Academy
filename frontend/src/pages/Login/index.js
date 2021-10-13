import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import background from '../../assets/login-img.png';
import logo from '../../assets/logo.png';
import {FiLogIn,FiKey} from 'react-icons/fi';

export default function Login(){
    return(
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Logo"></img>

                <form>
                    <h1>Faça seu Login</h1>
                    <input type="email" placeholder="Seu email"></input>
                    <input type="password" placeholder="Sua senha"></input>
                    <Link to="/profile">
                        <button className='btn-Enter'  type="submit">
                            Entrar
                        </button>
                    </Link>
                    
                    <Link className="action-link" to="/register">
                        <FiLogIn></FiLogIn>
                        Não tenho cadastro
                    </Link>

                    <Link className="action-link" to="/">
                        <FiKey></FiKey>
                        Esqueci a senha
                    </Link>
                </form>
            </section>

            <img className="imgBackground" src={background} alt="Ilustração"></img>
        </div>
    );
}

