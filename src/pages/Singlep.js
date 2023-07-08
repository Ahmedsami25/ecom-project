import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const Singlep = () => {

const [product,setProduct] = useState()
const params = useParams()
const pid = params.id

// useEffect(()=>{
//     axios.get(`https://fakestoreapi.com/products/${pid}`).then((resp)=>console.log(resp.data)).catch((err)=>console.log(err))

// },[]
useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${pid}`).then((resp)=>setProduct(resp.data)).catch((err)=>console.log(err))

},[]
)

console.log(product)





    return(
        <div className="spp">
        <div className="sp">
        <h1> {product?.category} </h1>


          <h2> {product?.title} </h2>

           <h4> {product?.description} </h4>
            <img src={product?.image} alt={product?.title}/> 
            <h4>  Rate : {product?.rating.rate} </h4>
            <h3> Price : {product?.price} L.E</h3>


            {/* {pid} */}

            {/* <img src={product?.image} alt={product.title}/>
                        <h3>{product?.title}</h3>
                    <p>Price: {product?.price} L.E</p> */}
        </div>
        </div>
    )
}