import React from 'react'
import CategoryForm from './CategoryForm'
import { useDispatch } from 'react-redux';
import { categoryAddAction } from '../../../tools/actions/categoryAction';

const CategoryAdd = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className='my-5'>Add Product</h1>

       <CategoryForm formData={(fd)=> {dispatch(categoryAddAction(fd))}} />
      </div>
    </>
  )
}

export default CategoryAdd