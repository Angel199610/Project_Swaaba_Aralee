// src/components/CarDetails.js
import React from 'react';

const CarDetails = ({ car }) => {
  if (!car) {
    return <div>Select a car to see details</div>;
  }

  return (
    <div>
      <h2>{car.make} {car.model}</h2>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      <p>Description: {car.description}</p>
    </div>
  );
};

export default CarDetails;
