import Swal from "sweetalert2";  
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

const ItemDetail = (props) => {
    const ClickAlert = ()=>{
            Swal.fire({
                title: props.description+" US$"+props.price,
                text: props.information,
                imageUrl: props.photo,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
    }

    return(
            <button type="button" className="btn btn-outline-warning btn-sm" onClick={ClickAlert}>Detalles</button>
    )
}

export default ItemDetail