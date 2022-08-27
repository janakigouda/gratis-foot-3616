import React, { useState } from "react";
// import { Icon } from "react-icons-kit";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  img6,
  img7,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img31,
  img32,
  img33,
  img37,
  img38,
  img39,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
} from "./Data/Imagedata";

const imgBoxVariants = {
  hidden: {
    x: 500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const Home = () => {
  const [step, setStep] = useState(1);

  const handleLeftArrow = () => {
    if (step === 1) {
      setStep(3);
    } else {
      setStep(step - 1);
    }
  };

  const handleRightArrow = () => {
    if (step === 7) {
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  const goToSlide1 = () => {
    setStep(1);
  };

  const goToSlide2 = () => {
    setStep(2);
  };

  const goToSlide3 = () => {
    setStep(3);
  };
  const goToSlide4 = () => {
    setStep(4);
  };

  const goToSlide5 = () => {
    setStep(5);
  };

  const goToSlide6 = () => {
    setStep(6);
  };

  const goToSlide7 = () => {
    setStep(7);
  };

  return (
    <div className="wrapper">
      <div className="offer">
          <p>Buy 2 & 40% Off +Extra 15% Off | Use Code SALE 15 <i className="fa fa-angle-right"></i></p>
        </div>
      <div className="content">
        <div className="content1">
          <div className="left-arrow" onClick={handleLeftArrow}>
            <i className="fa fa-chevron-left"  size={25}></i>
          </div>
          {step === 1 && (
            <div
              className="img-box"
              variants={imgBoxVariants}
              initial="hidden"
              animate="visible"
            >
              <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-1-25Aug2022.jpg" alt="img1" />
            </div>
          )}
          {step === 2 && (
            <div
              className="img-box"
              variants={imgBoxVariants}
              initial="hidden"
              animate="visible"
            >
              <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-1-25Aug2022.jpg" alt="img1" />
            </div>
          )}
          {step === 3 && (
            <div
              className="img-box"
              variants={imgBoxVariants}
              initial="hidden"
              animate="visible"
            >
              <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-3-25Aug2022.gif" alt="img1" />
            </div>
          )}
          {step === 4 && (
            <div
              className="img-box"
              variants={imgBoxVariants}
              initial="hidden"
              animate="visible"
            >
              <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-3-25Aug2022.gif" alt="img1" />
            </div>
          )}
          {step === 5 && (
            <div
              className="img-box"
              variants={imgBoxVariants}
              initial="hidden"
              animate="visible"
            >
              <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-Women-25Aug2022.jpg" alt="img1" />
            </div>
          )}
          {step === 6 && (
            <div
              className="img-box"
              variants={imgBoxVariants}
              initial="hidden"
              animate="visible"
            >
              <img src={img6} alt="img1" />
            </div>
          )}
          {step === 7 && (
            <div
              className="img-box"
              variants={imgBoxVariants}
              initial="hidden"
              animate="visible"
            >
              <img src={img7} alt="img1" />
            </div>
          )}

          <div className="right-arrow" onClick={handleRightArrow}>
            <i className="fa fa-chevron-right"  size={25}></i>
          </div>
        </div>

        <div className="indicators-box">
          {step === 1 && (
            <>
              <div className="indicator active"></div>
              <div className="indicator" onClick={goToSlide2}></div>
              <div className="indicator" onClick={goToSlide3}></div>
              <div className="indicator" onClick={goToSlide4}></div>
              <div className="indicator" onClick={goToSlide5}></div>
              <div className="indicator" onClick={goToSlide6}></div>
              <div className="indicator" onClick={goToSlide7}></div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="indicator" onClick={goToSlide1}></div>
              <div className="indicator active"></div>
              <div className="indicator" onClick={goToSlide3}></div>
              <div className="indicator" onClick={goToSlide4}></div>
              <div className="indicator" onClick={goToSlide5}></div>
              <div className="indicator" onClick={goToSlide6}></div>
              <div className="indicator" onClick={goToSlide7}></div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="indicator" onClick={goToSlide1}></div>
              <div className="indicator" onClick={goToSlide2}></div>
              <div className="indicator active"></div>
              <div className="indicator" onClick={goToSlide4}></div>
              <div className="indicator" onClick={goToSlide5}></div>
              <div className="indicator" onClick={goToSlide6}></div>
              <div className="indicator" onClick={goToSlide7}></div>
            </>
          )}

          {step === 4 && (
            <>
              <div className="indicator" onClick={goToSlide1}></div>
              <div className="indicator" onClick={goToSlide2}></div>
              <div className="indicator" onClick={goToSlide3}></div>
              <div className="indicator active"></div>
              <div className="indicator" onClick={goToSlide5}></div>
              <div className="indicator" onClick={goToSlide6}></div>
              <div className="indicator" onClick={goToSlide7}></div>
            </>
          )}

          {step === 5 && (
            <>
              <div className="indicator" onClick={goToSlide1}></div>
              <div className="indicator" onClick={goToSlide2}></div>
              <div className="indicator" onClick={goToSlide3}></div>
              <div className="indicator" onClick={goToSlide4}></div>
              <div className="indicator active"></div>
              <div className="indicator" onClick={goToSlide6}></div>
              <div className="indicator" onClick={goToSlide7}></div>
            </>
          )}

          {step === 6 && (
            <>
              <div className="indicator" onClick={goToSlide1}></div>
              <div className="indicator" onClick={goToSlide2}></div>
              <div className="indicator" onClick={goToSlide3}></div>
              <div className="indicator" onClick={goToSlide4}></div>
              <div className="indicator" onClick={goToSlide5}></div>
              <div className="indicator active"></div>
              <div className="indicator" onClick={goToSlide7}></div>
            </>
          )}

          {step === 7 && (
            <>
              <div className="indicator" onClick={goToSlide1}></div>
              <div className="indicator" onClick={goToSlide2}></div>
              <div className="indicator" onClick={goToSlide3}></div>
              <div className="indicator" onClick={goToSlide4}></div>
              <div className="indicator" onClick={goToSlide5}></div>
              <div className="indicator" onClick={goToSlide6}></div>
              <div className="indicator active"></div>
            </>
          )}
        </div>

        <div className="content2">
          <img className="pic" src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modularblock-oneBytwo1A-Women-23Aug2022A.jpg" alt="img1" />
        </div>
        <hr />
        <div className="content2">
          <img className="pic" src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-StripBanner1-23Aug2022.jpg" alt="img1" />
        </div>
        <hr />
        <div className="content2">
          <img className="pic" src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-Women-23Aug2022.jpg" alt="img1" />
        </div>4<hr />
        <div className="content2">
          <img className="pic" src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-9modblock-StripBanner2-D-23Aug2022.jpg" alt="img1" />
        </div>

        {/* Trending Festival Wear */}

        <h2 className="summer">Trending Festival Wear</h2>

        <div className="content8">
          <div className="box">
            <Link to={"/"}>
              <img className="img" src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-Women-23Aug2022.jpg" alt="" />
            </Link>
          </div>
          <div className="box">
            <img className="img" src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-B-Women-23Aug2022.jpg" alt="" />
          </div>

          <div className="box">
            <img className="img" src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-C-Women-23Aug2022.jpg" alt="" />
          </div>
        </div>
        <hr />

        {/* Shop By Category */}
        <h2 className="summer">Shop By Category</h2>
        <div className="content3">
          <img className="pic" src={img10} alt="img1" />
        </div>
        <div className="content4">
          <img className="pic" src={img11} alt="img1" />
        </div>

        <div className="content4">
          <img className="pic" src={img12} alt="" />
        </div>
        <div className="content2">
          <img className="pic" src={img13} alt="" />
        </div>

        <hr />
        <h2 className="summer">Top Trending Brands</h2>
        <div className="content4">
          <img className="pic" src={img14} alt="" />
        </div>
        <hr />

        {/* --------------------------------------------------------------- */}
        {/* summer essential */}
        {/* --------------------------------------------------------------- */}

        <h2 className="summer">Summer Essentials</h2>

        <div className="content8">
          <div className="box">
            <Link to={"/"}>
              <img className="img" src={img15} alt="" />
            </Link>
          </div>
          <div className="box">
            <img className="img" src={img16} alt="" />
          </div>

          <div className="box">
            <img className="img" src={img17} alt="" />
          </div>
        </div>
        <hr />

        {/* top picks */}

        <h2 className="summer">Top Picks</h2>
        <div className="content8">
          <div className="box">
            <img className="img" src={img18} alt="" />
          </div>
          <div className="box">
            <img className="img" src={img19} alt="" />
          </div>
          <div className="box">
            <img className="img" src={img20} alt="" />
          </div>
        </div>
        <hr />
        {/* Trending Ethnic Wear */}

        <h2 className="summer">Trending Ethnic Wear</h2>
        <div className="content8">
          <div className="box">
            <img className="img" src={img21} alt="" />
          </div>
          <div className="box">
            <img className="img" src={img22} alt="" />
          </div>
          <div className="box">
            <img className="img" src={img23} alt="" />
          </div>
        </div>
        <hr />

        {/* Essential Range */}
        <h2 className="summer">Essential Range</h2>
        <div className="content8">
          <div className="box">
            <img className="img" src={img24} alt="" />
          </div>
          <div className="box">
            <img className="img" src={img25} alt="" />
          </div>
          <div className="box">
            <img className="img" src={img26} alt="" />
          </div>
        </div>
        <hr />

        <div className="content4">
          <img className="img27" src={img27} alt="" />
        </div>

        <hr />
        {/* Wardrobe -Must Haves */}
        <h2 className="summer">Wardrobe -Must Haves</h2>

        <div className="content8">
          <div className="box">
            <img className="img" src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-A-24June2022.jpg" alt="" />
          </div>
          <div className="box">
            <img className="img" src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-B-24June2022.jpg" alt="" />
          </div>
          <div className="box">
            <img className="img" src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-C-26July2022.jpg" alt="" />
          </div>
        </div>
        <hr />

        {/* Trendsetters */}

        <h2 className="summer">Trendsetters</h2>

        <div className="content8">
          <div className="box">
            <img className="img" src={img31} alt="" />
          </div>
          <div className="box">
            <img className="img" src={img32} alt="" />
          </div>
          <div className="box">
            <img className="img" src={img33} alt="" />
          </div>
        </div>
        <hr />
        {/* Most Loved Styles */}

        <h2 className="summer">Most Loved Styles</h2>

        <div className="content8">
          <div className="box">
            <img className="img" src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-A-Women-03Aug2022.jpg" alt="" />
          </div>
          <div className="box">
            <img className="img" src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-B-Women-03Aug2022.jpg" alt="" />
          </div>
          <div className="box">
            <img className="img" src="https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-C-Women-03Aug2022.jpg" alt="" />
          </div>
        </div>
        <hr />
        {/* Editor's Curated List */}
        <h2 className="summer">Editor's Curated List</h2>

        <div className="content8">
          <div className="box">
            <img className="img" src={img37} alt="" />
          </div>
          <div className="box">
            <img className="img" src={img38} alt="" />
          </div>
          <div className="box">
            <img className="img" src={img39} alt="" />
          </div>
        </div>
        <hr />

        {/* Flash Sale For Today */}

        <h2 className="summer">Flash Sale For Today</h2>

        <div className="content8">
          <img className="img" src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock1-A-08July2022.jpg" alt="" />
        </div>

        <hr />
        {/* Top Trending Styles */}
        <h2 className="summer">Top Trending Styles</h2>
        <div className="content10">
          <div className="boxes">
            <div className="trendimg">
              <img className="img" src={img41} alt="" />
            </div>
            <div className="text">
              <div>
                <p>
                  ₹ <b>699</b>
                </p>
              </div>
              <div>
                <p>GINGER Women Printed Round Neck T-shirt</p>
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="trendimg">
              <img className="imgtrend" src={img42} alt="" />
            </div>
            <div className="text">
              <div>
                <p>
                  ₹ <b>1,499</b>
                </p>
              </div>
              <div>
                <p>GINGER Women Embroidered Mini Dress</p>
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="trendimg">
              <img className="imgtrend" src={img43} alt="" />
            </div>
            <div className="text">
              <div>
                <p>
                  ₹ <b>1,559</b>
                </p>
              </div>
              <div>
                <p>BIBA Women Printed A-Line Kurta</p>
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="trendimg">
              <img className="imgtrend" src={img44} alt="" />
            </div>
            <div className="text">
              <div>
                <p>
                  ₹ <b>799</b>
                </p>
              </div>
              <div>
                <p>MELANGE Women Printed Round Neck Straight Kurta</p>
              </div>
            </div>
          </div>
        </div>

        <button className="seeall">
          <h3>See All</h3>
        </button>
        <hr />

        {/* Best Seller */}

        <h2 className="summer">Editor's Curated List</h2>

        <div className="content9">
          <div className="best">
            <img className="img" src={img45} alt="" />
          </div>
          <div className="best">
            <img className="img" src={img46} alt="" />
          </div>
        </div>

        {/* Shop By Department */}

        <hr />
        <h2 className="summer">Shop By Department</h2>
        <div className="content8">
          <div className="department">
            <img className="img" src={img47} alt="" />
          </div>
          <div className="department">
            <img className="img" src={img48} alt="" />
          </div>
          <div className="department">
            <img className="img" src={img49} alt="" />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Home;
