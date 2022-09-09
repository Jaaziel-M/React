import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import deagle from './deagle.png';
import './Navbar.css';
import CartWidget from '../cart/CartWidget'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'


//ingreso del carrito como children
const Navbar = () => {
    return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className='container-fluid'>

                    <CartWidget className="nav-link active justify-content-start" aria-current="page" href="#"></CartWidget>
                    
                        <Link to='/home' className="navbar-brand fs-2 justify-content-center">        
                            AirShop 
                            <img src={deagle} className="logo" ></img>
                        </Link>
                    <Link to='/category/'>
                        <b className='display-4'>Categorías</b>
                    </Link>
                </div>
            </nav>

    );
}

export default Navbar;