import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryDelete } from '../../../tools/actions/categoryAction';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const category = useSelector(c => c.category);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h3 className='my-5'>Category List</h3>
        <Link to="/dashboard/category/add">Category Add</Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {category .map((item, count) => (
              <tr>
                <th scope="row" key={count}>{count + 1}</th>
                <td>{item.title}</td>
                <td><Link className='btn btn-warning'>Edit</Link></td>
                <td><button className='btn btn-danger' onClick={() => { dispatch(categoryDelete(item.id)) }}>X</button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default CategoryList