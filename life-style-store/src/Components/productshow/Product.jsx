import React, { useEffect, useState } from 'react'
import './Products.css'
import { useNavigate, useParams } from 'react-router-dom';
import {Details} from '../Details/Details'
import {Slider2} from '../slider2/slider2'
import { Reviews } from '../Reviews/Reviews';
import {Cardslider}  from '../Slider1/cardslider';


export const Product = () => {
var [product,setProduct]=useState({});
const navigate=useNavigate()
useEffect(()=>{
  getData()
},[]);



const {id}=useParams()

const getData=()=>{
  fetch(`https://lifestyle-back.herokuapp.com/products/${id}`)
  .then((response)=>response.json())
  .then((pro)=>setProduct(pro))
  
}

useEffect(()=>{
  getData()
},[]);


    return (
       <>
            
      <i className="heading">{product.productName}</i>
      
      <div className="mainbox">
    
      <div className="products">
        {/* <Product></Product> */}
       
              <div class="grid-item"><img className='single' src={product.image1} alt="" /> </div>
            <div class="grid-item"><img  className='single' src={product.image2} alt="" /> </div>
            <div class="grid-item"><img  className='single' src={product.image3} alt="" /></div>
            <div class="grid-item"><img  className='single' src={product.image4} alt="" /></div>
           <div class="grid-item"><img  className='single' src={product.image5} alt="" /></div>
             <div class="grid-item"><img  className='single' src={product.image6} alt="" /></div>
           
      </div>
      <div className="details">
        <Details></Details>
      </div>
    </div>
    <div className="youknow_pro">
      
      <div className="slider3">
     
        <Cardslider></Cardslider>
        <Reviews></Reviews>
        <Slider2></Slider2>
      </div>
    </div>
    </>
    )
}
