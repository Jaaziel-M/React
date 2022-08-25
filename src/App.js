import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Navbar from './components/header/Navbar';
import CartWidget from './components/cart/CartWidget';
import ItemListContainer from './components/itemlist/ItemListContainer';

class App extends React.Component{
  render(){ 
    return (
      <>
        <Navbar></Navbar>
        <CartWidget></CartWidget>
        <ItemListContainer 
        title='Categorías' 
        subtitle='Listado de articulos de airsoft' 
        cat1='Marcadoras primarias'
        cat2='Marcadoras secundarias'
        cat3="Accesorios para marcadoras"
        cat4="Internos para marcadoras"
        cat5="Protección"
        />
      </>
    )
  }
  
}


export default App 