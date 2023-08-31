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
// export const selectAccessToken = (state: rootState) => state.auth.accessToken;
export const selectAccessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1bmhoeXllZTIyQGdtYWlsLmNvbSIsImlhdCI6MTY5MzQ3MTI1MywiZXhwIjoxNjkzNTU3NjUzfQ.5WryYuj_lvMQoPwshkI0czXEUcNMH7ubSUNcfLjPHJ4";

export default authSlice.reducer;
