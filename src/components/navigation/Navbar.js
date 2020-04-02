import React from "react";
import NavbarLogin from "./NavbarLogin";
import { Link, animateScroll as scroll } from "react-scroll";
import './style.scss';

export default function Navbar() {
    return (
        <>
            <NavbarLogin/>
            <nav className='navigation'>
                <ul className='navigation-list'>
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </>
    )
}
