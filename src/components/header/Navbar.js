import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import deagle from './deagle.png';
import './Navbar.css';
//ingreso del carrito como children
const Navbar = ( {children}) => {
    return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className='container-fluid'>
                    <a className="navbar-brand" href="#">
                        AirShop 
                        <img src={deagle} className="logo" ></img>
                    </a>
                    
                    <div className='navbar-collapse collapse'>

                        <div className="navbar-nav" >
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link active" aria-current="page" href="#">Contacto</a>
                            <a className="nav-link active" aria-current="page" href="#">Categorías</a>
                            
                        </div>
                    </div>
                </div>
            </nav>

    );
}

export default Navbar;