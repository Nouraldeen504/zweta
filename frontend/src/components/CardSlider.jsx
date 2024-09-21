import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import fashion from '../assets/images/fashionCardM.jpg';
import suits from '../assets/images/suits.jpg';
import { CartContext } from '../context/cart'
import { useState, useContext } from 'react'



const items = [
    { id: 1, name: 'اسم المنتج', description: 'نبذة مختصرة عن المنتج', image: fashion, price: 100, },
    { id: 2, name: 'اسم المنتج', description: 'نبذة مختصرة عن المنتج', image: suits, price: 220, },
    { id: 3, name: 'اسم المنتج', description: 'نبذة مختصرة عن المنتج', image: suits, price: 220, },
    { id: 4, name: 'اسم المنتج', description: 'نبذة مختصرة عن المنتج', image: suits, price: 220, },
    { id: 5, name: 'اسم المنتج', description: 'نبذة مختصرة عن المنتج', image: suits, price: 220, },
    { id: 6, name: 'اسم المنتج', description: 'نبذة مختصرة عن المنتج', image: fashion, price: 100, }
];

const slides = [];
for (let i = 0; i < items.length; i += 3) {
    slides.push(items.slice(i, i + 3));
}


const CardSlider = () => {
    const { cartItems, addToCart } = useContext(CartContext)
    const [toastShow, setToastShow] = useState(false);

    const handleAddToCartClick = (item) => {
        addToCart(item); // Call the existing addToCart function
    
        // Show the toast
        setToastShow(true);
        // Hide the toast after 3 seconds
        setTimeout(() => setToastShow(false), 3000);
      };
  return (
        <>
            <style>
                {`
                /* CustomCarouselStyles.css */
                .carousel-control-next-icon, .carousel-control-prev-icon {
                    filter: invert(50%) sepia(100%) saturate(5000%) hue-rotate(90deg) brightness(30%) contrast(100%);
                }
                
                `}
            </style>
            
            <div className='p-5 border-bottom border-top border-dark' style={{ backgroundColor: '#f8f9fa',width: '100%',}}>
                <h1 className='text-center mb-5'>آخر التخفيضات</h1>
                <Carousel indicators={false} >
                    {slides.map((slide, slideIndex) => (
                    <Carousel.Item key={slideIndex} className='px-5'>
                        <div className='d-flex w-100 justify-content-center flex-column flex-lg-row' style={{gap: '2rem'}}>
                        {slide.map((item) => (
                            <Card key={item.id} style={{ width: '18rem', margin: '0.5rem auto' }}>
                                <Card.Img src={item.image} style={{ maxHeight: '300px' , objectFit: 'cover', overflow: 'hidden'}}/>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                    <p className='fs-5'>السعر: <span className='fw-bold'>{item.price} دينار</span></p>
                                    <Button className="" variant="dark" onClick={() => handleAddToCartClick(item)}>اضف الى السلة</Button>
                                </Card.Body>
                            </Card>
                        ))}
                        </div>
                    </Carousel.Item>
                    ))}
                </Carousel>
                <ToastContainer position="top-center" className="p-3" style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}>
                    <Toast onClose={() => setToastShow(false)} show={toastShow} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="ms-auto">اشعار</strong>
                    </Toast.Header>
                    <Toast.Body>تمت اضافة المنتج الى السلة!</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        </>
    );
}

export default CardSlider;