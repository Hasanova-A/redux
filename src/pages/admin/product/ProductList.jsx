import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { productDelete } from '../../../tools/actions/ProductAction';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';





const MySwal = withReactContent(Swal);
const ProductList = () => {
  const product = useSelector(p => p.product);
  const dispatch = useDispatch();


  const handleDelete = (id) => {
    MySwal.fire({
        title: "Əminsiz?",
        text: "Məhsul səbətdən silinəcək",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Bəli, sil!",
        cancelButtonText: "Ləğv et"
    }).then((result) => {
        if (result.isConfirmed) {
            removeItem(id)
            MySwal.fire("Silindi!", "Məhsul səbətdən çıxarıldı.", "success"); 

          
        }
    });
};


 


  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h3 className='my-5'>Product List</h3>
        <Link className='add-btn mb-3' to="/dashboard/product/add"><IoMdAddCircleOutline /></Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">image</th>
              <th scope="col">title</th>
              <th scope="col">category</th>
              <th scope="col">price</th>
              <th scope="col">oldPrice</th>
              <th scope="col">rating</th>
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
                <td>{item.rating}</td>
                <td><Link className='edit-btn'  to={`/dashboard/product/edit/${item.id}`} ><FaEdit /></Link></td>
                <td><button className='delete-btn' onClick={() => { dispatch(productDelete(item.id)), handleDelete(item.id) }}><FaDeleteLeft /></button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductList