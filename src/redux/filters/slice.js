import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
	  name: "",
  },
  reducers: {
    changeFilter(state, {payload}) {
        state.status = payload;
    },
  },
});


// Експортуємо фабрики екшенів
export const { changeFilter } = slice.actions;

// Експортуємо редюсер слайсу
export const filterReducer = slice.reducer;