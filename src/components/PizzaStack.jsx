import React, { useEffect, useState } from 'react'
import PizzaCard from './PizzaCard';
  
  
function PizzaStack({ title, pizzaArray }) {
  
  return (
    <div>
      <h3>{title}</h3>
      {pizzaArray.map((pizza) => (
        <PizzaCard key={pizza.orderId} pizza={pizza} title={title}/>
      ))}
    </div>
  )
}

export default PizzaStack