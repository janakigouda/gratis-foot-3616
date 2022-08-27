import React from "react";
import "./cardslider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
export const Cardslider = (props) => {
  const slides = [
    {
      url: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010444494-Pink-DustyPink-1000010444494_01-2100.jpg",
      price:1331,
      cut:1000,
      name:"Top Skirt"
    },
    {
      url: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010447029-Pink-Pink-1000010447029_01-2100.jpg",
      price:1531,
      cut:500,
      name:"Top trouser"
    },
    {
      url: "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010034252-Blue-Teal-1000010034252_01-345.jpg",
      price:431,
      cut:50,
      name:"Plazo Suit"
    },
    {
      url: "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010485266-Green-Green-1000010485266_01-345.jpg",
      price:1755,
      cut:100,
      name: " Crop Top"
    },
    {
      url: "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010034202-Yellow-Mustard-1000010034202_01-345.jpg",
      price:931,
      cut:20,
      name:"Top Skirt"
    },
    {
      url: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010425286-Grey-Grey-1000010425286_01-2100.jpg",
      price:832,
      cut:10,
      name:"Round Suit"
    },
    {
      url: "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010459739-Yellow-Lime-1000010459739_01-345.jpg",
      price:5000,
      cut:100,
      name:"Hoddiee"
    },
  ];
  const slideLeft = () => {
   console.log("left")
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    console.log("right")
    slider.scrollLeft= slider.scrollLeft - 300;
  };
  return (
      <>
   <h2 className="card_head">You may also like</h2>
    <div id="main_slider_container">
      <MdChevronLeft size={40} className="slider-icon left" />
      <div id="slider">
        {slides.map((slide, index) => {
          return (
            <div className="slider_card" onClick={slideLeft}>
              <div className="slider_img_box">
                  <p><i class="fa-solid fa-heart hurt"></i></p>
                <img className="slider_img" src={slide.url} alt="" /><br />
                 <span><b>₹ {slide.price}</b></span>  ₹ <span style={{textDecoration:" line-through", color:"grey"}}> {slide.cut}</span>
                <p>{slide.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
        </>
  );
};


