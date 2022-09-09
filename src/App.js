import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Navbar from './components/header/Navbar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Views
import Home from './views/home/home';
import Categories from './views/categories/categories';
const App = () => {
  return(
    
    <Router>
      <div className='App'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/home' element={<Home></Home>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category" element={<Categories/>}/>
          <Route path="/category/id:" element={<Categories/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}


export default App 


