import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showShiny: false,
};

const shinySlice = createSlice({
  name: "shiny",
  initialState,
  reducers: {
    toggleShiny(state) {
      state.showShiny = !state.showShiny;
      console.log("working")
    },
  },
});

export const { toggleShiny } = shinySlice.actions;
export default shinySlice.reducer;
