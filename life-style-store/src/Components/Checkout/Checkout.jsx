import { useNavigate } from "react-router-dom";
import styled from "./Checkout.css";

export function Checkout() {
	var count = 1;
	const navigate = useNavigate();
	function getBox() {
		var num = document.getElementById("num");

		var c = document.createElement("input");
		c.setAttribute("id", "created");
		c.setAttribute("placeholder", "Enter paytm Number");
		if (count == 1) {
			num.append(c);
			count++;
		}
	}

	function getData() {
		var data = document.getElementById("num").value;
		console.log(data);
	}

	return (
		<div id="flex" className={styled.container}>
			<div id="div1">
				<h4>Add your shipping address</h4>
				<form>
					<label className="labels">Full Name</label>
					<br></br>
					<input className="inputs" placeholder="Enter your Full Name"></input>
					<br></br>
					<label className="labels">Mobile Number</label>
					<br></br>
					<input
						className="inputs"
						placeholder="Enter your Mobile Number"
					></input>
					<br></br>
					<label className="labels">Pincode</label>
					<br></br>
					<input className="inputs" placeholder="Enter your Pincode"></input>
					<br></br>
					<label className="labels">City</label>
					<br></br>
					<input className="inputs" placeholder="Enter your city"></input>
					<br></br>
					<label className="labels">State</label>
					<br></br>
					<select>
						<option>Select your state</option>
						<option>New Delhi</option>
						<option>Bengalore</option>
						<option>Mumbai</option>
						<option>Kolkata</option>
					</select>
					<br></br>
					<label className="labels">Building name or number</label>
					<br></br>
					<input className="inputs"></input>
					<br></br>
					<label className="labels">Street name or number</label>
					<br></br>
					<input className="inputs"></input>
					<br></br>
					<label className="labels">Landmark</label>
					<br></br>
					<input className="inputs"></input>
					<br></br>
					<label className="labels">Address Type</label>
					<br></br>
					<input type="radio" className="input" id="Home" name="aHome"></input>
					<label className="ll">Home</label>
					<input type="radio" className="input" id="add" name="aHome"></input>
					<label className="ll">Office</label>
				</form>
				{/* <div id="pay">
					<h4>Select a payment method</h4>
					<input type="radio" className="upi" name="aHome" checked></input>
					<label className="ll">
						<img
							width="14px"
							src="https://www.pngitem.com/pimgs/m/274-2746824_bhim-icon-png-image-free-download-searchpng-bhim.png"
							alt="upi"
						></img>
						<span id="ss">UPI</span>
						<br></br>
						<span id="span">Pay with your preferred UPI ID</span>
					</label>
					<br></br>
					<div id="flex1">
						<button id="paytm" onClick={getBox}>
							<img
								width="100px"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png"
								alt="upi"
							></img>
						</button>
						<div id="num"></div>
					</div>
				</div> */}
			</div>
			<div id="div2">
				<div id="pay">
					<h4 id="up">Select a payment method</h4>
					<input type="radio" className="upi" name="aHome" checked></input>
					<label className="ll">
						<img
							width="14px"
							src="https://www.pngitem.com/pimgs/m/274-2746824_bhim-icon-png-image-free-download-searchpng-bhim.png"
							alt="upi"
						></img>
						<span id="ss">UPI</span>
						<br></br>
						<span id="span">Pay with your preferred UPI ID</span>
					</label>
					<br></br>
					<div id="flex1">
						<button id="paytm" onClick={() => getBox()}>
							<img
								width="100px"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png"
								alt="upi"
							></img>
						</button>
						<div id="num"></div>
					</div>
					<div id="go">
						<p id="special">
							By clicking on Proceed to Payment, you agree to our Terms and
							Conditions
						</p>
						<button
							id="yellow"
							onClick={() => {
								alert("payment is Successful,");
								navigate("/");
							}}
						>
							Pay Now
						</button>
					</div>

					<div>
						<h5 id="ways">Ways you can pay:</h5>
						<div>
							<img
								className="images"
								src="https://i1.lmsin.net/website_images/ae/checkout/logo-visa.png"
								alt="visa"
								width="50px"
							></img>
							<img
								className="images"
								src="https://i1.lmsin.net/website_images/ae/checkout/logo-mc.png"
								alt="mastercard"
								width="40px"
							></img>
							<img
								className="images"
								src="https://i1.lmsin.net/website_images/in/checkout/logo-rupay.svg"
								alt="RuPay"
								width="100px"
							></img>
							<img
								className="images"
								src="https://i1.lmsin.net/website_images/ae/checkout/logo-cash.png"
								alt="CASh"
								width="80px"
							></img>

							<br></br>

							<img
								className="images1"
								src="https://i1.lmsin.net/website_images/in/checkout/logo-netbanking.svg"
								alt="Net Banking"
								width="100px"
							></img>
							<img
								className="images1"
								src="https://i1.lmsin.net/website_images/in/checkout/logo-wallet.svg"
								alt="Wallet"
								width="90px"
							></img>
							<img
								className="images1"
								src="https://i1.lmsin.net/website_images/in/checkout/logo-rewards.svg"
								alt="LANDMARK"
								width="100px"
							></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
