import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const images = [
  {url:'https://images.pexels.com/photos/3735769/pexels-photo-3735769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  {url:'https://images.pexels.com/photos/7605733/pexels-photo-7605733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  {url:'https://images.pexels.com/photos/5994798/pexels-photo-5994798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  {url:' https://images.pexels.com/photos/3985170/pexels-photo-3985170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
];



export default function Carousel() {
  return (
    <AliceCarousel autoPlay={true}  autoPlayInterval={2500}>
      {
        images.map(img=>{
          return <img src = {img.url} key={img.url} className="sliderImg" alt="carouselImg" />
        })
      }
    </AliceCarousel>
  )
}

