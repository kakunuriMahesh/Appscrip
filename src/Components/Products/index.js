import React, { useEffect, useState } from "react";

import URL from "../URL"
import Items from "../Items"; 
import './index.css'

const url = `${URL}/products`


    
const Products = (props)=>{
    // console.log(props.view)
    const {view} = props
    const [new_collection, setNew_collection] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>setNew_collection(data))
    },[])
    
    return (
        <div>
            <div className={ 
                    `${view? 'product-items' : 'item-show'} ` 
                }>
            {new_collection.map((item, i)=>{
                // console.log(item);
                    return <Items key={i} title={item.title} image={item.image} id={item.id}/>     
                })}
            </div>
        </div>
    )
}
export default Products