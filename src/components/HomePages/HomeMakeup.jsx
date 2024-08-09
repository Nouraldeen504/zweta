import React from 'react'
import makeup from '../../assets/images/makeup.jpg';
import { Link } from 'react-router-dom';

const HomeMakeup = () => {
  return (
        <>
            <style>
                {`
                .makeupImage {
                    max-width: 1000px;
                    object-fit: cover;
                    overflow: hidden;
                    transition: opacity 0.3s ease; /* Smooth transition effect */
                  }
                  
                  .makeupImage:hover {
                    opacity: 0.7; /* Reduced opacity on hover */
                    cursor: pointer; /* Change cursor to pointer on hover */
                  }
                `}
            </style>

    
            <div className='p-5 border-bottom border-top border-dark' style={{ backgroundColor: '#f8f9fa',width: '100%',}}>
                <h1 className='text-center mb-5'>تمتعي بإطلالة سحرية وفريدة من نوعها</h1>
                <div className='d-flex w-100 justify-content-center'>
                    <Link to="products/makeup">
                        <img src={makeup} alt="" className='makeupImage' />
                    </Link>
                </div>
            </div>
        </>
  )
}

export default HomeMakeup
