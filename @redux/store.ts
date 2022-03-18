import React from "react";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

let store: any;
const persistedReducer = persistReducer(persistConfig, rootReducer);
function initStore(initialState: any) {
  let store: any = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
    preloadedState: initialState,
  });
  return store;
}

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }
  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: any) {
  const store = React.useMemo(
    () => initializeStore(initialState),
    [initialState]
  );
  return store;
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
