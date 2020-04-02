import React from 'react';
import decoration from '../../../assets/Decoration.svg';
import heroImage from '../../../assets/Home-Hero-Image.jpg';
import './style.scss';

export default function HomeHeader() {
    return (
        <header>
                <div>
                    {/*<img src={heroImage}/>*/}
                </div>


                <div>
                    <h1>Zacznij Pomagać!</h1>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src={decoration}/>
                </div>
                <div>
                    <button>oddaj rzeczy</button>
                    <button>zorganizuj zbiórkę</button>
                </div>
        </header>
    )
};
