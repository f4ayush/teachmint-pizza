// src/components/PizzaTable.js

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelPizza } from '../redux/slices/pizza';
import TableRows from './TableRows';

const PizzaTable = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza);
  const deliveredOrders = pizzas.filter((pizza) => pizza.stage === 'Order Picked').length;

  return (
    <table>
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Stage</th>
          <th>Total Time Spent (minutes)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {pizzas.filter(pizza=> pizza.stage != "Order Picked").map((pizza) => (
          <TableRows pizza={pizza}/>
        ))}
      <tr>Total Orders Delivered: {deliveredOrders}</tr>
      </tbody>
    </table>
  );
};

export default PizzaTable;
