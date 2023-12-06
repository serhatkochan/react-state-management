import React from 'react';

const IncrementButton = ({handleIncrement}) => {
    return (
        <button onClick={handleIncrement}>Increment</button>
    );
};

export default IncrementButton;