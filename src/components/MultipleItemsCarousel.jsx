import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast, ToastContainer } from "react-toastify";
import { IoCartSharp } from "react-icons/io5";
import { useCart } from "react-use-cart";

const MultipleItemsCarousel = ({ items }) => {
    const { addItem } = useCart();
        const notify = () => toast.success('🦄 Wow so easy!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });;


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>

                {items.map(item => (
                    <div key={item.id} className="d-flex">
                        <img src={item.image} height={200} />
                        <button className='add mt-5' onClick={() => { addItem(item), notify() }}><IoCartSharp /></button>
                       
                    </div>

                ))}


            </Slider>
             <ToastContainer />
        </div>
    );
}

export default MultipleItemsCarousel;
