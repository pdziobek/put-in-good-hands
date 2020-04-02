import React from 'react';
import { render } from 'react-dom';
import { Link, animateScroll as scroll } from "react-scroll";

import HomeHeader from "./01HomeHeader/HomeHeader";
import HomeThreeColumns from "./02HomeThreeColumns/HomeThreeColumns";
import HomeSimpleSteps from "./03HomeSimpleSteps/HomeSimpleSteps";
import HomeAboutUs from "./04HomeAboutUs/HomeAboutUs";
import HomeWhoWeHelp from "./05HomeWhoWeHelp/HomeWhoWeHelp";
import HomeContactForm from "./06HomeContactForm/HomeContactForm";

export default function Home() {
    return (
        <>
            <HomeHeader/>

            <HomeThreeColumns/>
            <HomeSimpleSteps id='home-simple-steps'/>
            <HomeAboutUs id='home-about-us'/>
            {/*<HomeWhoWeHelp/>*/}
            {/*<HomeContactForm/>*/}
        </>
    )
};

