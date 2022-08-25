import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css';
import ShoppingCart from './ShoppingCart.png';
import './cart.css';

const CartWidget = () => {
    return(
        
        <div className='marco'>
            <img src={ShoppingCart} className="shopping"></img>
            <h1 className='text'>Shopcart</h1>
        </div>
    );
}

export default CartWidget