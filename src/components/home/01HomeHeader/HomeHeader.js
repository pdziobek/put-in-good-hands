import React from 'react';

export default function HomeHeader() {
    return (
        <header>
            <nav className='login'>
                <ul>
                    <li>Zaloguj</li>
                    <li>Załóż konto</li>
                </ul>
            </nav>
            <nav className='navigation'>
                <ul>
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
            <section>
                <div>image</div>
                <div>
                    <h1>Zacznij Pomagać!</h1>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                </div>
            </section>

        </header>
    )
};
