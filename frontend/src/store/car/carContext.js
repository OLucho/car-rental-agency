import { createContext, useReducer } from 'react';

import api from '../../service/api';

import carReducer from './carReducer';

import { GET_ALL_CARS } from './carTypes';

export const CarContext = createContext();

const CarContextProvider = ({ children }) => {
  const initialState = {
    cars: [],
  };

  const [state, dispatch] = useReducer(carReducer, initialState);

  const getAllCars = async () => {
    try {
      const res = await api.get('/car');
      console.log(res);
      if (res.status === 200) {
        dispatch({ type: GET_ALL_CARS, payload: res.data });
      }
    } catch (error) {
      console.log(error.message);
      // dispatch({ type: GET_CARS_ERROR, payload: error.response.data.error });
    }
  };

  return (
    <CarContext.Provider value={{ getAllCars, cars: state.cars }}>{children}</CarContext.Provider>
  );
};

export default CarContextProvider;
