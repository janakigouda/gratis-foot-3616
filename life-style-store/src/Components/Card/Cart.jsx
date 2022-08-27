import React, { useEffect, useState } from "react";
import "./cart.css";
import { Checkoutbtn } from "./Checkoutbtn";
import { Emptycard } from "./Emptycard";
import { Offer } from "./Offer";
import { useDispatch, useSelector } from "react-redux";
import { delItem } from "../Redux/actions";
import { useNavigate, useParams } from "react-router-dom";

export const Cart = () => {
 
    // const store=useSelector((store)=>store.addItem)
      //  const data=`https://lifestyle-back.herokuapp.com/products`
   
   var [product,setProduct]=useState({});
   const navigate=useNavigate()
   const [cart,setCart]=useState({})
 
   // var [len,setLen]=useState(store)
   useEffect(()=>{
    getData()
   },[]);
   
   
   
   const {id}=useParams()
   
   const getData=()=>{
     fetch(`https://lifestyle-back.herokuapp.com/products/${id}`)
     .then((response)=>response.json())
     .then((pro)=>setCart(pro))
   //    setLen(data.length)
   }
   
//  function cartdata(){
//    setCart(product)
//  }

  console.log(cart);
  const dispatch = useDispatch();
  // console.log("state", state);
  const [counter, setCounter] = useState(1);
  const handleclick = (data) => {
    if (counter == 0) {
      setCounter(1);
    } else {
      setCounter(counter + data);
    }
  };
  // const cartItems = (cartItem) => {
    const xyz=()=>{
    return (
      <div className="main-div">
        <div>
          <h1 className="text text-h1">Your Shopping Basket</h1>
        </div>
        <hr />
        <p className="text text-p">{counter} products</p>
        <div className="cart-div offer-padding">
          <div className="flex-div">
            <div className="cart-item mb-15">
              <div className="c-itm">
                <div className="img-div">
                  <img
                    src={cart.image1}
                    alt="title"
                  />
                </div>
                <div className="card-details">
                  <p style={{margin:"10px"}}>{cart.productName}</p>
                  <p className="ruppe-sign">
                    <span style={{marginLeft:"10px" }}>₹</span>{cart.price}<span style={{color:"green", marginLeft:"10px" }}>₹ 350 saved</span>
                  </p>
                  <p className="color">
                    <p className="color-title">
                      <p style={{ marginLeft:"20px" }}>color : </p>
                    </p>
                    <p className="color-name">
                      <p style={{ marginLeft:"25px" , marginTop:"7px" }}>{cart.color}</p>
                    </p>
                  </p>
                  <p className="color">
                    <p className="color-title">
                      <p style={{ marginLeft:"20px" }}>size : </p>
                    </p>
                    <p className="color-name">
                      <p style={{ marginLeft:"25px" , marginTop:"7px" }}>s</p>
                    </p>
                  </p>
                </div>
              </div>
              <div className="qty-div">
                <div className="calender">
                  <span class="material-symbols-outlined">calendar_month</span>
                  <p>Delivery in 6-9 days</p>
                </div>
                <div className="flex text-align counter-div">
                  <span
                    class="material-symbols-outlined additem"
                    onClick={() => handleclick(1)}
                  >
                    add
                  </span>

                  <div className="counter ">{counter}</div>
                  <span
                    class="material-symbols-outlined additem"
                    onClick={() => handleclick(-1)}
                  >
                    remove
                  </span>
                </div>
              </div>
              <div className="button-div">
                <div>
                  <p className="color-orange">Remove</p>
                </div>
                <div>
                  <p className="color-orange">Move to Favourites</p>
                </div>
              </div>
              <hr />
            </div>
          </div>

          <div className="cart-total">
            <div className="flex  space-between shadow offer-padding">
              <div className=" flex flex-itm">
                <p>Deliver to</p>
                <p className="margin-l5">415403</p>
              </div>
              <div>
                <p className="color-orange"> Change</p>
              </div>
            </div>
            <Offer />
            <Checkoutbtn price={cart.price}  />
          </div>
        </div>
      </div>
    );
  };
  const emptyCard = () => {
    return <Emptycard />;
  };

  return (
    // <>
    //   {state.length == 0 && emptyCard()}
    //   {state.length!==0 && state.map(cartItems)}
    // </>
    <>
      {counter < 1 && emptyCard()}
      {counter >= 1 && xyz()}
    </>
  );
};



