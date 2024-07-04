// src/components/CarList.js
import React from 'react';

const CarList = ({ cars }) => {
  return (
    <div>
      <h2>Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.make} {car.model} - {car.year} - ${car.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
