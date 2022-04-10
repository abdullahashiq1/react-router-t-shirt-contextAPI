import React from 'react';
import './Cart.css';
const Cart = ({cart, handleRemoveFromCart}) => {
    // Conditional rendering options 
    // 1. Element variable
    // 2. Ternary operator condition ? true : false
    // 3. && operator (Shorthand)
    // 4. || 

    let command;
    if(cart.length === 0) {
        command = <div>
                <h5>Ohh kipta, khoroch korr</h5>
                <p>Please Add at least one item</p>
                </div>
    }
    else if(cart.length === 1){
        command = <p>Please add more</p>
    }
    else{
        command = <p><small>Thanks for adding item</small></p>
    }

    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            
            {
                cart.map(tShirt => <p>
                {tShirt.name}
                <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}

            {cart.length === 2 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Dui jon ke ki gift dibo!!</p>
            </div>}

            {cart.length === 0 || <p className='orange'>YAY! You are buying</p>}

            {cart.length === 4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;