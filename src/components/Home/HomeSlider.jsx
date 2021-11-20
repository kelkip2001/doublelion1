import React, { Component } from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../assests/images/slider1.jpg'
import slider2 from '../../assests/images/slider2.jpg'
import slider3 from '../../assests/images/slider3.jpg'

export class HomeSlider extends Component {
    render() {

        
            var settings = {
                 dots: true,
                 infinite: true,
                 speed: 500,
                 autoplay: true,
                 autoplaySpeed:3000,
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 initialSlide: 0,
                 arrows: false,
                 responsive: [
                   {
                     breakpoint: 1024,
                     settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1,
                       infinite: true,
                       dots: true
                     }
                   },
                   {
                     breakpoint: 600,
                     settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1,
                       initialSlide: 2
                     }
                   },
                   {
                     breakpoint: 480,
                     settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1
                     }
                   }
                 ]
               };
  
        return (
            <div>


<Slider {...settings}>
          <div>
            <img src={slider1} className="slider-img"/>
          </div>
          <div>
          <img src={slider2} className="slider-img"/>
          </div>
          <div>
          <img src={slider3} className="slider-img"/>
          </div>
          
        </Slider>


                
            </div>
        )
    }
}

export default HomeSlider
