import React from 'react';
import decoration from '../../../assets/Decoration.svg';
import heroImage from '../../../assets/Home-Hero-Image.jpg';
import './style.scss';

export default function HomeHeader() {
    return (
        <header>

                <section className='left-home-header'/>



                <section className='right-home-header'>
                    <h1>Zacznij Pomagać!</h1>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img className='decoration' src={decoration}/>

                <div className='buttons'>
                    <button>oddaj <br/>rzeczy</button>
                    <button>zorganizuj<br/> zbiórkę</button>
                </div>
                </section>

        </header>
    )
};
