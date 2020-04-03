import React from "react";
import NavbarLogin from "./NavbarLogin";
import { Link, animateScroll as scroll } from "react-scroll";
import './style.scss';
import HomeThreeColumns from "../home/02HomeThreeColumns/HomeThreeColumns";

export default function Navbar() {
    return (
        <div className="nav-container">
            <NavbarLogin/>
            <nav className='navigation'>
                <ul className='navigation-list'>


                    <li>Start</li>

                    <li>
                        <Link to='home-simple-steps' smooth={true} duration= {1200}>
                            O co chodzi?
                        </Link>
                    </li>

                    <li><Link id='home-about-us' to='home-about-us' smooth={true} duration= {1200}>
                        O nas
                    </Link>
                    </li>

                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </div>
    )
}
