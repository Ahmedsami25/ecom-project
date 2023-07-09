import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaShoppingCart, FaBox } from "react-icons/fa";
import { Products } from "../pages/Products";
export const Nav = () =>{
    return(
        <div className="navclass">
            <NavLink to='products' className="l"><FaBox/> Products</NavLink>
            <NavLink to='cart' className="l"><FaShoppingCart/> Cart</NavLink>
            <NavLink to='login' className="l"><FaUser/> Login</NavLink>
          

            {/* <Products></Products> */}
        </div>
    )
}