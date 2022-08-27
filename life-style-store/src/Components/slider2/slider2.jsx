import React from "react";
import "./slider2.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
export const Slider2 = (props) => {
  const slides2 = [
    {
        url: "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010443884-Black-Black-1000010443884_01-345.jpg",
        price: 6031,
        cut: 2000,
        name: "Black top",
      },
    {
      url: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010831553-Pink-Fuchsia-1000010831553_01-2100.jpg",
      price: 2331,
      cut: 1000,
      name: "A line Dress",
    },
    {
      url: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010427364-Grey-Grey-1000010427364_01-2100.jpg",
      price: 1331,
      cut: 1040,
      name: "Top Skirt",
    },
    {
      url: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011023949-White-OffWhite-1000011023949_01-2100.jpg",
      price: 4331,
      cut: 1090,
      name: "Kurta With Straight Pants",
    },
    {
      url: "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010024511-Orange-Rust-1000010024511_01-345.jpg",
      price: 2331,
      cut: 100,
      name: "printed THree Quarter Kurta",
    },
    {
      url: "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010579154-Blue-Navy-1000010579154_01-345.jpg",
      price: 2331,
      cut: 1000,
      name: "Sweet Shirt",
    },
    {
      url: "https://lmsin.net/cdn-cgi/image/h=345,w=345,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010443113-Blue-Navy-1000010443113_01-2100.jpg",
      price: 5331,
      cut: 1000,
      name: "Jump Pant",
    },
    {
      url: "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010443884-Black-Black-1000010443884_01-345.jpg",
      price: 6031,
      cut: 2000,
      name: "Black top",
    },
    {
        url:"https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000010176451-Pink-Pink-1000010176451_01-345.jpg",
        price:4221,
        cut:100,
        name:"Slit Ethnic Top"
    }
  ];
  const slideLeft2 = () => {
    console.log("left");
    var slider2 = document.getElementById("slider2");
    slider2.scrollLeft = slider2.scrollLeft + 300;
  };

  const slideRight2 = () => {
    var slider2 = document.getElementById("slider2");
    console.log("right");
    slider2.scrollLeft = slider2.scrollLeft - 300;
  };
  return (
      <>
        <h2 className="slider_head">Customers Also Viewed</h2>
     
    <div id="main_slider_container2">
      <MdChevronLeft size={40} className="slider-icon2 left2" />
      <div id="slider2">
        {slides2.map((slide, index) => {
          return (
            <div className="slider_card2" onClick={slideLeft2}>
              <div className="slider_img_box2">
                <p>
                  <i class="fa-solid fa-heart hurt2"></i>
                </p>
                <img className="slider_img2" src={slide.url} alt="" />
                <br />
                <span>
                  <b>₹ {slide.price}</b>
                </span>{" "}
                ₹{" "}
                <span
                  style={{ textDecoration: " line-through", color: "grey" }}
                >
                  {" "}
                  {slide.cut}
                </span>
                <p>{slide.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon2 right2"
        onClick={slideRight2}
      />
    </div>
    </>
  );
};


