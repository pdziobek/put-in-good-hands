import React from "react";
import NavbarLogin from "./NavbarLogin";
import { Link, animateScroll as scroll } from "react-scroll";
import './style.scss';
import HomeThreeColumns from "../home/02HomeThreeColumns/HomeThreeColumns";

export default function Navbar() {
    return (
        <>
            <NavbarLogin/>
            <nav className='navigation'>
                <ul className='navigation-list'>

                    <li>Start</li>

                    <li>
                        <Link activeClass='active' id='home-steps-to-donate' to='home-steps-to-donate' spy={true} smooth={true} offset={200} duration= {500}>
                            O co chodzi?
                        </Link>
                    </li>

                    <li><Link activeClass='active' id='home-about-us' to='home-about-us' spy={true} smooth={true} offset={300} duration= {500}>
                        O nas
                    </Link>
                    </li>

                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </>
    )
}
