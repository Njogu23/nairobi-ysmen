import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./hero.css";

const Hero = () => {

  const images = [
    { src: "/main.jpg", alt: "main", title:"", subtitle:'', text:''},
    { src: "/fellowship.jpg", alt: "fellowship"},
    { src: "/tree planting.jpg", alt: "treeplanting"},
    { src: "/tunji.jpeg", alt: "tunji"}
  ];

  return (
    <Carousel className="carousel"
    showArrows={false}
    infiniteLoop
    autoPlay
    showStatus={false}
    showThumbs={false}
    >
        {images.map((image, index) => (
          <div key={index}>
            <img 
              src={image.src} 
              alt={image.alt} 
              className="carousel-image"
            />
          </div>
        ))}
    </Carousel>
  );
};

export default Hero;
