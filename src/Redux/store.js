
import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./Carslice";





export const store = configureStore ({
  reducer:{
  cars: carsReducer,
//   filter: filterReducer
  },
});