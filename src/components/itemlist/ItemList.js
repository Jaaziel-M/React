// a item list le voy a dar como parametro la categoría a buscar 
// recibe como parametro el arryay 
import Itemstyle from "../items/Items";
import ItemCount from "../counter/ItemCount";
import ItemListContainer from "../itemlistcontainer/ItemListContainer";
import "./ItemList.css"
const ItemList = (props) => {

    return(
        <div className='all'>
            <div className='titles'>
                <h1>Categorías</h1>
                <h2>Listado de artículos de Airsoft</h2>
            </div>
            
            <div className='list'>
                <a className='titles'>Marcadoras primarias</a>
                <ul>
                    {props.arry.map((item)=>{
                        if("Marcadoras primarias" == item.product){
                            //return(<p>{item.brand}</p>)
                            {console.log(item)}
                            <Itemstyle 
                            brand={item.brand}
                            url={item.pirctureUrl}
                            price={item.price}
                            quantity={item.quantity}
                            ></Itemstyle>
                        }
                    })}
                </ul>
                <a className='titles'>Marcadoras secundarias</a>
                <ul>
                    {props.arry.map((item)=>{
                        if("Marcadoras primarias" == item.product){
                            //return(<p>{item.brand}</p>)
                        }
                    })}
                </ul>
                <a className='titles'>Indumentaria</a>
                <ul>
                    {props.arry.map((item)=>{
                        if("indumentaria" == item.product){
                            //return(<p>{item.brand}</p>)
                        }
                    })}
                </ul>
                <a className='titles'>Protección</a>
                <ul>
                    {props.arry.map((item)=>{
                        if("Protección" == item.product){
                            //return(<p>{item.brand}</p>)
                        }
                    })}
                </ul>
                <a className='titles'>Accesorios para marcadoras</a>
                <ul>
                    {props.arry.map((item)=>{
                        if("Accesorios para marcadoras" == item.product){
                            //return(<p>{item.brand}</p>)
                        }
                    })}
                </ul>
                <a className='titles'>Internos para marcadoras</a>
                <ul>
                    {props.arry.map((item)=>{
                        if("Internos para marcadoras" == item.product){
                            //return(<p>{item.brand}</p>)
                        }
                    })}
                </ul>
            </div>
            
        </div>
        
    )
}

export default ItemList
