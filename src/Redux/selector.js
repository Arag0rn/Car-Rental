import { createSelector } from "@reduxjs/toolkit";

export const selectCars = state => state.cars.cars;


export const selectFilter = state => state.filter;

export const selectPrices = createSelector(

    [selectCars],
    (cars) => {
      return cars.map(car => car.rentalPrice);
    }
  );

  export const filteredCars = createSelector(

    [selectCars, selectFilter, selectPrices],
    (cars, filter, prices) => {
      return cars.filter(car => 
        car.make.toLowerCase().includes(filter.toLowerCase())
        &&
        prices.includes(car.rentalPrice)
        );
    }
  );