import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';
import logo from '../../assets/logo.png';
import imgRegister from '../../assets/register-img.png';
import api from '../../services/api';


export default function Register(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const history = useHistory();
    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            password
        };
    
       try{
        const response = await api.post('users', data)

        alert(`Seu cadastro foi realizado com sucesso: ${response.data.name}`)
        localStorage.setItem('name',name);
        history.push('/');
       } catch(error){
        alert(`Seu cadastro não foi realizado, tente novamente.`)
       }
    }

    
    
    return(
        <div className="register-container">
            <img className="rocket" src={imgRegister} alt=""></img>
            <div className="content">
                <section>
                    <img className="logo" src={logo} alt="Logo"></img>
                    <h1>Faça o seu Cadastro</h1>
                    <h2>Registre-se para evoluir no Mundo SAP, aprenda com os melhores instrutores.</h2>
                   
                    <form onSubmit={handleRegister}>
                        <input type="text" placeholder="Seu Nome" value={name} onChange ={e => setName(e.target.value)}></input>
                        <input type="email" placeholder="Seu email" value={email} onChange ={e => setEmail(e.target.value)}></input>
                        <input type="password" placeholder="Sua senha" value={password} onChange ={e => setPassword(e.target.value)}></input>
                        <Link className="action-link" to="/">
                            <FiArrowLeft></FiArrowLeft>
                            Já possuo Cadastro
                        </Link>
                       
                            <button className='btn-Enter' type="submit">
                                    Registrar
                            </button>
                       
                    </form>
                </section>
            </div>   
        </div>
    );
}