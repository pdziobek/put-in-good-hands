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
        if (event.target.innerText === "Foundations") {
            setEntitiesGroup("foundations");
        } else if (event.target.innerText === "Organizations") {
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
                    <button onClick={handleEntities} id="foundations">Fundacjom</button>
                    <button onClick={handleEntities} id="organizations">Organizcjom <br/>pozarządowym</button>
                    <button onClick={handleEntities} id="collections">Lokalnym <br/>zbiórkom</button>
                </div>

                {/*TU KOMPONENTY Z DANYMI Z JSON SERVERA?*/}
                <Entities chosenFund={entitiesGroup} paginate={paginate} addActiveStyle={addActiveStyle} currentPage={currentPage}/>

            </section>

        </>
    )
};

// return (
//     <div id="organizations" className="organzations">
//         <Title content="Who are we helping?" />
//         <div className="orgs_buttons">
//             <Button
//                 content="Foundations"
//                 className="button small_button active"
//                 handleClick={handleFunds}
//             />
//             <Button
//                 content="Organizations"
//                 className="button small_button"
//                 handleClick={handleFunds}
//             />
//             <Button
//                 content="Local Collections"
//                 className="button small_button"
//                 handleClick={handleFunds}
//             />
//         </div>
//         <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//             veniam, quis nostrud exercitation ullamco laboris nisi.
//         </p>
//         <Foundations
//             chosenFund={organizationsGroup}
//             paginate={paginate}
//             addActiveStyle={addActiveStyle}
//             currentPage={currentPage}
//         />
//     </div>
// );
// }