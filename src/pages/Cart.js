import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/Card";
import { cartslice } from "../redux/cartslice";
// import { Products } from "./Products";

export const Cart = () => {


const productdata = useSelector((state)=>state?.cart?.items)
const arr = productdata.filter((value, index, self)=>
index === self.findIndex((t) =>(
    t.id === value.id
)

)
)
const dispatch = useDispatch()

return (
    // <div className="productss-maiin">
        <div className="products-container">

{
    productdata.length == 0 ? <h1>Nothing Found</h1> :
    arr?.map((r)=>(
        // <div className="productss-maiin">
        // <div className="products-contaiiner" >
        <div className="single-product" >
        <img src={r.image} alt={r.title}/>
        <h3>{r.title}</h3>
    <p>Price: {r.price} L.E</p>
    <div>
        {/* <button onClick={()=>dispatch(cartslice.actions.addtocart(props.dataa))}>Add to Cart</button> */}
        <button onClick={()=>dispatch(cartslice.actions.removefromcart(r))} >Remove</button>

    </div>
</div>

    // </div>
    // </div>
    )
    )
}
        
          
    </div> 

)

}