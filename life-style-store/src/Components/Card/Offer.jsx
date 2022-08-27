import React from 'react'

export const Offer = () => {
  return (
    <div className="flex shadow mt-15 offer-padding">
      <div className=" flex flex-itm">
        <img
          height="67px"
          width="93px"
          src="https://www.lifestylestores.com/static/icons/gift-box.png"
          alt="offer"
        />
        <div className="margin-l5">
          <p className="font-16 float-l offers text-start">Offers for you !</p>
          <p className="font-14 float-l offers offer-desc text-start">
            Choose and apply voucher in 2 simple steps
          </p>
        </div>
      </div>
      <div>
        <p className="color-orange float-t"> Select</p>
      </div>
    </div>
    
  );
}
