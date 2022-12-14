import {Route,Routes} from "react-router-dom";
import Home from "../Components/Home";
import {Category} from "../Components/Category/Category";
import { Product } from "../Components/productshow/Product";
import { Cart } from "../Components/Card/Cart"
import { Checkout } from "../Components/Checkout/Checkout"
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";

export const AllRoutes = ()=>{
    return(
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element = {<Category />}/> 
          <Route path="/category/:id" element = {<Product/>}/> 
          <Route path="/cart/:id" element = {<Cart />}/> 
          <Route path="/checkout" element = {<Checkout />}/>  
        </Routes>
    )
}