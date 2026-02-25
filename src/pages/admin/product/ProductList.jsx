import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productDelete } from '../../../tools/actions/ProductAction';

const ProductList = () => {
  const product = useSelector(p => p.product);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h3 className='my-5'>Product List</h3>
        <Link to="/dashboard/product/add">Product Add</Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">image</th>
              <th scope="col">title</th>
              <th scope="col">category</th>
              <th scope="col">price</th>
              <th scope="col">oldPrice</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, count) => (
              <tr key={count}>
                <th scope="row" >{count + 1}</th>
                <td><img src={item.image} style={{ objectFit: "contain" }} width={70} alt={item.title} /></td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.oldPrice}</td>
                <td><Link className='btn btn-warning'>Edit</Link></td>
                <td><button className='btn btn-danger' onClick={() => { dispatch(productDelete(item.id)) }}>X</button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductList