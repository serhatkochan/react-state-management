import React, {useState} from 'react';
import Component2 from "./Component2.jsx";

const Component3 = ({value}) => {
    const [state, setState] = useState('Serhat');
    return (
        <div>
            Component3 value: {value} {state}
        </div>
    );
};

export default Component3;