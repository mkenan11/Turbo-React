import React from "react";
import "./style.css";

const CarDetail = ({ car }) => {
  return (
    <>
      <div className="car-detail">
        <h1 className="detail-title">{car.title}</h1>
        <img src={car.image} alt={car.title} className="detail-image" />
        <p>
          <strong>Description:</strong> {car.description}
        </p>
        <p>
          <strong>Release Year:</strong> {car.releaseYear}
        </p>
        <p>
          <strong>Price:</strong> {car.price}
        </p>
        <p>
          <strong>Engine:</strong> {car.engine}
        </p>
        <p>
          <strong>Horsepower:</strong> {car.horsepower}
        </p>
        <p>
          <strong>Color:</strong> {car.color}
        </p>
        <p>
          <strong>Mileage:</strong> {car.mileage}
        </p>
        <p>
          <strong>Owner:</strong> {car.owner}
        </p>
      </div>
    </>
  );
};

export default CarDetail;
