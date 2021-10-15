import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import background from '../../assets/login-img.png';
import logo from '../../assets/logo.png';
import {FiLogIn,FiKey} from 'react-icons/fi';
import api from '../../services/api';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        const userData = {
            email
        };
    

       try{
        const response = await api.post('session', {email,password});
        localStorage.setItem('name',response.data.name);
        localStorage.setItem('email',userData.email);
        localStorage.setItem('password',password);
        history.push('/profile')
       } catch(error){
        alert(`Falha no login, tente novamente.`)
       }
    }
    return(
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Logo"></img>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>
                    <input type="email" placeholder="Seu email" value={email} onChange ={e => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="Sua senha" value={password} onChange ={e => setPassword(e.target.value)}></input>
                    
                        <button className='btn-Enter'  type="submit">
                            Entrar
                        </button>
                    
                    
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

