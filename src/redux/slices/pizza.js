// src/features/pizzaSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const initialState = [];

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addPizza: (state, action) => {
      const newPizza = {
        orderId: uuidv4(),
        type: action.payload.type,
        size: action.payload.size,
        base: action.payload.base,
        stage: 'Order Placed',
        startTime: Date.now(),
        stageTime: Date.now(), // Initial remaining time in minutes
      };
      state.push(newPizza);
    },
    updatePizzaStage: (state, action) => {
      const { orderId } = action.payload;
      const pizza = state.find((p) => p.orderId === orderId);

      if (pizza) {
        if (pizza.stage === 'Order Placed') {
          pizza.stage = 'Order in Making';
        } else if (pizza.stage === 'Order in Making') {
          pizza.stage = 'Order Ready';
        } else if (pizza.stage === 'Order Ready') {
          pizza.stage = 'Order Picked';
        }
        pizza.stageTime = Date.now();
      }
    },
    cancelPizza: (state, action) => {
      const orderId = action.payload;
      const index = state.findIndex((pizza) => pizza.orderId === orderId);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addPizza, updatePizzaStage, cancelPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
