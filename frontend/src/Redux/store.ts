import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.ts";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage by default
import { combineReducers } from "redux";

// Configure persist settings
const persistConfig = {
  key: "root",
  storage, // Persist to localStorage
  whitelist: ["auth"], // Only persist the auth slice
};

// Combine reducers (you can add more reducers here if needed)
const rootReducer = combineReducers({
  auth: authReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in non-production environments
});

// Create a persistor to persist the store
const persistor = persistStore(store);

// Export store and persistor
export { store, persistor };

// Export RootState and AppDispatch for TypeScript types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;