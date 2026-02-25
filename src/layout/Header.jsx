import { SlBasket } from "react-icons/sl";
import React, { useContext } from 'react'
import mylogo from '../assets/images/image.png'
import { Link, NavLink } from 'react-router-dom'
import { ModeContext } from '../context/ModeProvider'
import { useCart } from "react-use-cart";

const Header = () => {
    const { totalItems } = useCart();
    const [mode, setMode] = useContext(ModeContext);
    const changeMode = () => {
        if (mode === "dark") {
            setMode('light')
            localStorage.setItem('mode', 'light')
        }
        else {
            setMode('dark')
            localStorage.setItem('mode', 'dark')
        }
    }
    return (
        <>
            <header >
                <div className="green d-flex align-items-center justify-content-center" style={{ backgroundColor: "#BDEB69" }}>
                    <small className='mt-2 mb-2'>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</small>
                </div>
                <div className="container">
                    <div className="order d-flex justify-content-between">
                        <div className="order-list-one mt-3 mb-3" style={{ fontSize: "14px", color: "grey" }}>
                            <ul className='d-flex'>
                                <li>About Us</li>
                                <li className='ms-3'>FAQ</li>
                                <li className='ms-3'>My account</li>
                                <li className='ms-3'>Order Tracking</li>
                                <li className='ms-5' style={{ color: "#65A30D" }}><i className="fa-solid fa-bolt"></i>Order now and get it within 15 min.!</li>
                            </ul>
                        </div>
                        <div className="order-list-two mt-3 mb-3" style={{ fontSize: "14px", color: "grey" }}>
                            <ul className='d-flex'>
                                <li >Contact</li>
                                <li className='ms-3'>English</li>
                                <li className='ms-3'>USD</li>
                            </ul>
                        </div>
                    </div>


                    <div className="all d-flex">
                        <img src={mylogo} alt="" style={{ width: "160px", height: "30px" }} />
                        <div className="location d-flex ms-5">
                            <div className="loc-icon"><i className="fa-solid fa-location-dot"></i></div>
                            {/* <div className="loc-text ms-1">
                                <small>All</small>
                            </div> */}
                        </div>
                        <div className="input-group mb-3 ms-3">
                            <input type="text" className="form-control" placeholder="Search popular products..." aria-label="Recipient’s username" aria-describedby="button-addon2" />
                        </div>
                        <div className="all-icons ms-5">
                            <div className="user me-2"><i className="fa-regular fa-user"></i></div>
                            <div className="heart me-2"><i className="fa-regular fa-heart"></i></div>
                            <div className="arrow me-2"><i className="fa-solid fa-arrow-right-arrow-left"></i></div>
                            <div className="basket me-2"><i className="fa-solid fa-basket-shopping"></i></div>
                            {/* <div className="price"><p>$0.00<br></br><small>Your Cart</small></p></div> */}
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <div className="navigation-panel">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/product">Shop</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/blog">Blog</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                                        </li>
                                        <button className='btn ms-3' style={{ backgroundColor: "#BDEB69" }} onClick={changeMode}>{mode}</button>
                                        <Link to={"/login"} className="btn btn-warning ms-2">Login</Link>
                                        <Link to={"/register"} className="btn btn-success ms-2">Register</Link>
                                    </ul>
                                    <form className="best-seller d-flex">
                                        <Link to="/basket" className="basket btn position-relative">
                                            <SlBasket />
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {totalItems}
                                            </span>
                                        </Link>
                                        <p className='me-2'>%</p>
                                        <p className='me-2'>Best Seller</p>
                                        <div className="red">SALE</div>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <hr />
            </header>
        </>
    )
}

export default Header