import React, { useState } from "react";
import decoration from '../../../assets/Decoration.svg';
import './style.scss'
import Entities from "./Entities";


export default function HomeWhoWeHelp() {
    const [entitiesGroup, setEntitiesGroup] = useState("foundations");
    const [currentPage, setCurrentPage] = useState(1);

    // changing page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // change entities group
    const handleEntities = (event) => {
        console.log(event.target.innerText, 'inner');
        if (event.target.id === "Foundations") {
            setEntitiesGroup("foundations");
        } else if (event.target.id === "Organizations") {
            setEntitiesGroup("organizations");
        } else {
            setEntitiesGroup("collections");
        }
        paginate(1);
        addActiveStyle(event);
    };

    // add highlight to active page
    const getAllSiblings = (element, parent) => {
        const babies = [...parent.children];
        return babies.filter((child) => child !== element);
    };

    const addActiveStyle = (event) => {
        if (event.target) {
            const siblings = getAllSiblings(event.target, event.target.parentNode);
            siblings.forEach((sibling) => sibling.classList.remove("active"));
            event.target.classList.add("active");
        }
    };


    return (
        <>
            <section className='Home-who-we-help'>
                <h5>Komu pomagamy?</h5>
                <img src={decoration}/>

                <div className='buttons'>
                    <button onClick={handleEntities} id="Foundations" className='entities-button'>Fundacjom</button>
                    <button onClick={handleEntities} id="Organizations" className='entities-button'>Organizcjom <br/>pozarządowym</button>
                    <button onClick={handleEntities} id="Collections" className='entities-button'>Lokalnym <br/>zbiórkom</button>
                </div>

                {/*TU KOMPONENTY Z DANYMI Z JSON SERVERA?*/}
                <Entities chosenEntities={entitiesGroup} paginate={paginate} addActiveStyle={addActiveStyle} currentPage={currentPage}/>

            </section>

        </>
    )
};
