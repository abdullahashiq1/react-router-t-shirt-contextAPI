import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [ornament, house] = useContext(RingContext);

    return (
        <div>
            <h5>Special</h5>
            <p><small>Gift: {ornament}</small></p>
        </div>
    );
};

export default Special;