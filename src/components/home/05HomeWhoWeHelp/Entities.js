import React, {useState, useEffect} from "react";
import axios from "axios";
import Pagination from "./Pagination";

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
        // const fetchEntities = async () => {
        //     setLoading(true);
        //     const response = await axios.get(`http://localhost:4000/${chosenEntities}`);
        //     console.log(response, 'resp');
        //     setEntities(response.data);
        //     setLoading(false);
        // };
        // console.log('?');
        console.log(chosenEntities);
        fetch(`http://localhost:4000/${chosenEntities}`)
            .then(res => {
                return res.json();
            }).then(data => {setLoading(false);setEntities(data[1])});
    }, [chosenEntities]);

    // Calculate currently displayed page
    const lastEntity = currentPage * entitiesPerPage;
    const firstEntity = lastEntity - entitiesPerPage;
    console.log(entities, 'xxxxx');
    let firstPage = [];
    if (entities.list && entities.list.length) {
        firstPage = entities.list.slice(firstEntity, lastEntity);
        console.log(firstPage, 'fp');
    }


    // while waiting for server to response, display:
    // if (loading) {
    //     return <h3>Loading...</h3>;
    // }

    return (
        <>
            <ul className="list">
                {firstPage.map((entity, index) => (
                    <li key={index}>
                        <div>
                            <h5>{entity.name}</h5>
                            <p>{entity.description}</p>
                        </div>
                        {/*<p>{entity.list.donation}</p>*/}
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