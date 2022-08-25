
import './ItemListContainer.css';
import React from 'react'; 
const ItemListContainer = (props) => {
    return(
        <div className='all'>
            <div className='titles'>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
            
            <div className='list'>
                <ul >
                    <li>{props.cat1}</li>
                    <li>{props.cat2}</li>
                    <li>{props.cat3}</li>
                    <li>{props.cat4}</li>
                    <li>{props.cat5}</li>
                </ul>
            </div>
            
        </div>
        
    )
}

export default ItemListContainer 