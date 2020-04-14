import React, { useState, useEffect } from "react";
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
            const fetchEntities = async () => {
                setLoading(true);
                const response = await axios.get(`http://localhost:4000/${chosenEntities}`);
                setEntities(response.data);
                setLoading(false);
            };

            fetchEntities();
        }, [chosenEntities]);

        // Calculate currently displayed page
        const lastEntity = currentPage * entitiesPerPage;
        const firstEntity = lastEntity - entitiesPerPage;
        const firstPage = entities.slice(firstEntity, lastEntity);

        // while waiting for server to response, display:
        if (loading) {
            return <h3>Loading...</h3>;
        }

        return (
            <>
                <ul className="list">
                    {firstPage.map((entity, index) => (
                        <li key={index}>
                            <div>
                                <h5>{entity.list.name}</h5>
                                <p>{entity.list.description}</p>
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