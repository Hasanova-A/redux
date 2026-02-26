import React from 'react'
import CategoryForm from './CategoryForm'
import { useDispatch, useSelector } from 'react-redux';
import {  categoryEdit } from '../../../tools/actions/categoryAction';
import { useParams } from 'react-router-dom';

const CategoryEdit = () => {
    const {id} = useParams();
    const category = useSelector(p=> p.category);
    const dispatch = useDispatch();
    const findCategory = category.find(p=> p.id == id);
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className='my-5'>Edit Product</h1>

       <CategoryForm editData={findCategory} formData={(fd)=> {dispatch(categoryEdit(findCategory.id, fd))}} />
      </div>
    </>
  )
}

export default CategoryEdit