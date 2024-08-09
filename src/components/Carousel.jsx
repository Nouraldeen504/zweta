import Carousel from 'react-bootstrap/Carousel';
import fashion from '../assets/images/fashion.jpg';
import kitchen from '../assets/images/kitchen.jpg';
import accessories from '../assets/images/accessories.jpg';

const items = [
    {
        id: 1,
        name: 'ملابس',
        description: 'نبذة مختصرة عن المجموعة',
        image: fashion,
    },
    {
        id: 2,
        name: 'منزلية',
        description: 'نبذة مختصرة عن المجموعة',
        image: accessories,
    },
    {
        id: 3,
        name: 'مطبخ',
        description: 'نبذة مختصرة عن المجموعة',
        image: kitchen,
    }
]

const MyCarousel = () => {
  return (
    <>
    
    <style>
      {`
          .carousel-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
            mix-blend-mode: multiply;
          }

        .carousel-item {
          position: relative;
          z-index: 0;
        }

        .carousel-control-next-icon, .carousel-control-prev-icon {
          filter: invert(50%) sepia(50%) saturate(5000%) hue-rotate(90deg) brightness(30%) contrast(100%);
      }
      `}
    </style>

    
    <Carousel indicators={false}>
      {items.map((item) => (
        <Carousel.Item style={{ maxHeight: '700px' , overflow: 'hidden'}} key={item.id} className='carousel-item'>
            <div className="carousel-overlay"></div> {/* Overlay container */}
            <img className='d-block w-100' src={item.image} alt="First slide" />
            <Carousel.Caption style={{ zIndex: 2 }}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
}

export default MyCarousel;