import React, {useState, useEffect} from "react";
import Pagination from "./Pagination";
import './style.scss'

export default function Entities({
                                     chosenEntities,
                                     paginate,
                                     currentPage,
                                     addActiveStyle,
                                 }) {
    const [entities, setEntities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [entitiesPerPage] = useState(3);

    // fetch for data from JSON Server
    useEffect(() => {
        setLoading(true);
        console.log(chosenEntities);
        fetch(`http://localhost:4000/${chosenEntities}`)
            .then(res => {
                return res.json();
            }).then(data => {setLoading(false);setEntities(data[1])});
    }, [chosenEntities]);


    //fetch for description of entities group
    // const groupDescription = "http://localhost:4000";
    // fetch(`${groupDescription}/description`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });


    // Calculate currently displayed page
    const lastEntity = currentPage * entitiesPerPage;
    const firstEntity = lastEntity - entitiesPerPage;
    console.log(entities, 'xxxxx');

    let firstPage = [];
    if (entities.list && entities.list.length) {
        firstPage = entities.list.slice(firstEntity, lastEntity);
        console.log(firstPage, 'fp');
    }


    //while waiting for server to response, display:
    if (loading) {
        return <h3>Loading...</h3>;
        //loading powinien zajmowac przestrzen zeby nie przeskakiwalo okno
    }

    return (
        <>
            <ul className="list">

                {firstPage.map((entity, index) => (

                    <li key={index}>
                        <div>
                            <h5>{entity.name}</h5>
                            <p>{entity.description}</p>
                        </div>
                        <p>{entity.donation}</p>
                    </li>
                ))}
            </ul>
            <Pagination
                entitiesPerPage={entitiesPerPage}
                allEntities={entities.length}
                paginate={paginate}
                addActiveStyle={addActiveStyle}
            />
        </>
    );
}