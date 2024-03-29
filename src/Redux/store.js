
import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./Carslice";
import { favoriteReducer } from "./Favorites/FavoritesSlice";
import { filterReducer } from "./Filter/Filterslice";
import { priseFilterReducer } from "./Filter/PriceFilter";





export const store = configureStore ({
  reducer:{
  cars: carsReducer,
  favorites: favoriteReducer,
  filter: filterReducer,
  price_filter:priseFilterReducer,
  },
});