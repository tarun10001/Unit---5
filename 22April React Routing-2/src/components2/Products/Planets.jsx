import { useState } from "react";
import { useEffect } from "react";

export const Planets = () => {
    const [data, setData] = useState([]);
    useEffect(
        () => {
            // fetching data
            fetch("http://localhost:5000/router-project-sushrutinihale")
                .then(res => res.json())
                .then(dbData => {
                    setData(dbData[0].planets);
                });
        },
        []
    )
    return (
        <div className="product-layout">
            {data.map((e) => {
                return (
                    <div>
                        <img src={e.image} alt={e.title}></img>
                        <p>{e.title}</p>
                    </div>
                )
            })}
        </div>
        // <>{data.map((e) => {
        //     console.log(e)
        //     return e.title
        // })}</>
    )
}