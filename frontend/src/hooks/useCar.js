import { createContext, useCallback, useContext, useState } from 'react';

import api from '../service/api';

export const CarContext = createContext();

export function CarProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState('');
  const [error, setError] = useState(false);

  const getAllCars = useCallback(async () => {
    try {
      const res = await api.get(`/car`);
      if (res.status === 200) {
        setCars(res.data);
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  }, []);

  const createCar = useCallback(async (carToSave) => {
    try {
      const res = await api.post(`/car`, carToSave);
      console.log(res);
      setCar(res.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  }, []);
  console.log(error);
  return (
    <CarContext.Provider value={{ cars, setCars, getAllCars, createCar, car, error, setError }}>
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
