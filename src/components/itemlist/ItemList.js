
import Itemstyle from "../items/Items";
import "./ItemList.css"
import React from "react";
const ItemList = (props) => {
    if(props.search == "todo"){
        return <div className='all'>
                    <div className='titles'>
                        <h1>Categorías</h1>
                        <h2>Listado de artículos de Airsoft</h2>
                    </div>
                        <div className='list'>
                            <div className='titles'>Marcadoras primarias</div>
                            <div className="item">
                                {props.arry.map((item)=>{
                                    if("Marcadoras primarias" == item.product){
                                            return <Itemstyle 
                                                brand={item.brand}
                                                description={item.description}
                                                url={item.pirctureUrl}
                                                price={item.price}
                                                quantity={item.quantity}
                                            ></Itemstyle>
                                    }
                                    })}
                            </div>
                            <div className='titles'>Marcadoras secundarias</div>
                            <div className="item">
                                {props.arry.map((item)=>{
                                    if("Marcadoras secundarias" == item.product){

                                        return <Itemstyle 
                                                brand={item.brand}
                                                description={item.description}
                                                url={item.pirctureUrl}
                                                price={item.price}
                                                quantity={item.quantity}
                                                info={item.info}
                                                ></Itemstyle>

                                    }
                                })}
                            </div>
                            <a className='titles'>Indumentaria</a>
                            <div className="item">
                                {props.arry.map((item)=>{
                                    if("indumentaria" == item.product){

                                            return <Itemstyle 
                                                brand={item.brand}
                                                description={item.description}
                                                url={item.pirctureUrl}
                                                price={item.price}
                                                quantity={item.quantity}
                                            ></Itemstyle>
                                    }
                                })}
                            </div>
                            <a className='titles'>Protección</a>
                            <div className="item">
                                {props.arry.map((item)=>{
                                    if("Protección" == item.product){

                                            return <Itemstyle 
                                                brand={item.brand}
                                                description={item.description}
                                                url={item.pirctureUrl}
                                                price={item.price}
                                                quantity={item.quantity}
                                            ></Itemstyle>
                                    }
                                })}
                            </div>
                            <a className='titles'>Accesorios para marcadoras</a>
                            <div className="item">
                                {props.arry.map((item)=>{
                                    if("Accesorios para marcadoras" == item.product){
                                            return <Itemstyle 
                                                brand={item.brand}
                                                description={item.description}
                                                url={item.pirctureUrl}
                                                price={item.price}
                                                quantity={item.quantity}
                                            ></Itemstyle>
                                    }
                                })}
                            </div>
                            <a className='titles'>Internos para marcadoras</a>
                            <div className="item">
                                {props.arry.map((item)=>{
                                    if("Internos para marcadoras" == item.product){
                                            return <Itemstyle 
                                                brand={item.brand}
                                                description={item.description}
                                                url={item.pirctureUrl}
                                                price={item.price}
                                                quantity={item.quantity}
                                            ></Itemstyle>
                                    }
                                })}
                            </div>
                    </div>  
                </div>
    }
    else{
        return <div className='all'>
                    <div className='titles'>
                        <h1>Categoría {props.search}</h1>
                            <div className="item">
                                {props.arry.map((item)=>{
                                    if(props.search == item.product){
                                            return <Itemstyle 
                                                brand={item.brand}
                                                description={item.description}
                                                url={item.pirctureUrl}
                                                price={item.price}
                                                quantity={item.quantity}
                                            ></Itemstyle>
                                    }
                                })}
                            </div>
                    </div>
                </div>
    }
}

export default ItemList
