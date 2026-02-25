import React from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { useCart } from 'react-use-cart';
import { IoCartSharp } from "react-icons/io5";
import { BiSolidInfoCircle } from "react-icons/bi";


const SingleProduct = ({ items}) => {
    const { addItem } = useCart();
    const notify = () => toast.success('🦄 Wow so easy!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });;
    
    return (
        <>
            <div className="col-12 col-sm-6 col-md-3">
                <div className="card">
                    <img src={items.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="icons">
                            <i className="fa-solid fa-star"></i><small>({items.rating})</small>
                        </div>
                        <p className="card-title">{items.title}</p>
                        <div className="prices">
                            <p className="newprice">${items.price}</p>
                            <p className="oldprice">${items.oldPrice}</p>
                            <button className='add' onClick={()=>{addItem(items), notify()}}><IoCartSharp /></button>
                            <ToastContainer />
                            <Link style={{ width: "80px" }} className="more" to={`/product/${items.id}`}><BiSolidInfoCircle /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct