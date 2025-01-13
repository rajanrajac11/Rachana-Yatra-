import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      (state.loading = false),
        (state.error = false),
        (state.currentUser = action.payload);
    },
    loginFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    signout: (state) => {
      state.loading = false;
      state.error = false;
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, signout } =
  userSlice.actions;
export default userSlice.reducer;
