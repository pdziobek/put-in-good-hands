import React from 'react';
import './style.scss';

export default function HomeThreeColumns() {
    return (
        <section className='columns-container'>

            <div className='column'>
                <p className='three-columns-number'>10</p>
                <p className='three-columns-title'>oddanych worków</p>
                <p className='three-columns-txt'>Oat cake donut cake tootsie roll oat cake dessert. Sugar plum dessert macaroon liquorice I love cupcake candy canes tootsie roll.</p>
            </div>

            <div className='column'>
                <p className='three-columns-number'>5</p>
                <p className='three-columns-title'>wspartych organizacji</p>
                <p className='three-columns-txt'>Oat cake donut cake tootsie roll oat cake dessert. Sugar plum dessert macaroon liquorice I love cupcake candy canes tootsie roll.</p>
            </div>

            <div className='column'>
                <p className='three-columns-number'>7</p>
                <p className='three-columns-title'>zorganizowanych zbiórek</p>
                <p className='three-columns-txt'>Oat cake donut cake tootsie roll oat cake dessert. Sugar plum dessert macaroon liquorice I love cupcake candy canes tootsie roll.</p>
            </div>

        </section>
    )
};
