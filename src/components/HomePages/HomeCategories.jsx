import React from 'react';
import homeAccessories from '../../assets/images/homeAccessories.jpg';
import accessories from '../../assets/images/accessories.jpg';
import kitchen from '../../assets/images/kitchen.jpg';
import { Link } from 'react-router-dom';

const HomeCategories = () => {
  return (

        <>
            <style>
                {`
                .homeCategoryImage {
                    max-height: 325px;
                    object-fit: cover;
                    overflow: hidden;
                    transition: opacity 0.3s ease; /* Smooth transition effect */
                    width: 100%;
                  }
                  
                  .homeCategoryImage:hover {
                    opacity: 0.7; /* Reduced opacity on hover */
                    cursor: pointer; /* Change cursor to pointer on hover */
                  }
                `}
            </style>

    
            <div className='p-5 border-bottom border-top border-dark'>
                <h1 className='text-center mb-5'>كل ما تحتاجه لبيتك</h1>
                <div className='d-flex w-100 justify-content-center flex-column flex-lg-row' style={{gap: '2rem'}}>
                    <div>
                        <Link to="products/kitchen">
                            <img src={kitchen} alt="" className='homeCategoryImage' />
                        </Link>
                    </div>
                    <div>
                        <Link to="products/homeAccessories">
                            <img src={homeAccessories} alt="" className='homeCategoryImage' />
                        </Link>
                    </div>
                    <div>
                        <Link to="products/accessories">
                            <img src={accessories} alt="" className='homeCategoryImage' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
  )
}

export default HomeCategories;
