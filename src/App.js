import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Navbar from './components/header/Navbar';
import CartWidget from './components/cart/CartWidget';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemCount from './components/counter/ItemCount';



class App extends React.Component{
  render(){ 
    return (
      <>
        <Navbar></Navbar>
        <CartWidget></CartWidget>
        <ItemListContainer/>
        
      </>
    )
  }
  
}


export default App 