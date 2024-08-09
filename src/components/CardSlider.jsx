import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fashion from '../assets/images/fashionCardM.jpg';
import suits from '../assets/images/suits.jpg';

const items = [
    { id: 1, name: 'اسم المنتج', description: 'نبذة مختصرة عن المنتج', image: fashion, },
    { id: 2, name: 'اسم المنتج', description: 'نبذة مختصرة عن المنتج', image: suits, },
    { id: 3, name: 'اسم المنتج', description: 'نبذة مختصرة عن المنتج', image: suits, },
    { id: 4, name: 'اسم المنتج', description: 'نبذة مختصرة عن المنتج', image: suits, },
    { id: 5, name: 'اسم المنتج', description: 'نبذة مختصرة عن المنتج', image: suits, },
    { id: 6, name: 'اسم المنتج', description: 'نبذة مختصرة عن المنتج', image: fashion, }
];

const slides = [];
for (let i = 0; i < items.length; i += 3) {
    slides.push(items.slice(i, i + 3));
}


const CardSlider = () => {
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
                <Carousel indicators={false}>
                    {slides.map((slide, slideIndex) => (
                    <Carousel.Item key={slideIndex} className='px-5'>
                        <div className="d-flex justify-content-around flex-row">
                        {slide.map((item) => (
                            <Card key={item.id} style={{ width: '18rem', margin: '0.5rem' }}>
                                <Card.Img src={item.image} style={{ maxHeight: '300px' , objectFit: 'cover', overflow: 'hidden'}}/>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                    <Button variant="dark">اضف الى السلة</Button>
                                </Card.Body>
                            </Card>
                        ))}
                        </div>
                    </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default CardSlider;