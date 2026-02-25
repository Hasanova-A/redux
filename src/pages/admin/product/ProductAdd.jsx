import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productAddAction } from '../../../tools/actions/ProductAction';

const ProductAdd = () => {

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addProduct = (e) => {
    e.preventDefault();
    dispatch(productAddAction({image, title, price, oldPrice, category}))
    navigate('/dashboard/product')
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className='my-5'>Add Product</h1>

        <div className="col-6">
          <form onSubmit={addProduct}>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input onChange={e => setImage(e.target.value)} required type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input onChange={e => setTitle(e.target.value)} required type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label for="cars">Category:</label><br></br>
              <select onChange={e => setCategory(e.target.value)} name="cars" id="cars" style={{ width: "500px", height: "40px", borderRadius: "5px", borderColor: "#DEE2E6" }} className='mt-2'>
                <option value="volvo">Snacks</option>
                <option value="Meat & Seafood">Meat & Seafood</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Frutis & Vegetables">Frutis & Vegetables</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Deli">Deli</option>
                <option value="Dairy & Eggs">Dairy & Eggs</option>
                <option value="Baverages">Baverages</option>
                <option value="Bakery">Bakery</option>
              </select>
            </div>
            <div className="mb-3 d-flex">
              <div className="div">
                <label className="form-label">Price</label>
                <input onChange={e => setPrice(e.target.value)} required type="text" className="form-control" />
              </div>
              <div className="div ms-5">
                <label className="form-label">OldPrice</label>
                <input onChange={e => setOldPrice(e.target.value)} required type="text" className="form-control" />
              </div>

            </div>
            <button type="submit" className="btn btn-dark">Add</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProductAdd