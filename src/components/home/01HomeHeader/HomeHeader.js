import React from 'react';
import decoration from '../../../assets/Decoration.svg';
import heroImage from '../../../assets/Home-Hero-Image.jpg';
import './style.scss';
import {Link} from "react-router-dom";

export default function HomeHeader() {
    return (
        <header>

                <section className='left-home-header'/>



                <section className='right-home-header'>
                    <h1>Zacznij Pomagać!</h1>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img className='decoration' src={decoration}/>

                <div className='buttons'>
                    <Link className='button' to="/login">oddaj <br/>rzeczy</Link>
                    <Link className='button' to="/login">zorganizuj<br/> zbiórkę</Link>
                </div>
                </section>

        </header>
    )
};
