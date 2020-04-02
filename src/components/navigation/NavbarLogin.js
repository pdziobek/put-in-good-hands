import React from "react";
import {Link} from "react-router-dom";


export default function Navbar() {
    return (
        <nav className='login'>
            <ul>
                <li><Link to="/login">Zaloguj</Link></li>
                <li><Link to="/register">Załóż konto</Link></li>
            </ul>
        </nav>
    )
}