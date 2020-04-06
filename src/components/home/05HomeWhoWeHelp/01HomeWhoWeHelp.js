import React from 'react';
import decoration from '../../../assets/Decoration.svg';
import './style.scss'

export default function HomeWhoWeHelp() {
    return (
        <>
            <section className='Home-who-we-help'>
                <h5>Komu pomagamy?</h5>
                <img src={decoration}/>

                <div className='buttons'>
                    <button>Fundacjom</button>
                    <button>Organizcjom <br/>pozarządowym</button>
                    <button>Lokalnym <br/>zbiórkom</button>
                </div>


                {/*TA CZĘŚĆ KODU NIE JEST STATYCZNA*/}
                {/*TU KOMPONENTY Z DANYMI Z JSON SERVERA?*/}
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić
                    czym się zajmują, komu pomagają i czego potrzebują.</p>
                <div>
                    <title>Fundacja 1</title>
                    <p>description</p>
                    <p>co mozna oddac</p>
                </div>
            </section>

        </>
    )
};