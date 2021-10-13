import React from 'react';
import {Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';
import logo from '../../assets/logo.png';
import imgRegister from '../../assets/register-img.png';


export default function Register(){
    return(
        <div className="register-container">
            <img src={imgRegister} alt=""></img>
            <div className="content">
                <section>
                    <img className="logo" src={logo} alt="Logo"></img>
                    <h1>Faça o seu Cadastro</h1>
                    <p>Registre-se para evoluir no Mundo SAP, aprenda com os melhores instrutores.</p>
                   
                    <form>
                        <input type="email" placeholder="Seu Nome"></input>
                        <input type="email" placeholder="Seu email"></input>
                        <input type="password" placeholder="Sua senha"></input>
                        <input type="password" placeholder="Confirme sua senha"></input>
                        <Link className="action-link" to="/">
                        <FiArrowLeft></FiArrowLeft>
                        Já possuo Cadastro
                    </Link>
                        <button className='btn-Enter' type="submit">Registrar</button>
                    </form>
                </section>
            </div>   
        </div>
    );
}