import { FaLinkedin,FaSquareFull } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { LiaCopyrightSolid } from "react-icons/lia";

import gPay from '../CardImgs/gpay.jpg'
import masterCard from '../CardImgs/mastercard.jpg'
import payPal from '../CardImgs/paypal.jpg'
import amex from '../CardImgs/amex.png'
import applePay from '../CardImgs/applepay.png'
import oPay from '../CardImgs/opay.png'
import usFlag from '../CardImgs/usflag.jpg'

import './index.css'
const Footer = () =>{
    return(
        <div className="footer-main-container">
            <div className="max-footer">
                <div className="footer-container first">
                    <div className="content">
                        <h6 className="first-head">BE THE FIRST TO KNOW</h6>
                        <p className="first-p">Sign up for updates from metta muse.</p>
                        <div className="subscribe-container">
                            <input type="text" className="input-min" placeholder="Enter your Email.."/>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                    <div className="content">
                        <h6 className="second-head">CONTACT US</h6>
                        <p className="first-p">+44  221 133 5360</p>
                        <p className="first-p">customercare@mettamuse.com</p>
                        <h6 className="second-head">CURRENCY</h6>
                        <div className="flag-container">
                            <img src={usFlag} alt="flag" className="flag-icon"/>
                            <FaSquareFull className="square"/>
                            <h6 className="third-head">USD</h6>
                        </div>
                        <p className="first-p">Transactions will be completed in Euros and a currency reference in available on hover</p>
                    </div>
                </div>
                <hr/>
                <div className="footer-container second">
                    <div className="content">
                        <h6 className="second-head">metta muse</h6>
                        <p className="second-p">About Us</p>
                        <p className="second-p">Stories</p>
                        <p className="second-p">Artisans</p>
                        <p className="second-p">Boutiques</p>
                        <p className="second-p">Contact Us</p>
                        <p className="second-p">EU Compliances Docs</p>
                    </div>
                    <div className="content">
                        <h6 className="second-head">QUICK LINKS</h6>
                        <p className="p-bold second-p">Orders & Shipping</p>
                        <p className="p-bold second-p">Join/Login as a Seller</p>
                        <p className="p-bold second-p">Payment & Pricing</p>
                        <p className="p-bold second-p">Return & Refunds</p>
                        <p className="p-bold second-p">FAQs</p>
                        <p className="p-bold second-p">Privacy Policy</p>
                        <p className="p-bold second-p">Terms & Conditions</p>
                    </div>
                    <div className="content">
                        <h6 className="second-head">FOLLOW US</h6>
                        <RiInstagramFill className="icon"/>
                        <FaLinkedin className="icon"/>
                        <h6 className="cards-head">metta muse ACCEPTS</h6>
                        <div className="card-img-container">
                            <img src={gPay} alt="cardimg" className="card-img"/>
                            <img src={masterCard} alt="cardimg" className="card-img"/>
                            <img src={payPal} alt="cardimg" className="card-img"/>
                            <img src={amex} alt="cardimg" className="card-img"/>
                            <img src={applePay} alt="cardimg" className="card-img"/>
                            <img src={oPay} alt="cardimg" className="card-img"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* min content */}
            <div className="footer-min-container">
                <div className="min-content">
                    <h6 className="first-head">BE THE FIRST TO KNOW</h6>
                    <p className="first-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
                    <div className="subscribe-container">
                        <input type="text" className="input-min" placeholder="Enter your Email.."/>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                <hr/>
                <div className="min-content">
                    <h6 className="first-head">CALL US</h6>
                    <div className="min-call">
                        <p className="first-p">+44  221 133 5360</p>
                        <FaSquareFull className="min-square"/>
                        <p className="first-p">customercare@mettamuse.com</p>
                    </div>
                </div>
                <hr/>
                <div className="min-content">
                    <h6 className="second-head">CURRENCY</h6>
                    <div className="flag-container">
                        <img src={usFlag} alt="flag" className="flag-icon"/>
                        <FaSquareFull className="square"/>
                        <h6 className="third-head">USD</h6>
                    </div>
                </div>
                <hr/>
                <div>
                    <select className="min-option">
                        <option value='metta'>metta muse</option>
                    </select>
                </div>
                <hr/>
                <div>
                    <select className="min-option">
                        <option value='metta'>QUICK LINKS</option>
                    </select>
                </div>
                <hr/>
                <div>
                    <select className="min-option">
                        <option value='metta'>FOLLOW US</option>
                    </select>
                </div>
                <hr/>
                <div className="min-content">
                    <h6 className="cards-head">metta muse ACCEPTS</h6>
                    <div className="card-img-container">
                        <img src={gPay} alt="cardimg" className="card-img"/>
                        <img src={masterCard} alt="cardimg" className="card-img"/>
                        <img src={payPal} alt="cardimg" className="card-img"/>
                        <img src={amex} alt="cardimg" className="card-img"/>
                        <img src={applePay} alt="cardimg" className="card-img"/>
                        <img src={oPay} alt="cardimg" className="card-img"/>
                    </div>
                </div>
                
            </div>
            <p className="first-p">Copyrights <span><LiaCopyrightSolid /></span> 2023 mettamuse. All rights reserved</p>
        </div>
        
    )
}
export default Footer