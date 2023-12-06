import React from 'react';
import Component3 from "./Component3.jsx";

const Component2 = ({value}) => {
    return (
        <div>
            Component2
            <Component3 value={value} />
        </div>
    );
};

export default Component2;