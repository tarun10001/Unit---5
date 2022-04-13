import React from 'react';
import "../App.css";

function Link({link}) {

    return (
        <div className="link">
            {link.map((el) => {
                return <p>{el}</p>;
            })}
        </div>
    )
};

export default Link;