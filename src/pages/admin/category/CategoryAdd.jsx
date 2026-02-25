import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { categoryAddAction } from '../../../tools/actions/categoryAction';

const CategoryAdd = () => {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addCategory=(e)=>{
    e.preventDefault();
    dispatch(categoryAddAction({title}))
    navigate('/dashboard/category')

  }
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className='my-5'>Add Product</h1>

        <div className="col-6">
          <form onSubmit={addCategory}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input onChange={e => setTitle(e.target.value)} required type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-dark">Add</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CategoryAdd