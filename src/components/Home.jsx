import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PizzaStack from './PizzaStack';


const Home = () => {
    const pizzas = useSelector((state) => state.pizza);
    const [orderPlaced, setOrderPlaced] = useState([]);
    const [orderInMaking, setOrderInMaking] = useState([]);
    const [orderReady, setOrderReady] = useState([]);
    const [orderPicked, setOrderPicked] = useState([]);

    useEffect(() => {
        // Initialize pizzas into respective arrays
        setOrderPlaced(pizzas.filter((pizza) => pizza.stage === 'Order Placed'));
        setOrderInMaking(pizzas.filter((pizza) => pizza.stage === 'Order in Making'));
        setOrderReady(pizzas.filter((pizza) => pizza.stage === 'Order Ready'));
        setOrderPicked(pizzas.filter((pizza) => pizza.stage === 'Order Picked'));
    }, [pizzas]);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <PizzaStack title={"Order Placed"} pizzaArray={orderPlaced} />
            <PizzaStack title={"Order in Making"} pizzaArray={orderInMaking} />
            <PizzaStack title={"Order Ready"} pizzaArray={orderReady} />
            <PizzaStack title={"Order Picked"} pizzaArray={orderPicked} />
        </div>
    );
};

export default Home;
