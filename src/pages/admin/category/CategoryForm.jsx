import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { categoryAddAction } from '../../../tools/actions/categoryAction';

const CategoryForm = ({formData, editData}) => {
  const [title, setTitle] = useState(editData?editData.title:"");
  
  const navigate = useNavigate();

  const addCategory = (e) => {
    e.preventDefault();
    formData({ id: Date.now(), title });
    navigate('/dashboard/category');
  }
  return (
    <>
      

        <div className="col-6">
          <form onSubmit={addCategory}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input value={title} onChange={e => setTitle(e.target.value)} required type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-dark">{editData?"Edit": "Add"}</button>
          </form>
        </div>
    
    </>
  )
}

export default CategoryForm