import { GET_ALL_CARS } from './carTypes';

export default function carReducer(state, action) {
  switch (action.type) {
    case GET_ALL_CARS:
      return {
        ...state,
        cars: [...action.payload],
      };

    default:
      return state;
  }
}
