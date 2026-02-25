import React from 'react'
import store from '../assets/images/sapple.webp'
import googleplay from '../assets/images/play.png'
import logo from '../assets/images/image.png'

const Footer = () => {
    return (
        <>
            <div className="container">
                <hr />
                <div className="row ">
                    <div className="footer-one d-flex justify-content-between mt-5">
                        <div className="apps d-flex">
                            <img style={{ width: "140px", height: "45px" }} src={store} alt="" />
                            <img className='ms-2' style={{ width: "140px", height: "45px" }} src={googleplay} alt="" />
                            <p className='ms-4'>Download our apps <br></br> <small>Download App Get -10% Discount</small></p>
                        </div>
                        <div className="tel d-flex">
                            <div className="phone"><i className="fa-solid fa-phone"></i></div>
                            <h5>+91 289 87 21 <br></br> <small>Contact us by calling the Helpline 24/7</small></h5>
                        </div>
                    </div>

                </div>
            </div>
            <hr />
            <div className="container mt-5">
                <div className="footer-two">
                    <div className="footer-two-text">
                        <h5>Join the Supgor Club!</h5>
                        <p>Whether you’re welcoming new contacts or sharing the latest news, you<br></br> can make your business look good in just a few clicks.</p>
                    </div>
                    <div className="col-4">
                        <div className="subscribe">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username" aria-describedby="button-addon2" />
                                <button type="button" id="button-addon2">Subscribe</button>
                            </div>
                            <small>By subscribing you agree to our  Terms & Conditions and Privacy & Cookies<br></br> Policy .</small>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-three">
                    <div className="row">
                        <div className="col-md-3 mt-4">
                            <div className="info"></div>
                            <img style={{ width: "150px" }} src={logo} alt="" /><br></br>
                            <small style={{fontSize: "12px"}}>75 Hoel Trok Station Road, Cardiff, UK United Kingdom</small>
                            <p>info@example.com</p>
                        </div>

                        <div className="col-md-2 ms-4 mt-4">
                            <h5 className="fw-bold mb-3">Get to Know Us</h5>
                            <ul className="list-unstyled">
                                <li>Careers for Supgor</li>
                                <li>About Supgor</li>
                                <li>Investor Relations</li>
                                <li>Supgor Devices</li>
                                <li>Customer reviews</li>
                                <li>Social Responsibility</li>
                                <li>Store Locations</li>
                            </ul>
                        </div>

                        <div className="col-md-2 ms-4 mt-4">
                            <h5 className="fw-bold mb-3">Let Us Help You</h5>
                            <ul className="list-unstyled">
                                <li>Your Orders</li>
                                <li>Returns & Replacements</li>
                                <li>Shipping Rates & Policies</li>
                                <li>Refund and Returns Policy</li>
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                                <li>Cookie Settings</li>
                                <li>Help Center</li>
                            </ul>
                        </div>

                        <div className="col-md-2 ms-4 mt-4">
                            <h5 className="fw-bold mb-3">Make Money with Us</h5>
                            <ul className="list-unstyled">
                                <li>Sell on Supgor</li>
                                <li>Sell Your Services on Supgor</li>
                                <li>Sell on Supgor Business</li>
                                <li>Sell Your Apps on Supgor</li>
                                <li>Become an Affiliate</li>
                                <li>Advertise Your Products</li>
                                <li>Sell-Publish with Us</li>
                                <li>Become an Supgor Vendor</li>
                            </ul>
                        </div>

                        <div className="col-md-2 ms-4 mt-4">
                            <h5 className="fw-bold mb-3">For Buyers</h5>
                            <ul className="list-unstyled">
                                <li>FAQ</li>
                                <li>Track Order</li>
                                <li>Contact</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Footer