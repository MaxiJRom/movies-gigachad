import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    search: searchReducer,
  },
});
