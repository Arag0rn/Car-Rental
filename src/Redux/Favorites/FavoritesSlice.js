import { createSlice } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const initialState = {
  favorites: [],
  isLoading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addFavorite: {
      reducer(state, action) {
        state.favorites.push(action.payload);
        Notify.success('Cars were successfully added!');
      },
      prepare(payload) {
        return { payload };
      },
    },
    removeFavorite: {
      reducer(state, action) {
        console.log(state.favorites);
        state.favorites = state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
          

        );
        Notify.success('Cars were successfully removed!');
      },
      prepare(payload) {
        return { payload };
      },
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoriteReducer = favoritesSlice.reducer;