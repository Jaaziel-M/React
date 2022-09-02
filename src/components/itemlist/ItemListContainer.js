
import './ItemListContainer.css';
import ItemCount from '../counter/ItemCount';
import React from 'react'; 
import ItemList from './ItemList';

const ItemListContainer = (props) => {
    let stocki1 = 3
    let stocki2 = 7
    let stocki3 = 4
    let stocki4 = 0
    let stocki5 = 3
    
    return(
        <div className='all'>
            <div className='titles'>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
            
            <div className='list'>
                <ul >
                    <li>{props.cat1}</li>

                    <ItemCount stock={stocki1}></ItemCount>
                    <ItemList argu="Marcadoras primarias"></ItemList>
                    
                    <li>{props.cat2}</li>
                    <ItemCount stock={stocki2}></ItemCount>
                    <li>{props.cat3}</li>
                    <ItemCount stock={stocki3}></ItemCount>
                    <li>{props.cat4}</li>
                    <ItemCount stock={stocki4}></ItemCount>
                    <li>{props.cat5}</li>
                    <ItemCount stock={stocki5}></ItemCount>
                </ul>
            </div>
            
        </div>
        
    )
}

export default ItemListContainer 