import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoCartSharp } from "react-icons/io5";
import { toast, ToastContainer } from 'react-toastify';
import { useCart } from 'react-use-cart';
import { useSelector } from 'react-redux';


const ProductDetail = () => {
  const { id } = useParams();
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
const allProducts = useSelector((state)=> state.product);
const item = allProducts?.find((p)=> p.id === parseInt(id));

if (!item) {
    return <h2 className="text-center py-5">Məhsul yüklənir...</h2>;
  }

  return (
    <>

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={item.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{item.title}</h1>
            <h3>{item.price}AZN</h3>
            <p className="lead">{item.description}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/products" className="btn btn-outline-secondary btn-lg px-4">Back</Link>
              <button className='add' onClick={() => { addItem(item), notify() }}><IoCartSharp /></button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail