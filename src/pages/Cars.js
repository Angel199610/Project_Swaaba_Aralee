// src/pages/Cars.js
import React, { useState } from 'react';
import CarForm from '../components/CarForm';
import CarList from '../components/CarList';

const Cars = () => {
  const [cars, setCars] = useState([]);

  const handleCarSubmit = (car) => {
    setCars([...cars, car]);
  };

  return (
    <div>
      <h1>Cars</h1>
      <CarForm onSubmit={handleCarSubmit} />
      <CarList cars={cars} />
    </div>
  );
};

export default Cars;
