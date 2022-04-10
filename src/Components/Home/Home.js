import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirts from '../hooks/useTShirts';
import Tshirts from '../Tshirts/Tshirts';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
            const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
            if (!exists) {
                const newCart = [...cart, selectedItem];
                setCart(newCart);
            }
            else {
                alert('item already added');
            }
            
    }

    const handleRemoveFromCart = (selectedItem) => {
            const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
            setCart(rest);
    }

    return (
        <div className='home-container'>
           <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <Tshirts
                    key={tShirt._id}
                    tShirt={tShirt}
                    handleAddToCart={handleAddToCart}
                    ></Tshirts>)
                }
           </div>
           <div className="cart-container">
                <Cart 
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
           </div>
        </div>
    );
};

export default Home;