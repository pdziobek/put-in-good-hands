import React from "react";
import NavbarLogin from "./NavbarLogin";
import {Link} from "react-scroll";

export default function Navbar() {
    return (
        <>
            <NavbarLogin/>
            <nav className='navigation'>
                <ul>
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
