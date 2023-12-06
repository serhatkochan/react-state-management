import React from 'react';
import Component2 from "./Component2.jsx";

const DecrementButton = ({handleDecrement, value}) => {
    return (
        <button onClick={handleDecrement}>
            Decrement
            <Component2 value={value}/>
        </button>
    );
};

export default DecrementButton;