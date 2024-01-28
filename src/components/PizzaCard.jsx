import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cancelPizza, updatePizzaStage } from '../redux/slices/pizza';
import { calculateTimeSpent } from '../utils';

function PizzaCard({ pizza }) {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isLate, setIsLate] = useState(false)
    const [customIntervalId, setcustomIntervalId] = useState()
    const dispatch = useDispatch();
    const pizzas = useSelector((state) => state.pizza);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every minute
        setcustomIntervalId(intervalId)
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if(pizza.stage == "Order Picked"){
            clearInterval(customIntervalId)
            setIsLate(false)
        }
        else if ((currentTime - pizza.stageTime) >= 180000) {
            setIsLate(true)
        }
    }, [currentTime])

    
    
    const handleNextStage = (orderId) => {
        const pizza = pizzas.find((p) => p.orderId === orderId);
        if (pizza) {
            dispatch(updatePizzaStage({ orderId }));
        }
    };
    return (
        <div key={pizza.orderId} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', background:`${isLate? "red" : "white"}` }}>
            <p>Order: {pizza.orderId}</p>
            {pizza.stage != "Order Picked" && (
                <>
                    <p>{calculateTimeSpent(currentTime, pizza.stageTime)}</p>
                    <button onClick={() => handleNextStage(pizza.orderId)}>Next</button>
                </>
            )}

        </div>
    )
}

export default PizzaCard