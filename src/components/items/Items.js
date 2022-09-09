
import React from 'react'; 
import './items.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../counter/ItemCount';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Link } from 'react-router-dom'

const Itemstyle = (props) => {


    return(
        <div className='ItemContainer'>
            <p className='txt'>{props.brand} - {props.description}</p>
            <img className='Img' src={props.url}></img>
            <ul>
                <li className='txt'>US$ {props.price}</li>
            </ul>
            <div className='buttons'>
                <ItemCount stock={props.quantity}></ItemCount>
            </div>
            <div className='buttons'>
                <button type="button" className="btn btn-outline-info btn-sm">Comprar</button>
                <Link to={`item/${props.description}`}>
                    <ItemDetailContainer articles={props.description} ></ItemDetailContainer>
                </Link>
                
            </div>
        </div>
    )
}

export default Itemstyle 