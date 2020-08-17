import React, { Component } from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    'https://images.unsplash.com/photo-1597047243900-ee0fe2f147cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1532443642992-ddfd4a44dd7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1553902000-e036b7d05af5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
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
