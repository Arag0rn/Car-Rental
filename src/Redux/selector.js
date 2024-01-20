import { createSelector } from "@reduxjs/toolkit";

export const selectCars = state => state.cars.cars;


export const selectFilter = state => state.filter;

export const selectPriceFilter = state => state.price_filter;

export const selectPrices = createSelector(

    [selectCars],
    (cars) => {
      return cars.map(car => car.rentalPrice);
    }
  );

  export const filteredCars = createSelector(

    [selectCars, selectFilter, selectPriceFilter],
    (cars, filter, price_filter) => {
      return cars.filter(car => 
        car.make.toLowerCase().includes(filter.toLowerCase())
        && car.rentalPrice.includes(price_filter)
        )
    }
  );