import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchByQuery = createAsyncThunk(
  "search/searchResults",
  async (query) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjc0Yjc3OGYxNzNkNzRiNzZhOTNiZDVmNGZmNmQxZiIsIm5iZiI6MTcwNTY4MTE0MS4yMDEsInN1YiI6IjY1YWFhMGY1YjBjZDIwMDEyZDE3ZTQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FumwowiL7glExLfoUkxzXROonCwmroy38Oh3nklTCiQ",
      },
    };

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options,
      );

      const json = await res.json();

      console.log(json);

      return json;
    } catch (error) {
      console.log(error);
    }
  },
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
    searchResults: [],
  },
  reducers: {
    setQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchByQuery.fulfilled, (state, action) => {
      state.searchResults = action.payload.results;
    });
  },
});

export default searchSlice.reducer;

export const { setQuery } = searchSlice.actions;
