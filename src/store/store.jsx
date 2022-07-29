import { configureStore } from '@reduxjs/toolkit';
import carsSlice from './reducers/carsSlice';

export const store = configureStore({
  reducer: {
    cars: carsSlice,
  }
});