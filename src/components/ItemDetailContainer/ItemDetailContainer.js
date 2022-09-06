import ItemDetail from "../ItemDetail/ItemDetail";
import inventory from "../itemlistcontainer/mocked_data";
//import React from "react";
import React, { useEffect, useState } from "react";

const ItemDetailContainer = (props) => {

    const [detailed, setDetailed] = useState({});  
    let callprom2 = new Promise((resolve,reject)=>{
        setTimeout((resolve(inventory)),2000)
        setTimeout((reject("failure")),3000)
    })
    useEffect(()=>{
        callprom2.then((inv)=>{
            
            inv.map((item)=>{
                //console.log(item.description)
                if(props.articles == item.description){
                    setDetailed(item)
                }
            })
    })},[]);

    
    return(
        <ItemDetail  description={props.articles} information={detailed.info} photo={detailed.pirctureUrl} price={detailed.price}></ItemDetail>
    ) 
}

export default ItemDetailContainer