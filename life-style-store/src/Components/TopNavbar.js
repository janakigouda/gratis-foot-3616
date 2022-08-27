import React from "react";
import "./TopNavbar.css"

const TopNavbar = () => {
    return (
      
    <div className="top">
        <ul className="top-nav">
            <li><i className="fa fa-truck"></i> Free Shipping</li>
            <li><i className="fa fa-home"></i> Click And Connect</li>
            <li><i className="fa fa-home"></i> Return To Store</li>
        </ul>
        <ul className="top-nav-2">
            <li>Download our app</li>
            <li className="line"></li>
            <li>Store Collector</li>
            <li className="line"></li>
            <li>Help</li>
        </ul>
    </div>
            

    )
}

export default TopNavbar