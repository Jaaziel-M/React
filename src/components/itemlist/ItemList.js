
import React from 'react'; 
import inventory from './mocked_data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './items.css'
//const ItemList = (props) => {
//    let flag = false
//    const arreglo = inventory.map(
//        (item) => {
//            if(props.argu == item.product){
//                flag = true
//                return item
//            }
//        }
//    )
const ItemList = (props) => {
    let flag = false
    const arreglo = inventory.map(
            (item) => {
                if(props.argu == item.product){
                    flag = true
                    return item
                }
            }
        )
    

    let callprom = new Promise((resolve,reject)=>{
        if(flag == true){
            setTimeout((resolve("success")),2000)
            
        }else{
            setTimeout((reject("failure")),3000)
        }
    }
    );

    //console.log(Object.values(arreglo[12])[0])
    //{Object.values(arreglo[12])[0]}
    //{Object.values(arreglo[12])[1]}
    //{Object.values(arreglo[12])[2]}
    
    let newarr = []
    


    callprom.then((msg)=>{
        if(msg == "success"){
            for(let arr of arreglo){
                if(arr != undefined){
                    for(let i=1; i<6; i++){
                      //console.log(Object.values(arr)[i])
                        newarr.push(Object.values(arr)[i])
                    
                    }     
                    //ewarr.push(arr)
                    // Aca puedo exportar solo la logica del map y luego al itemlistcontainer solo le paso lo que escupe items

                }
                
            }
        }
        console.log(newarr)
        return(<div>algo</div>)
    }
    )
    callprom.catch((msg)=>{console.log(msg)})
    //for(let arr of arreglo){
    //    if(arr != undefined){
    //        for(let i=0; i<5; i++){
    //            console.log(Object.values(arr)[i])
    //            newarr.push(Object.values(arr)[i]+"\n")
    //        }
    //    }
    //}
    return(
        <div className='ItemContainer'>
            <p className='txt'>{newarr[4]}</p>
            <img className='Img' src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/863/270/products/marcadora-airsoft-krytac-tridet-mk2-crb-m-combat-grey-121-84ed1c2102f25481e216536662489777-480-0.jpg"></img>
            <ul>
                <li className='txt'>$ 1000</li>
            </ul>
            <div className='buttons'>
                <button type="button" className="btn btn-outline-info btn-sm">Comprar</button>
                <button type="button" className="btn btn-outline-warning btn-sm">Detalles</button>
            </div>
        </div>
    )
} 

export default ItemList
