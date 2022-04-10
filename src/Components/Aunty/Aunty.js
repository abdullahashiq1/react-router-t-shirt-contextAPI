import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [ornament, house] = useContext(RingContext);
    return (
        <div>
            <h4>Aunty</h4>
            <p><small>Gift: {house}</small></p>
        </div>
    );
};

export default Aunty;