import React from "react";
import "./footer.css";
import logo from"./Images/logo2.png"
import apple from "./Images/apple.png"
export const Footer = () => {
  return (
    <>
      <div className="border-top margin-t"></div>
      <div className=" main ">
        <div className="top-div flex">
          <div className="align-item text-justify width-60  ">
            <h4 className="">Subscribe to our awesome emails.</h4>
            <p>Get our latest offers and news straight in your inbox.</p>
            <input
              className="email border-none"
              type="email"
              placeholder="Please enter an email address"
            />
            <button className="button">Subscribe</button>
          </div>
          <div className=" text-justify flex column width-40 ">
            <h4 className="">Download App</h4>
            <p className="mt-10">Shop our products and offers on-the-go</p>
            <div className="">
              <img
                style={{ marginRight: "30px" }}
                width="160px"
                height="50px"
                src={apple}
                alt="apple store"
              />
              <img
                width="160px"
                height="50px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="google store"
              />
            </div>
          </div>
        </div>
        <div className="border-top top-div margin-t"></div>
        <div className="middlediv flex mt-10 margin-t">
          <div className="">
            <h6 className="fs-16 black margin">Women</h6>
            <p className="footer-p margin ">Tops</p>
            <p className="footer-p margin">Ethnicwear</p>
            <p className="footer-p margin">Bottoms</p>
            <p className="footer-p margin">Dresses & Jumpsuits</p>
            <p className="footer-p margin">Winterwear</p>
            <p className="footer-p margin">Lingerie</p>
            <p className="footer-p margin">Nightwear</p>
            <p className="footer-p margin">Sportswear</p>
            <p className="footer-p margin">Beauty</p>
            <p className="footer-p margin">Watches & Sunglasses</p>
          </div>
          <div className="">
            <h6 className="fs-16 black margin">Men</h6>
            <p className="footer-p margin ">Top</p>
            <p className="footer-p margin ">Bottoms</p>
            <p className="footer-p margin ">Ethnicwear</p>
            <p className="footer-p margin ">Winterwear </p>
            <p className="footer-p margin ">Sportswear</p>
            <p className="footer-p margin ">Innerwear</p>
            <p className="footer-p margin ">Grooming</p>
            <p className="footer-p margin ">Watches</p>
            <p className="footer-p margin ">Sunglasses</p>
          </div>
          <div className="">
            <h6 className="fs-16 black margin">Kids</h6>
            <p className="footer-p margin ">Girls Clothing</p>
            <p className="footer-p margin ">Boys Clothing</p>
            <p className="footer-p margin ">Infants Girls</p>
            <p className="footer-p margin ">Infants Boys</p>
            <p className="footer-p margin ">Winterwear</p>
            <p className="footer-p margin ">Add ons</p>
            <p className="footer-p margin ">The Teen Shop</p>
          </div>
          <div className="">
            <h6 className="fs-16 black margin">Shoes & Bags</h6>
            <p className="footer-p margin ">Women</p>
            <p className="footer-p margin ">Men</p>
            <p className="footer-p margin ">Boys</p>
            <p className="footer-p margin ">Girls</p>
            <p className="footer-p margin ">Women Accessories</p>
            <p className="footer-p margin ">Men Accessories</p>
            <p className="footer-p margin ">Essential</p>
          </div>
          <div className="">
            <h6 className="fs-16 black margin">Beauty</h6>
            <p className="footer-p margin ">Makeup Eyes</p>
            <p className="footer-p margin ">Makeup face</p>
            <p className="footer-p margin ">Makeup Lips</p>
            <p className="footer-p margin ">Makeup Nails</p>
            <p className="footer-p margin ">Perfumes</p>
          </div>

          <div className="">
            <h6 className="fs-16 black margin">Explore</h6>
            <p className="footer-p margin ">Online Offers</p>
            <p className="footer-p margin ">Store Offers</p>
            <p className="footer-p margin ">Online Gift Card</p>
            <p className="footer-p margin ">Store Gift Card</p>
            <p className="footer-p margin ">Stores Nearby</p>
            <p className="footer-p margin ">EDGE Membership</p>
            <p className="footer-p margin ">Shop on WhatsApp</p>
            <p className="footer-p margin ">Fashion VLOG</p>
            <p className="footer-p margin ">Join CIRCLEMAG</p>
            <p className="footer-p margin ">SBI Offers</p>
            <p className="footer-p margin ">Homecentre</p>
          </div>
          <div className="">
            <h6 className="fs-16 black margin">About</h6>
            <p className="footer-p margin ">About us</p>
            <p className="footer-p margin ">Careers</p>
            <p className="footer-p margin ">Take a Tour</p>
            <p className="footer-p margin ">Blog</p>
            <p className="footer-p margin ">Store Locator</p>
            <p className="footer-p margin ">Landmark Cares</p>
          </div>
          <div className="">
            <h6 className="fs-16 black margin">Help</h6>
            <p className="footer-p margin ">Contact us</p>
            <p className="footer-p margin ">Shipping</p>
            <p className="footer-p margin ">Returns Process</p>
            <p className="footer-p margin ">Returns Policy</p>
            <p className="footer-p margin ">Help Centre</p>
          </div>
        </div>
        {/* <div className="border-top margin-t ml-10"></div> */}
        <div className="flex " 
        style={{ width: "80%" }}>
          <div className="flex-70 flex justify-bet ">
            <div className=" contact flex">
              <div>
                <i class="fa fa-phone"></i>
              </div>
              <div className="text-justify">
                <div className="p-color">Talk to us</div>
                <div>1800-123-1555</div>
              </div>
            </div>
            <div className="contact flex">
              <div>
                <i class="fa fa-question-circle"></i>
              </div>
              <div className="text-justify">
                <div className="p-color">Helpcenter</div>
                <div>Help.lifestylestores.com</div>
              </div>
            </div>
            <div className="contact flex">
              <div>
                <i class="fa fa-envelope-o"></i>
              </div>
              <div className="text-justify">
                <div className="p-color">Write to us</div>
                <div>Help@lifestylestores.com</div>
              </div>
            </div>
          </div>
          <div className="flex-30 flex flex-flow">
            <div className="border contact-i border-none">
              <i class="fa fa-instagram"></i>
            </div>
            <div className="border contact-i border-none">
              <i class="fa fa-twitter"></i>
            </div>
            <div className="border contact-i border-none">
              <i class="fa fa-facebook-f"></i>
            </div>
          </div>
        </div>
        {/* <div className="margin-t border-top ml-10"></div> */}
        <div style={{ marginLeft: "8%" }} className="flex  ">
          <div>
            <img height="70px" width="100px" src={logo} alt="..." />
          </div>
          <div className="footer-p mt-0 text-justify column">
            <p className="justify-bet ">
              © 2022 RNA Intellectual Property Limited.
            </p>
            <p className=" mt-0 justify-bet">
              Terms & Conditions - Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
