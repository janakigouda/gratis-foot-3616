import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './category.css'
function Category() {
  const [show, setShow] = useState([])
 // const [loading, setLoading] = useState(false);
const navigate=useNavigate()


  const getData = () => {
  //  setLoading(true);
    fetch('https://lifestyle-back.herokuapp.com/products')
      .then(response => response.json())
      .then(data =>
        setShow(data))
      //  setLoading(false);
    // console.log(show.length);

  };

  useEffect(() => {
    getData();
  },[])

  function HandleSelect(e) {
    if (e.target.value === "low") {
      const data = [...show].sort((a, b) => {
        return a.price - b.price;
      });
      setShow(data);
    }
    if (e.target.value === "high") {
      const data = [...show].sort((a, b) => {
        return b.price - a.price;
      });
      setShow(data);
    }
    if (e.target.value === "alpha") {
      const data = [...show].sort((a, b) => {
        //console.log( a.productName.charCodeAt(0)-b.productName.charCodeAt(0))
        return a.productName.charCodeAt(0) - b.productName.charCodeAt(0);;
      });
      setShow(data);

    }
  }
  //---------------- Price filter......................
  async function Pricefilter(e) {
    const data = await fetch("https://lifestyle-back.herokuapp.com/products").then(d => d.json());

    if (e.target.value == "0-500") {
      const filteredArr = data.filter((a) => {
        if (a.price >= 0 && a.price <= 500) {
          return a;
        }
      });
      setShow(filteredArr);
    }
    else if (e.target.value == "500-1000") {
      const filteredArr = data.filter((a) => {
        if (a.price > 500 && a.price <= 1000) {
          return a;
        }
      });
      setShow(filteredArr);

    }
    else if (e.target.value == "1000-2000") {
      const filteredArr = data.filter((a) => {
        if (a.price > 1000 && a.price <= 2000) {
          return a;
        }
      });
      setShow(filteredArr);

    }
    else if (e.target.value == "2000-5000") {
      const filteredArr = data.filter((a) => {
        if (a.price > 2000 && a.price <= 5000) {
          return a;
        }
      });
      setShow(filteredArr);

    }
    else {
      setShow(data)
    }
   }
  // //-------------------type-----------------//
   async function typefilter(e) {
    const data = await fetch("https://lifestyle-back.herokuapp.com/products").then(d => d.json());

    if (e.target.value == "Dress") {
      const filteredArr = data.filter((a) => {

        if (a.productType == "Dress") {
          return a;
        }

      });
      setShow(filteredArr);
    }
    else if (e.target.value == "Shoes") {
      const filteredArr = data.filter((a) => {
        if (a.productType == "Shoes") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else if (e.target.value == "Flats") {
      const filteredArr = data.filter((a) => {
        if (a.productType == "Flats") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else if (e.target.value == "Bags") {
      const filteredArr = data.filter((a) => {
        if (a.productType == "Bags") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else {
      setShow(data)
    }
 }
  // //----------------------Fabric filter------------------Cotton

   async function fabricfilter(e) {
    const data = await fetch("https://lifestyle-back.herokuapp.com/products").then(d => d.json());

    if (e.target.value == "Cotton") {
      const filteredArr = data.filter((a) => {

        if (a.fabric == "Cotton") {
          return a;
        }

      });
      setShow(filteredArr);
    }
    else if (e.target.value == "Viscose") {
      const filteredArr = data.filter((a) => {
        if (a.fabric == "Viscose") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else if (e.target.value == "Woolen") {
      const filteredArr = data.filter((a) => {
        if (a.fabric == "Woolen") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else if (e.target.value == "Mesh") {
      const filteredArr = data.filter((a) => {
        if (a.fabric == "Mesh") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else if (e.target.value == "Leather") {
      const filteredArr = data.filter((a) => {
        if (a.fabric == "Leather") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else {
      setShow(data)
    }
  }
  // //-------------------------color filter----------------------

   async function colorfilter(e) {
    const data = await fetch("https://lifestyle-back.herokuapp.com/products").then(d => d.json());

    if (e.target.value == "Green") {
      const filteredArr = data.filter((a) => {

        if (a.color == "Green") {
          return a;
        }

      });
      setShow(filteredArr);
    }
    else if (e.target.value == "Pink") {
      const filteredArr = data.filter((a) => {
        if (a.color == "Pink") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else if (e.target.value == "Blue") {
      const filteredArr = data.filter((a) => {
        if (a.color == "Blue") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else if (e.target.value == "Red") {
      const filteredArr = data.filter((a) => {
        if (a.color == "Red") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else if (e.target.value == "White") {
      const filteredArr = data.filter((a) => {
        if (a.color == "White") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else if (e.target.value == "Grey") {
      const filteredArr = data.filter((a) => {
        if (a.color == "Grey") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else if (e.target.value == "Black") {
      const filteredArr = data.filter((a) => {
        if (a.color == "Black") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else {
      setShow(data)
    }
  }

  // //---------------brand filter------------

  async function brandfilter(e) {
    const data = await fetch("https://lifestyle-back.herokuapp.com/products").then(d => d.json());

    if (e.target.value == "CODE Women") {
      const filteredArr = data.filter((a) => {

        if (a.brand == "CODE Women") {
          return a;
        }

      });
      setShow(filteredArr);
    }
    else if (e.target.value == "GINGER Women") {
      const filteredArr = data.filter((a) => {
        if (a.brand == "GINGER Women") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else if (e.target.value == "NEXUS Women") {
      const filteredArr = data.filter((a) => {
        if (a.brand == "NEXUS Women") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else if (e.target.value == "ALLEN SOLLY Women") {
      const filteredArr = data.filter((a) => {
        if (a.brand == "ALLEN SOLLY Women") {
          return a;
        }

      });
      setShow(filteredArr);

    }
    else if (e.target.value == "W Women") {
      const filteredArr = data.filter((a) => {
        if (a.brand == "W Women") {
          return a;
        }

      });
      setShow(filteredArr);

    }


    else {
      setShow(data)
    }
   }
  return (
    <>
    
        <div>
      <h1>Women</h1>

      <div className='filter'>

        <div className='icon' >

          <select id="cars" onChange={Pricefilter}>
            <option value="">Price</option>
            <option value="0-500">0-500</option>
            <option value="500-1000">500-1000</option>
            <option value="1000-2000">1000-2000</option>
            <option value="2000-5000">2000-5000</option>

          </select>

        </div>

        <div className='icon'>
          <select id="cars" onChange={typefilter}>
            <option value="">Type</option>
            <option value="Dress">Dress</option>
            <option value="Shoes">Shoes</option>
            <option value="Flats">Flats</option>
            <option value="Bags">Bags</option>


          </select>
        </div>
        <div className='icon'>
          <select id="cars" onChange={fabricfilter}>
            <option>Fabric</option>

            <option value="Cotton">Cotton</option>
            <option value="Viscose">Viscose</option>

            <option value="Woolen">Woolen</option>
            <option value="Mesh">Mesh</option>
            <option value="Leather">Leather</option>

          </select>
        </div>
        <div className='icon'>
          <select id="cars" name="carlist" form="carform">
            <option >Size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XS">XS</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>

          </select>
        </div>
        <div className='icon'>
          <select id="cars" onChange={colorfilter}>
            <option >Color</option>
            <option value="Blue">Blue</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Pink">Pink</option>
            <option value="Green">Green</option>
            <option value="White">White</option>
            <option value="Grey">Grey</option>


          </select>
        </div>
        <div className='icon'>
          <select id="cars" name="carlist" form="carform">
            <option >Sleeve Length</option>
            <option value="Half Sleeve">Half Sleeve</option>
            <option value="Sleeveless">Sleeveless</option>
            <option value="3/4sleeve">3/4sleeve</option>
            <option value="Cap Sleeve">Cap Sleeve</option>
            <option value="Full Sleeve">Full Sleeve</option>

          </select>
        </div>
        <div className='icon'>
          <select id="cars" name="carlist" form="carform">
            <option >Length</option>
            <option value="Mini">Mini</option>
            <option value="Midi">Midi</option>
            <option value="Knee-Length">Knee-Length</option>
            <option value="Maxi">Maxi</option>
            <option value="Ankle Length">Knee-length</option>
            <option value="Full Length">Full Length</option>
            <option value="Calf Length">Calf Length</option>

          </select>
        </div>
        <div className='icon'>
          <select id="cars" onChange={brandfilter}>
            <option >Brand</option>
            <option value=" CODE Women"> CODE Women</option>
            <option value="AGINGER Women">GINGER Women</option>
            <option value="NEXUS Women">NEXUS Women</option>
            <option value="ALLEN SOLLY Women">ALLEN SOLLY Women</option>
            <option value="W Women">W Women</option>


          </select>

        </div>
        <div className='icon'>
          <select id="cars" name="carlist" form="carform">
            <option >Browes</option>
            <option value="New">New</option>
            <option value="2 at 15% OFF">2 at 15%</option>
            <option value="50% OFF">50% OFF</option>
            <option value="30% OFF">30% OFF</option>
            <option value="40% OFF">40% OFF</option>

          </select>
        </div>
        <div className='icon'>
          <select id="cars" name="carlist" form="carform">
            <option >SALE</option>
            <option value="Buy 2 Get 15 percent Off">Buy 2 Get 15 percent Off</option>
            <option value="SLE10SALE20">SLE10SALE20</option>
            <option value="Buy 2 Get 10 percent Off">Buy 2 Get 10 percent Off</option>
            <option value="Buy 2 Get 50 percent Off">Buy 2 Get 50 percent Off</option>

          </select>
        </div>
        <div className='icon'>
          <select id="cars" name="carlist" form="carform">
            <option >Design</option>
            <option value="Printed">Printed</option>
            <option value="Solid">Solid</option>
            <option value="Textured">Textured</option>
            <option value="Floral Print">Floral Print</option>
            <option value="Striped">Striped</option>

          </select>
        </div>
        <div className='icon'>
          <select id="cars" name="carlist" form="carform">
            <option>Discount Range</option>
            <option value="10% and above">10% and above</option>
            <option value="20% and above">20% and above</option>
            <option value="30% and above">30% and above</option>
            <option value="40% and above">40% and above</option>
            <option value="50% and above">50% and above</option>
            <option value="60% and above">60% and above</option>

          </select>
        </div>


      </div>
      <br />
      <br />
      <div id="lengthpro">
        <h5> {show.length} Product</h5>
        <div className='icon1'>
          <p className='sortby'>Sort by</p>

          <select id="cars1" onChange={HandleSelect}>
            <option >Relevance</option>
            <option value="low">Low To High</option>
            <option value="high">High To Low</option>
            <option value="alpha">Alphabetical</option>
          </select>
        </div>
      </div>
      <div id="datashow">
        {
          show.map((e) => (
           
            <div className='box1'  onClick={()=>{
              navigate(`/category/${e._id}`)
            }}>
              
          <a href="#" className="hover-switch">
              <img src={e.image1} width="100%" height="350px" alt="img" />
              {/* <img src={e.img3} /> */}
            </a>
              <img src={e.image4} width="100%" height="350px" alt="img"/>

             
              <div className='offer'>50% off</div>
              <div className='offerbox'>
                <h5>₹{e.price}</h5>
                <h6 className='pricecut'>₹{2 * e.price}</h6>
              </div>
              <p>{e.productName}</p>


            </div>




          ))
        }


      </div>
      </div>
      
     
    </>
  )
}

export { Category }