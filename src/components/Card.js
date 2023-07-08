import React from "react";
import { useDispatch } from "react-redux";
import {cartslice} from "../redux/cartslice";
import { useNavigate } from "react-router-dom";
import { Footer } from "../pages/Footer";
// import { Link } from "react-router-dom";




export const Card = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className="single-product" >
                        <img src={props.dataa.image} alt={props.dataa.title}/>
                        <h4>{props.dataa.title}</h4>
                    <p>Price: {props.dataa.price} L.E</p>
                    <div>
                        <button onClick={()=>dispatch(cartslice.actions.addtocart(props.dataa))}>Add to Cart</button>
                        <button  onClick={()=>navigate(`${props.dataa.id}`)} >Show more</button>

                    </div>


                    </div> 
                    //    {   <Footer/> }

    )
}