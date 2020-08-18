import React, { Component } from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    'https://images.unsplash.com/photo-1579460373382-a4a855d3ad52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
    'https://images.unsplash.com/photo-1580943942792-63264a446b45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1492390195956-15fd4c9d0133?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
]

class Slideshow extends Component {
    render() {
    return (
      <div className="sliderContainer">
        <Fade>
          <div className="each-fade">
              <img src={slideImages[0]} alt="images" />
          </div>
          <div className="each-fade">
              <img src={slideImages[1]}  alt="images"/>
          </div>
          <div className="each-fade">
              <img src={slideImages[2]} alt="images" />
          </div>
        </Fade>
      </div>
    )
  } 
};


export default Slideshow
