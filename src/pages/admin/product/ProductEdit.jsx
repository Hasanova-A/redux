import React from 'react'
import { useDispatch } from 'react-redux';
import {  productEdit } from '../../../tools/actions/ProductAction';
import { useParams } from 'react-router-dom';
import ProductForm from './ProductForm';

const ProductEdit = () => {
    const {id} = useParams();
    const product = useSelector(p=> p.product);
    const dispatch = useDispatch();
    const findProduct = product.find(p=> p.id == id);
  
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className='my-5'>Edit Product</h1>

        <ProductForm editData={findProduct} formData={(fd)=> {dispatch(productEdit(findProduct.id, fd))}} />
      </div>
    </>
  )
}

export default ProductEdit