import React from "react";
import './style.scss'

export default function Pagination({
                                       entitiesPerPage,
                                       allEntities,
                                       paginate,
                                       addActiveStyle,
                                   }) {
    const pageNumbers = [];

    // set amount of pages based on number of given records
    for (let i = 1; i <= Math.ceil(allEntities / entitiesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`entities-button ${number === 1 ? "active" : ""}`}
                        onClick={(e) => {
                            paginate(number);
                            addActiveStyle(e);
                        }}
                    >
                        {number}
                    </li>
                ))}
            </ul>
        </nav>
    );
};