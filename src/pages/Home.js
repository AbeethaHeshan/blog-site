import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import SlideOne from '../assets/images/slideOne.jpg';
import SlideTwo from '../assets/images/slideTwo.jpg';
import CardOne from '../assets/images/card_1.jpg';
import CardTwo from '../assets/images/Card_4.jpg';
import CardThree from '../assets/images/card_3.jpg';
import CommonCard from '../components/card/CommonCard';


export default function Home() {
  return (
    <div className="d-flex flex-column " style={{width:'100%'}}>
    <Carousel>
      <Carousel.Item>
            <img
            className="d-block w-100"
            src={SlideOne}
            alt={"text"}
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="d-block w-100"
            src={SlideTwo}
            alt={"text"}
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="d-block w-100"
            src={SlideOne}
            alt={"text"}
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="d-flex flex-row justify-content-center align-items-center flex-wrap" style={{width:'100%',marginTop:'20px'}}>
      <CommonCard title={"Sport"} image={CardOne}/>
      <CommonCard  title={"Travel"} image={CardTwo}/>
      <CommonCard   title={"Nature"} image={CardThree}/>
    </div>

   </div>

  )
}
