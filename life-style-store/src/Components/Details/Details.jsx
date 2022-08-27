import React, { useEffect, useState } from 'react';
import './detaill.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem , delItem} from "../Redux/actions/index"
import { useNavigate } from 'react-router-dom';
export const Details = () => {
 const store=useSelector((store)=>store.addItem)
    const data=`https://lifestyle-back.herokuapp.com/products`

var [product,setProduct]=useState({});
const navigate=useNavigate()
const [cartBtn,setCartBtn]=useState("ADD TO BASKET")
// var [len,setLen]=useState(store)
useEffect(()=>{
  getData()
},[]);



const {id}=useParams()

const getData=()=>{
  fetch(`https://lifestyle-back.herokuapp.com/products/${id}`)
  .then((response)=>response.json())
  .then((pro)=>setProduct(pro))
//    setLen(data.length)
}


  

    const [randomno, setRandom] = useState("")
    const handelrandom=()=>{
         setRandom(Math.floor(Math.random()*9)+1);
     }

     //we need to store usedispatch in a variable
    const dispatch=useDispatch();
console.log(product)
const handelCart=(product)=>{
  if(cartBtn==="ADD TO BASKET"){
      dispatch(addItem(product))
      setCartBtn("REMOVE FROM CART")
    //   setLen(data.length)
    navigate(`/cart/${id}`)
    }
    // alert( `${product._id}`)
    // if(product.length===undefined){
    //     product.length=1;
    //     alert(`${product.length}`)
    //  }
  else{
      dispatch(delItem(product));
      setCartBtn("ADD TO BASKET")
  }
}

// const handelPic=index=>{
//  alert(index)
// }
// const navigate=useNavigate()
// function Addtocart(){
//    alert( `${product._id}`)
//    if(product.length===undefined){
//        product.length=1;
//        alert(`${product.length}`)
//     }
//     alert(`${product.length}`)
// }


// console.log("Length",product.length)

    return (
        <div>
            <div className='amount' >
                {/* count({product.length}) */}
                <span className='red'> ₹</span><span className='red price'>{product.price}</span><span className='tax'>Inclusive of all taxes </span> <br />
                <span className='strike gray'>₹{product.price}</span> <span className='saving'>Save 1040(40.02%)</span> <br />
                <u><span className='orange free_shiping'>Free shipping on all orders</span></u> <span className='logo'><img src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/points-16.svg" alt="" /> <span className='earning_point'>Earn 4 Point</span>  </span><br />

                <div className='img_demo'> Color:<b>{product.color}
                </b></div>
                <img className='proimg' src={product.image4} alt="" />
            </div>
            <div className='size_section'>
                Size:  <span className='guide'><u>Size Guide</u></span>
                <div className='size'>
                    <div className='s1 sizebox'><button className='s2 line grey'>42</button></div>
                    <div className='s1'><button className='s2'>23</button></div>
                    <div className='s1 sizebox'><button  className='s2 line grey'>32</button></div>
                    <div className='s1'><button className='s2'>22</button></div>
                    <div className='s1'><button className='s2'>30</button></div>
                    <div className='s1 sizebox'><button className='s2 line grey'>34</button></div>
                </div>
             {/* <Link to={"/cartPage"}>  */}
              <button onClick={()=>handelCart(product)}  className='basket'>{cartBtn}</button>
              {/* </Link> */}
               <br />
                <div className='heart_logo'><button  className='like'><i class="fa-solid fa-heart fa-2x"></i></button><span className='black'>Add to Favourites</span></div>
            </div>

            {/* Promotions */}
            <div className='product_promotion'>
                <button className='promotion'>PROMOTION OFFER</button><br />
                <p className='product_deal'> LAST DAY to SAVE an EXTRA 20% OFF on all orders of Rs 3,499 & above. Use Code SALE20 | Get 10% OFF on orders of Rs 1,999 & above. Use Code: SALE10 <u> Browse promotion.</u> </p>
            </div>


            {/* information */}
            <div className='delivery_icons'>
                <div>
                    <img className='icons' src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/cc.svg" alt="" /> <span className='icons_head'>Click & Collecte</span>  <br />
                    <p className='order_details'> Order this product now and collect it from a store of your choice.  <a href="" className='orange'>Learn more</a> </p>
                </div>
                <div>
                    <img className='icons' src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/installment-black-24.svg" alt="" /> <span className='icons_head'>Pay in installments</span><br />
                    <p className='order_details'>Pay in easy installments on orders of ₹ 3,000 or more. Available for select banks.  <a href="" className='orange'> Learn more</a> </p>
                </div>
                <div>
                    <img className='icons' src="https://i1.lmsin.net/website_images/static-pages/brand_exp/brand2images/icons/order-black-24.svg" alt="" /><span className='order_details icons_head'>When will receive my order?</span><br />

                    <input
                        className='pincode' type="number"
                        placeholder='Enter your Pincode' />
                    <button
                        onClick={handelrandom}
                        style={{ textDecoration: "none" }}
                        className='check'>Check</button>
                    <p style={{color:"red"}}>It will take {randomno} days to <i class="fa-solid fa-truck"></i> deliver your  <i class="fa-solid fa-gift"></i></p>
                </div>
            </div>

            {/* overview */}

            <div className='details_overview'>
                <p><b> Overview</b></p>

                <p className='overview'>
                    Make a statement with this printed A-line kurta designed with a round neck and three-quarter sleeves. Dress up for your next occasion by pairing this kurta with a piece of fine jewelry.
                </p>
                <div className='overview_list'>
                    <li>Type :{product.productType}</li>
                    <li>Design :{product.style}</li>
                    <li>Neckline :Rounded</li>
                    <li>Style :{product.style}</li>
                    <li>Sleeve Length :Medium</li>
                    <li>Fabric :{product.fabric} </li>
                    <li>Fit : All Types</li>
                    <li>Care Instructions :Don't wash with hot water</li>
                    <li>Model Wears :{product.brand}</li>
                    <li>Country of Origin :India</li>
                    <li>Manufactured By: LifeStyle</li>
                    <li>For Consumer Complaints Contact :Managerial, lifeStyle Pvt. ltd</li>
                    <li>Net Quantity :1</li>
                    <li>Top Helpline :9865645342</li>
                    <li>Top Length :{product.size+"   "}</li>
                    <li>Ocassion :{product.style}</li>
                    <li>Product :{product.productType}</li>

                </div>
            </div>


            <div className='social_icons'>
                <div>
                    <a href="https://facebook.com">  <i class="fa-brands fa-facebook"></i><span className='socil_text'>Share</span></a>

                </div>
                <div>
                    <a href="https://twitter.com"> <i class="fa-brands fa-twitter"></i><span className='socil_text'>Tweet</span></a>

                </div>
                <div>
                    <a href="https://pinterest.com"><i class="fa-brands fa-pinterest-p"></i><span className='socil_text'>Pin</span></a>

                </div>
                <div>
                    <i class="fa-solid fa-link"></i><span className='socil_text'>Copy link</span>
                </div>
            </div>

        </div>
    )
}
