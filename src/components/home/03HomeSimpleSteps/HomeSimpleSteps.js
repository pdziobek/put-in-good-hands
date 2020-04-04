import React from 'react';
import decoration from '../../../assets/Decoration.svg';
import icon1 from '../../../assets/Icon-1.svg';
import icon2 from '../../../assets/Icon-2.svg';
import icon3 from '../../../assets/Icon-3.svg';
import icon4 from '../../../assets/Icon-4.svg';

import './style.scss'
import {Link} from "react-router-dom";

export default function HomeSimpleSteps() {
    return (
        <>
            <section className='steps-intro' id="home-simple-steps">
                <h4>Wystarczą 4 proste kroki</h4>
                <img className='decoration' src={decoration}/>
            </section>

            <section className='simple-steps'>

                <div className='simple-step'>
                    <img src={icon1}/>
                    <p>Wybierz rzeczy</p>
                    <p className='line'/>
                    <p className='things'>ubrania, zabawki, <br/>sprzęt i inne</p>
                </div>

                <div className='simple-step'>
                    <img src={icon2}/>
                    <p>Spakuj je</p>
                    <p className='line'/>
                    <p className='things'>skorzystaj z <br/>worków na śmieci</p>
                </div>

                <div className='simple-step'>
                    <img src={icon3}/>
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <p className='line'/>
                    <p className='things'>wybierz zaufane <br/>miejsce</p>
                </div>

                <div className='simple-step'>
                    <img src={icon4}/>
                    <p>Zamów kuriera</p>
                    <p className='line'/>
                    <p className='things'>kurier przyjedzie <br/>w dogodnym terminie</p>
                </div>

            </section>
            <section className='simple-step-button'>
            <Link className='button' to="/login">oddaj <br/>rzeczy</Link>
            </section>
        </>
    )
};