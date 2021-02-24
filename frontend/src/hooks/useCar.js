import { createContext, useCallback, useContext, useState } from 'react';

import api from '../service/api';

export const CarContext = createContext();

export function CarProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState('');

  const getAllCars = useCallback(async () => {
    try {
      const res = await api.get(`/car`);
      if (res.status === 200) {
        setCars(res.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const createCar = useCallback(async (carToSave) => {
    try {
      const res = await api.post(`/car`, carToSave);
      setCar(res.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }, []);

  return (
    <CarContext.Provider value={{ cars, setCars, getAllCars, createCar, car }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCar() {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('use Auth must be used within a SearchProvider  ');
  }
  return context;
}
