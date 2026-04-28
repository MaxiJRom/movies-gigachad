import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadAllMovies = createAsyncThunk(
  "movies/loadAllMovies",
  async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjc0Yjc3OGYxNzNkNzRiNzZhOTNiZDVmNGZmNmQxZiIsIm5iZiI6MTcwNTY4MTE0MS4yMDEsInN1YiI6IjY1YWFhMGY1YjBjZDIwMDEyZDE3ZTQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FumwowiL7glExLfoUkxzXROonCwmroy38Oh3nklTCiQ",
      },
    };

    try {
      let res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options,
      );

      let json = await res.json();

      return json;
    } catch (err) {
      console.error(err);
    }
  },
);

export const fetchMovieInfoById = createAsyncThunk(
  "movies/fetchMovieById",
  async (movieId) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjc0Yjc3OGYxNzNkNzRiNzZhOTNiZDVmNGZmNmQxZiIsIm5iZiI6MTcwNTY4MTE0MS4yMDEsInN1YiI6IjY1YWFhMGY1YjBjZDIwMDEyZDE3ZTQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FumwowiL7glExLfoUkxzXROonCwmroy38Oh3nklTCiQ",
      },
    };

    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        options,
      );

      let json = await res.json();

      return json;
    } catch (err) {
      console.error(err);
    }
  },
);

export const fetchMovieCastById = createAsyncThunk(
  "movies/fetchMovieCastById",
  async (movieId) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjc0Yjc3OGYxNzNkNzRiNzZhOTNiZDVmNGZmNmQxZiIsIm5iZiI6MTcwNTY4MTE0MS4yMDEsInN1YiI6IjY1YWFhMGY1YjBjZDIwMDEyZDE3ZTQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FumwowiL7glExLfoUkxzXROonCwmroy38Oh3nklTCiQ",
      },
    };

    try {
      let res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits`,
        options,
      );

      let json = await res.json();

      return json.cast.slice(0, 10);
    } catch (err) {
      console.error(err);
    }
  },
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    currentMovie: { info: {}, cast: [] },
    isLoadingMovies: false,
    hasError: false,
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllMovies.pending, (state) => {
        state.isLoadingMovies = true;
      })
      .addCase(loadAllMovies.fulfilled, (state, action) => {
        state.isLoadingMovies = false;
        state.movies = action.payload.results;
      })
      .addCase(loadAllMovies.rejected, (state) => {
        state.isLoadingMovies = false;
        state.hasError = true;
      })
      .addCase(fetchMovieInfoById.fulfilled, (state, action) => {
        state.currentMovie.info = action.payload;
      })
      .addCase(fetchMovieCastById.fulfilled, (state, action) => {
        state.currentMovie.cast = action.payload;
      });
  },
});

export default moviesSlice.reducer;

export const { setMovies } = moviesSlice.actions;
