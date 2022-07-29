import { createSlice } from '@reduxjs/toolkit';
import CarsList from '../../cars.json';

const initialState = {
  cars: CarsList.cars,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,

  reducers: {
    getCarsByYear(state, action) {
      state.cars = state.cars.filter(item => item.year === action.payload)
    }
  }
});

export const { getCarsByYear } = carsSlice.actions;
export default carsSlice.reducer;