import { createSlice } from "@reduxjs/toolkit";
import { rootState } from "app/store";

interface authConfig {
  accessToken: string;
}

const initialState: authConfig = {
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, { payload: { accessToken } }) => {
      state.accessToken = accessToken;
    },
  },
});

export const { setAccessToken } = authSlice.actions;
export const selectAccessToken = (state: rootState) => state.auth.accessToken;

export default authSlice.reducer;
