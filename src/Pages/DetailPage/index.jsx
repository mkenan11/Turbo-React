import React, { useState, useEffect } from "react";
import "./style.css";
import CarDetail from "../../Components/CarDetail";

const DetailPage = () => {

    const [car, setCar] = useState(null);

    useEffect(() => {
        const selectedCar = localStorage.getItem("selectedCar");
        if(selectedCar) {
            setCar(JSON.parse(selectedCar));
        }
    }, []);

    return (
        <>
        <div className="detail-container">
            {car ? <CarDetail car={car} /> : <p>No car selected</p>}
        </div>
        </>
    )
}

export default DetailPage