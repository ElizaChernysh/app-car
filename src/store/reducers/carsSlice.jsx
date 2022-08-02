import { createSlice } from '@reduxjs/toolkit';
import CarsList from '../../records.json';

const initialState = {
  cars: CarsList,
};

const strToFloat = function(str) {
  return parseFloat(str.replace(',', '.'))
};

const mileageToFloat = function(str) {
  return parseFloat(str.replace(',', ''))
};

function minMileage(str) {
  return Number(str.split('-')[0]);
}

function maxMileage(str) {
  return Number(str.split('-')[1]);
}

export const carsSlice = createSlice({
  name: 'cars',
  initialState,

  reducers: {
    getCarsByYear(state, action) {
      if (action.payload === 'Year') {
        state.cars = CarsList;
      } else {
        state.cars = CarsList.filter(item => item.year === action.payload)
      }
    },

    getCarsByTrim(state, action) {
      if (action.payload === 'Trim') {
        state.cars = CarsList;
      } else {
        state.cars = CarsList.filter(item => item.trim === action.payload)
      }
    },

    getCarsByModel(state, action) {
      if (action.payload === 'Model') {
        state.cars = CarsList;
      } else {
        state.cars = CarsList.filter(item => item.model === action.payload)
      }
    },

    getCarsByMileage(state, action) {
      if (action.payload === 'Mileage') {
        state.cars = CarsList;
      } else {
        state.cars = CarsList.filter(item => mileageToFloat(item.mileage) > minMileage(action.payload) && mileageToFloat(item.mileage) < maxMileage(action.payload) )
      }
    },

    getAllCars(state) {
      state.cars = CarsList;
    },

    sortCarsByPublication(state, action) {
      state.cars = state.cars.sort((a, b) => 
      Number(b[action.payload]) - Number(a[action.payload]));
    },

    sortCarsByPriceUp(state, action) {
      state.cars = state.cars.sort((a, b) => 
      strToFloat(a[action.payload]) - strToFloat(b[action.payload]));
    },

    sortCarsByPriceDown(state, action) {
      state.cars = state.cars.sort((a, b) => 
      strToFloat(b[action.payload]) - strToFloat(a[action.payload]));
    },

    sortCarsByMileageUp(state, action) {
      state.cars = state.cars.sort((a, b) => 
      strToFloat(a[action.payload]) - strToFloat(b[action.payload]));
    },

    sortCarsByMileageDown(state, action) {
      state.cars = state.cars.sort((a, b) => 
      strToFloat(b[action.payload]) - strToFloat(a[action.payload]));
    },
  }
});

export const { getCarsByYear, sortCarsByPublication, sortCarsByPriceUp, sortCarsByPriceDown, getCarsByTrim, getCarsByModel, getCarsByMileage, getAllCars,  sortCarsByMileageDown, sortCarsByMileageUp } = carsSlice.actions;
export default carsSlice.reducer;