import React from "react";
import "./Reviews.css";
export const Reviews = () => {
  return (
    <>
      <div className="reviews">
        <p className="HEAD_review">Reviews</p>
        <div className="reviews_icon">
          <div>
            <span>
            <i class="fa-solid fa-comment-dots fa-2x"></i>
              <span className="head2">What do you think about </span>
              <p className="head3">this product?</p>
            </span>
          </div>
          <div>
            <button className="orangebtn">WRITE A REVIEW</button>
          </div>
        </div>
      </div>
    </>
  );
};
