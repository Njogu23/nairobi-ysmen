import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "./hero.css";
import { MyContext } from "../../MyContext";

const Hero = () => {

  const { heroSectionContent } = useContext(MyContext);

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        {heroSectionContent.map((image, index) => (
          <div key={index} className="carousel-item">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="carousel-image"
              loading="lazy"  
            />
            <div className="carousel-overlay">
              <div className="carousel-text animate-text">
                <h2>{image.title}</h2>
                <h3>{image.subtitle}</h3>
                <p>{image.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
