import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// import {cartslice} from "../redux/cartslice";
import {cartslice} from "../redux/cartslice";
import { Card } from "../components/Card";
import { Footer } from "./Footer";
import { Home } from "./Home";




export const Products = () =>{
    const [products,setProducts]= useState()

    // const dispatch = useDispatch()

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((resp)=>setProducts(resp.data)).catch((err)=>console.log(err))

    },[]
    )
    // console.log(products)
    return(
        <div className="productss-main">
                    <Home></Home> <br></br>

          <h1>Our Products</h1> <br></br>
           <div className="products-container">
            {
            
                products?.map((prod)=> ( <Card key={prod.id} dataa={prod}/>
                    // <div className="single-product" key={prod.id}>
                    //     <img src={prod.image} alt={prod.title}/>
                    //     <h3>{prod.title}</h3>
                    // <p>Price: {prod.price} L.E</p>
                    // <div>
                    //     <button onClick={()=>dispatch(cartslice.actions.addtocart(prod))}>Add to Cart</button>
                    //     <button>Show more</button>

                    // </div>


                    // </div>
                )) 
}
            

          </div> 
          
                <Footer></Footer>
        </div>
    )
}