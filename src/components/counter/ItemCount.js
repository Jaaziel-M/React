import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCount.css'
const ItemCount = (props) => {

    const [stockquantity, setStockquantity] = React.useState(props.stock);
    const [buyquantity, setBuyquantity] = React.useState(0);
    const up = () => {
        if(stockquantity!=0){
            setBuyquantity(buyquantity + 1);
            setStockquantity(stockquantity - 1)
        }
    }
    const down = () => {
        if(buyquantity!=0){
            setBuyquantity(buyquantity - 1);
            setStockquantity(stockquantity + 1)
        }
    }


    return(
        <div>
            <button className='btn btn-success' onClick={up}>+</button>
            <a  className='fuente'>{buyquantity}</a>
            <button className='btn btn-danger' onClick={down}>-</button>
            <a className='fuente'> Stock: {stockquantity}</a>
        </div>
    )
}

export default ItemCount