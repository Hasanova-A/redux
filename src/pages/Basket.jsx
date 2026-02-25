import React from 'react'
import { useCart } from 'react-use-cart'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";



const MySwal = withReactContent(Swal);
const Basket = () => {

    const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    cartTotal,
    emptyCart,
    removeItem,
  } = useCart();
    




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

const AllDelete = (id) => {
    MySwal.fire({
        title: "Əminsiz?",
        text: "Bütün məhsullar silinəcək!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Bəli, sil!",
        cancelButtonText: "Ləğv et"
    }).then((result) => {
        if (result.isConfirmed) {
            emptyCart()
            MySwal.fire("Silindi!", "Məhsul səbətdən çıxarıldı.", "success"); 
        }
    });
};






    return (
        <>
            {isEmpty ? <div className='d-flex align-items-center justify-content-center'>
                <img width={300} src="https://cdn.dribbble.com/userupload/8913721/file/original-27f29cc8cf3843454340ffa980be35f5.gif" alt="" />
            </div> : <div>
                <h2 className='text-center'>My basket</h2>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">İmage</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, count) => (
                            <tr>
                                <th scope="row">{count +1}</th>
                                <td><img src={item.image} height={70} alt="" /></td>
                                <td>{item.title}</td>
                                <td>{Math.round(item.price * item.quantity)}$</td>
                                <td>
                                    <button className={`plus ${item.quantity>1?"":"disabled"}`}   onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}  disabled={item.quantity <= 1}>-</button>
                                    <span className='mx-2'>{item.quantity }</span>
                                    <button className='plus'  onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>+</button>
                                </td>
                                <td>
                                    <button className='delete' onClick={() => handleDelete(item.id) }><FaDeleteLeft /></button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={AllDelete} className='allclear my-2'><MdDelete /></button>
                    <p>Cart Total: {Math.round(cartTotal)}$</p>
                </div>
            </div>}

        </>
    )
}

export default Basket