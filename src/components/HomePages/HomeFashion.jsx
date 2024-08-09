import React from 'react';
import menFashion from '../../assets/images/fashion.jpg';
import womenFashion from '../../assets/images/fashioncardW.jpg';
import { Link } from 'react-router-dom';

const HomeFashion = () => {
  return (

        <>
            <style>
                {`
                .homeCategoryImageF {
                    max-height: 500px;
                    object-fit: cover;
                    overflow: hidden;
                    transition: opacity 0.3s ease; /* Smooth transition effect */
                  }
                  
                  .homeCategoryImageF:hover {
                    opacity: 0.7; /* Reduced opacity on hover */
                    cursor: pointer; /* Change cursor to pointer on hover */
                  }
                `}
            </style>

    
            <div className='p-5 border-bottom border-top border-dark' style={{ backgroundColor: '#f8f9fa',width: '100%',}}>
                <h1 className='text-center mb-5'>استكشف عالم الموضى معنا</h1>
                <div className='d-flex w-100 justify-content-around '>
                    <div>
                        <Link to="products/menFashion">
                            <img src={menFashion} alt="" className='homeCategoryImageF' />
                        </Link>
                    </div>
                    <div>
                        <Link to="products/womenFashion">
                            <img src={womenFashion} alt="" className='homeCategoryImageF' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
  )
}

export default HomeFashion;
