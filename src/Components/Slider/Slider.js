import React, { Component } from 'react';
import "./Slider.css"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import SliderOne from "./SliderImages/Slider1.png";
import SliderTwo from "./SliderImages/Slider2.png";
import SliderThree from "./SliderImages/Slider3.png";
import SliderFour from "./SliderImages/Slider4.png";
 
export default class MyCarousel extends Component {
  render() {
    return (
      <Carousel arrows dots>
        <img src={SliderOne} className ="Icons" alt=""/>
        <img src={SliderTwo} className ="Icons" alt=""/>
        <img src={SliderThree} className ="Icons" alt=""/>
        <img src={SliderFour} className ="Icons" alt=""/>
      </Carousel>
    );
  }
}