import React, { useEffect, useState } from 'react'
import { cancelPizza } from '../redux/slices/pizza';
import { useDispatch } from 'react-redux';
import { calculateTimeSpent } from '../utils';
function TableRows({ pizza }) {
    const dispatch = useDispatch();
    const [currentTime, setCurrentTime] = useState(new Date());
    const handleCancelOrder = (orderId) => {
        dispatch(cancelPizza(orderId));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every minute

        return () => clearInterval(intervalId);
    }, []);


    return (
        <tr key={pizza.orderId}>
            <td>{pizza.orderId}</td>
            <td>{pizza.stage}</td>
            <td>{calculateTimeSpent(currentTime, pizza.startTime)}</td>
            <td>
                {(pizza.stage === 'Order Placed' || pizza.stage === 'Order in Making') && (
                    <>
                        <button onClick={() => handleCancelOrder(pizza.orderId)}>Cancel Order</button>
                    </>
                )}
            </td>
        </tr>
    )
}

export default TableRows