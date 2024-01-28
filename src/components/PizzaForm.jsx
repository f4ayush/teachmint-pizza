// src/components/PizzaForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPizza } from '../redux/slices/pizza';

const PizzaForm = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza);
  const pendingPizzas = pizzas.filter((pizza) => pizza.stage != 'Order Picked').length;

  const [pizzaConfig, setPizzaConfig] = useState({
    type: 'Veg',
    size: 'Large',
    base: 'Thin',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPizzaConfig((prevConfig) => ({
      ...prevConfig,
      [name]: value,
    }));
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    dispatch(addPizza(pizzaConfig));
    // You may want to reset the form or perform other actions here
  };

  if(pendingPizzas >= 10){
    return <p>Not taking any order for now</p>
  }

  return (
    <div>
      <h2>Pizza Order Form</h2>
      <form onSubmit={handleOrderSubmit}>
        <label>
          Type:
          <select name="type" value={pizzaConfig.type} onChange={handleInputChange}>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </label>
        <br />

        <label>
          Size:
          <select name="size" value={pizzaConfig.size} onChange={handleInputChange}>
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
        </label>
        <br />

        <label>
          Base:
          <select name="base" value={pizzaConfig.base} onChange={handleInputChange}>
            <option value="Thin">Thin</option>
            <option value="Thick">Thick</option>
          </select>
        </label>
        <br />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default PizzaForm;
