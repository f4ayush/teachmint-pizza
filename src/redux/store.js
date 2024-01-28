import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './slices/pizza';

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});