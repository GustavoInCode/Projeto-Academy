import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png';
import {FiLogOut} from 'react-icons/fi';

export default function Profile (){
    return(
        <div className="profile-container">
            <header>
                <img src={logo} alt="Logo"></img>

                <div className="user">
                    <span>Bem vindo, Gustavo</span>

                    <button type="button">
                        <Link to="/">
                            <FiLogOut size={18} color="red">
                            </FiLogOut>
                        </Link>
                    </button>
                </div>
            </header>

            <section className="courseContent">
                <h1>Cursos</h1>
                <div className="course">

                </div>
            </section>
        </div>
    );
}