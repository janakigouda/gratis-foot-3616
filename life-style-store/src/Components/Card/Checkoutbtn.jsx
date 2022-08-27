import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Checkoutbtn = ({price}) => {
  const navigate=useNavigate()
  console.log(price)
  return (
    <>
      <div class="checkout-div shadow mt-15 offer-padding ">
        <div class="flex space-between mt-0">
          <p className="checkout-p">Total MRP</p>
          <p className="checkout-p">₹ {price}</p>
        </div>
        <div class="flex space-between mt-0">
          <p className="checkout-p">Offer Discount</p>
          <p className="checkout-p" style={{color:"green"}}>- ₹ 350</p>
        </div>
        <div class="flex space-between mt-0">
          <p className="checkout-p">Shipping Charge</p>
          <p className="checkout-p">free</p>
        </div>
        <div>
          <div className=" hr">
            <hr />
          </div>
          <div class="flex space-between mtop">
            <p className="checkout-p">Total</p>
            <p>₹ 1349</p>
          </div>
          <div className="color-orange  checkout-btn" onClick={()=>{navigate("/checkout")}}>Checkout now</div>
        </div>
      </div>
      <div className="shadow mt-15 offer-padding text-start ">
        <p className="flex ">
          <h4 className="mr-10">
            <img
              height="20px"
              width="20px"
              src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/points-16.svg"
              alt="landmark"
            />
          </h4>
          <h4 className="font-16 wt-600 font-family ">
            Landmark Reward points
          </h4>
        </p>
        <p className="grey font-14 font-family text-start mtop ">
          Get 21 points with this purchase and redeem on the payment page in
          next eligible purchase(s)
        </p>
      </div>
    </>
  );
}




