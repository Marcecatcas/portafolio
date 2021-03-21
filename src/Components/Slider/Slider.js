import React, { Component } from 'react';
import "./Slider.css"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import HTML5 from "./SliderImages/html5.png"
import Css from "./SliderImages/css3.png"
import Js from "./SliderImages/js.png"
import ReactIcon from "./SliderImages/react.png"
import Trello from "./SliderImages/trello.png"
import Github from "./SliderImages/logo github.png"
import Git from "./SliderImages/git.png"
import Firebase from "./SliderImages/firebase.png"
 
export default class MyCarousel extends Component {
  render() {
    return (
      <Carousel arrows dots>
        <img src={HTML5} className ="Icons" alt=""/>
        <img src={Css} className ="Icons" alt=""/>
        <img src={Js} className ="Icons" alt=""/>
        <img src={ReactIcon} className ="Icons" alt=""/>
        <img src={Trello} className ="Icons" alt=""/>
        <img src={Github} className ="Icons" alt=""/>
        <img src={Git} className ="Icons" alt=""/>
        <img src={Firebase} className ="Icons"  alt=""/>
      </Carousel>
    );
  }
}