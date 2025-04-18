import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CarCard = ({ car }) => {
  const handleClick = () => {
    localStorage.setItem("selectedCar", JSON.stringify(car));
  };

  return (  
    <>
      <div className="car-card">
        <img src={car.image} alt={car.title} className="car-image" />
        <h3 className="car-title">{car.title}</h3>
        <p className="car-description">{car.description}</p>
        <Link to="/detail">
          <button className="details-button" onClick={handleClick}>
            Ətraflı
          </button>
        </Link>
      </div>
    </>
  );
};

export default CarCard;
