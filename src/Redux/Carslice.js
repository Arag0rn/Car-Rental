import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operation";
import { showNotification } from 'components/notifications';

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
      showNotification('Cars were successfully fetched!');
      state.cars = action.payload;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(fetchCars.rejected, (state, action) => {
      showNotification('Error fetching cars!');
      state.isLoading = false;
      state.error = action.error.message || 'Unknown error';
    });
  },
});

export const carsReducer = carsSlice.reducer;