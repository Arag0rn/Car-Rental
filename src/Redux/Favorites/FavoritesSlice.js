import { createSlice } from "@reduxjs/toolkit";

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
      },
      prepare(payload) {
        return { payload };
      },
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoriteReducer = favoritesSlice.reducer;