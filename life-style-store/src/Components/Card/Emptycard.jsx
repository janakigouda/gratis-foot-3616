import React from "react";
import "./Emptycard.css"
export const Emptycard = () => {
  return (
    <div className="main">
      <div>
        <h1 className="text text-h1 mt-15">Your Shopping Basket</h1>
      </div>
      <hr />
      <div className="mt-15">
        <img
          src="https://www.lifestylestores.com/_next/image?url=%2Fstatic%2Ficons%2Fempty-basket.svg&w=384&q=75"
          alt="empty bag"
        />
        <h1 className="font-18">
          The best fashion is waiting to be added in your cart !
        </h1>
        <div className="mt-25 mb-10">
          <h2 className="font-14">
            Choose from the departments below and start shopping now
          </h2>
        </div>
      </div>
      <div>
        <button className="btn wt box-shadow">Women</button>
        <button className="btn wt box-shadow">Men</button>
        <button className="btn wt box-shadow">Kids</button>
        <button className="btn wt box-shadow">Shoes & Bags</button>
      </div>
    </div>
  );
};
