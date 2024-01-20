import { createSlice } from "@reduxjs/toolkit";



const priseFilterSlice = createSlice({
    name: "price_filter",
    initialState: "",
    reducers: {
      onPriceFilter: (state, action) => {
        return action.payload;
      },
    },
  });

  export const { onPriceFilter } = priseFilterSlice.actions;
  export const priseFilterReducer = priseFilterSlice.reducer;