import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './cart.css';
import ShoppingCart from './ShoppingCart.png';
import './cart.css';

const CartWidget = (props) => {
    return(
        
        <div className='marco'>
            <img src={ShoppingCart} className="shopping"></img>
            <h1 className='text'>{props.items}</h1>
        </div>
    );
}

export default CartWidget