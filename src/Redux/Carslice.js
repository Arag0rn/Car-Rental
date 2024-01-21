import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operation";
import { addMoreCars } from './actions';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCars.fulfilled, (state, action) => {
      Notify.success('Cars were successfully fetched!');
      state.cars = action.payload;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(fetchCars.rejected, (state, action) => {
      Notify.failure('Error fetching cars!');
      state.isLoading = false;
      state.error = action.error.message || 'Unknown error';
    });
    builder.addCase(addMoreCars, (state, action) => {
      state.cars = [...state.cars, ...action.payload];
    });
  },
});

export const carsReducer = carsSlice.reducer;