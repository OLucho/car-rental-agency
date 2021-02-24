import { createContext, useCallback, useContext, useState } from 'react';

import api from '../service/api';

export const CarContext = createContext();

export function CarProvider({ children }) {
  const [cars, setCars] = useState([]);

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

  return (
    <CarContext.Provider value={{ cars, setCars, getAllCars }}>{children}</CarContext.Provider>
  );
}

export function useCar() {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('use Auth must be used within a SearchProvider  ');
  }
  return context;
}
