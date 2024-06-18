import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AppStateReducer from "./features/appSlice";
import UserReducer from "./features/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// Notice that appStateConfig specifies which segments of the store to persist. For example, it allows for the exclusion of sensitive data from storage.
// configure which key we want to persist

const appConfig = {
  key: "appState",
  storage: storage,
};

const rootReducer = combineReducers({
  app: AppStateReducer,
  user: UserReducer,
  // app: persistReducer(appConfig, PanelReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
