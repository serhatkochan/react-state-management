import React, {useState} from 'react';
import DecrementButton from "./DecrementButton.jsx";
import IncrementButton from "./IncrementButton.jsx";
import CounterValue from "./CounterValue.jsx";

const Counter = () => { // State Management
    const [counterValue, setCounterValue] = useState(5);

    const handleDecrement = () => {
        setCounterValue(counterValue - 1);
    }

    const handleIncrement = () => {
        setCounterValue((counterValue) => counterValue + 1);
    }

    return (
        <div className="counter-wrapper">
            <DecrementButton handleDecrement={handleDecrement} value={counterValue} />
            <CounterValue counterValue={counterValue} />
            <IncrementButton handleIncrement={handleIncrement} />
        </div>
    );
};

export default Counter;