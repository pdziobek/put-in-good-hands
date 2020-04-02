import React from "react";
import {Link} from "react-router-dom";
import './style.scss';


export default function Navbar() {
    return (
        <nav className='login-nav'>
            <ul className='login-list'>
                <li><Link className='login-list-item' to="/login">Zaloguj</Link></li>
                <li><Link className='login-list-item' to="/register">Załóż konto</Link></li>
            </ul>
        </nav>
    )
}