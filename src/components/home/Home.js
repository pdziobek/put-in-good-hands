import React from 'react';
import { render } from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import HomeHeader from "./01HomeHeader/HomeHeader";
import HomeThreeColumns from "./02HomeThreeColumns/HomeThreeColumns";
import HomeStepsToDonate from "./03HomeStepsToDonate/HomeStepsToDonate";
import HomeAboutUs from "./04HomeAboutUs/HomeAboutUs";
import HomeWhoWeHelp from "./05HomeWhoWeHelp/HomeWhoWeHelp";
import HomeContactForm from "./06HomeContactForm/HomeContactForm";

export default function Home() {
    return (
        <>
        <div>Welcome in Home</div>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeStepsToDonate/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContactForm/>
        </>
    )
};

