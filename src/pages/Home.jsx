import React, { useContext } from 'react'
import snopy from '../assets/images/cake.jpeg'
import dog from '../assets/images/cuite.jpeg'
import { ModeContext } from '../context/ModeProvider';


import MultipleItemsCarousel from '../components/MultipleItemsCarousel';
import { product } from '../information/static';



const Home = () => {

  const [mode] = useContext(ModeContext);


  return (
    <>
      <div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={snopy} width={300} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={dog} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container my-5">
        <h3 className='text-center'>Best Seller</h3>
        <MultipleItemsCarousel items={product} />
      </div>

    </>


  )
}

export default Home