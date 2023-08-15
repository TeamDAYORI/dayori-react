import { createSlice } from "@reduxjs/toolkit";
import { rootState } from "app/store";

export interface pageConfig {
  pageInfo: {
    title: string;
    content: string;
  };
}

const initialState: pageConfig = {
  pageInfo: {
    title: "",
    content: "",
  },
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, { payload: { pageInfo } }) => {
      state.pageInfo = pageInfo;
    },
  },
});

export const { setPage } = pageSlice.actions;
export const selectPage = (state: rootState) => state.page.pageInfo;

export default pageSlice.reducer;
