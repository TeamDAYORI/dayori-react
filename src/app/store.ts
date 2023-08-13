import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "slices/authSlice";
import pageReducer from "slices/pageSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  page: pageReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
  timeout: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type rootState = ReturnType<typeof store.getState>;
