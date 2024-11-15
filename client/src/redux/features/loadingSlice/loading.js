import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      const setLoading = action.payload;
      state.loading = setLoading;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
