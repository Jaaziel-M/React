
import './ItemListContainer.css';
import React from 'react'; 
import {useState, useEffect} from "react";
import inventory from './mocked_data';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../itemlist/ItemList';

const ItemListContainer = (props) => {
    
    let [newarr, setNewarr] = useState([]);  
    let callprom = new Promise((resolve,reject)=>{
        
        setTimeout((resolve(inventory)),2000)
        setTimeout((reject("failure")),3000)
    })
    useEffect( ()=>{
        callprom.then((arr)=>{
            setNewarr(arr)
    })},[]);
    return(
        <div className='container'>  
            <ItemList arry={newarr} search={props.searchparameter}></ItemList>
        </div>
        
    )
} 
export default ItemListContainer 