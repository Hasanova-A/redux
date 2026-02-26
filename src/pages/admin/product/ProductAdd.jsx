import React from 'react'
import { useDispatch } from 'react-redux';
import { productAddAction } from '../../../tools/actions/ProductAction';
import ProductForm from './ProductForm';

const ProductAdd = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className='my-5'>Add Product</h1>

        <ProductForm formData={(fd)=> {dispatch(productAddAction(fd))}} />
      </div>
    </>
  )
}

export default ProductAdd