import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    info: {},
    repos: [],
  },
  reducers: {
    setUserInfo: (state, action) => {
      return {
        ...state,
        info: action.payload.user,
        repos: action.payload.repos,
      };
    },
  },
});

export const { setUserInfo } = slice.actions;

export default slice.reducer;
