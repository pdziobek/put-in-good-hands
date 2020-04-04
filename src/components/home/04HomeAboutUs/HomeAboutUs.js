import React from 'react';
import './style.scss';
import decoration from '../../../assets/Decoration.svg';
import signature from '../../../assets/Signature.svg';

export default function HomeAboutUs() {
    return (
        <section className='about-us' id="home-about-us">
            <div className='about-us-info'>
                <h4>O nas</h4>
                <img className='decoration' src={decoration}/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className='sign' src={signature}/>
            </div>

            <div className='about-us-img'>

            </div>

        </section>
    )
};