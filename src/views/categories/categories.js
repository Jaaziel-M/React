import React from 'react'
import ItemListContainer from '../../components/itemlistcontainer/ItemListContainer'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Categories = () => {
    const clicked = (parameter) => { return <ItemListContainer searchparameter={parameter}></ItemListContainer>}
    

    return (
        <div>
            <h1>Listado de Categorías</h1>
            <Link to={`${"Marcadoras primarias"}`}>
                <button type='button' className='btn btn-primary m-2' onClick={clicked("Marcadoras primarias")}>Marcadoras primarias</button>
            </Link>
            <Link to={`${"Marcadoras secundarias"}`}>
                <button type='button' className='btn btn-primary m-2' onClick={clicked("Marcadoras secundarias")}>Marcadoras primarias</button>
            </Link>
            <Link to={`${"Marcadoras secundarias"}`}>
                <button type='button' className='btn btn-primary m-2' onClick={clicked("Accesorios para marcadoras")}>Marcadoras primarias</button>
            </Link>
            <Link to={`${"Marcadoras secundarias"}`}>
                <button type='button' className='btn btn-primary m-2' onClick={clicked("Internos para marcadoras")}>Marcadoras primarias</button>
            </Link>
            <Link to={`${"Marcadoras secundarias"}`}>
                <button type='button' className='btn btn-primary m-2' onClick={clicked("indumentaria")}>Marcadoras primarias</button>
            </Link>
            <Link to={`${"Marcadoras secundarias"}`}>
                <button type='button' className='btn btn-primary m-2' onClick={clicked("Protección")}>Marcadoras primarias</button>
            </Link>
            
        </div>
    )
}
export default Categories