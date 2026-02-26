import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal)
const ProductForm = ({formData, editData}) => {

  const [image, setImage] = useState(editData?editData.image:"");
  const [title, setTitle] = useState(editData?editData.title:"");
  const [price, setPrice] = useState(editData?editData.price:"");
  const [oldPrice, setOldPrice] = useState(editData?editData.oldPrice:"");
  const [category, setCategory] = useState(editData?editData.category:"");
  const [rating, setRating] = useState(editData?editData.rating:"");

  
  const navigate = useNavigate();
 const addProduct = (e) => {
    e.preventDefault();
    formData({id: Date.now(), image, title, price, oldPrice, category, rating});
    navigate('/dashboard/product');
  }


  const handleEdit = (id) => {
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
     

        <div className="col-6">
          <form onSubmit={addProduct}>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input value={image} onChange={e => setImage(e.target.value)} required type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input value={title} onChange={e => setTitle(e.target.value)} required type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label >Category:</label><br></br>
              <select value={category} onChange={e => setCategory(e.target.value)} name="cars" id="cars" style={{ width: "500px", height: "40px", borderRadius: "5px", borderColor: "#DEE2E6" }} className='mt-2'>
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
                <input value={price} onChange={e => setPrice(e.target.value)} required type="text" className="form-control" />
              </div>
              <div className="div ms-5">
                <label className="form-label">OldPrice</label>
                <input value={oldPrice} onChange={e => setOldPrice(e.target.value)} required type="text" className="form-control" />
              </div>
              <div className="div ms-5">
                <label className="form-label">OldPrice</label>
                <input value={rating} onChange={e => setRating(e.target.value)} required type="text" className="form-control" />
              </div>

            </div>
            <button type="submit" className="btn btn-dark" onClick={() => { handleEdit(item.id) }}>{editData?"Edit": "Add"}</button>
          </form>
        </div>
    
    </>
  )
}

export default ProductForm