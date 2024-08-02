import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./hero.css";

const Hero = () => {
  const images = [
    { 
      src: "/main.jpg", 
      alt: "main", 
      title: "Welcome to Nairobi Y's Men Club", 
      subtitle: "Serving the community since 1969", 
      text: '"Join us in our mission to make a positive impact."'
    },
    { 
      src: "/fellowship.jpg", 
      alt: "fellowship", 
      title: "Fellowship", 
      subtitle: "Building Strong Bonds", 
      text: '"Creating a community of support and camaraderie."'
    },
    { 
      src: "/tree planting.jpg", 
      alt: "treeplanting", 
      title: "Environmental Conservation", 
      subtitle: "Planting for the Future", 
      text: '"Join our tree planting initiatives and help us create a greener planet."'
    },
    { 
      src: "/tunji.jpeg", 
      alt: "tunji", 
      title: "Youth Empowerment", 
      subtitle: "Nurturing Future Leaders", 
      text: '"Empowering the youth through various educational and mentorship programs."'
    }
  ];

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="carousel-image"
            />
            <div className="carousel-overlay">
              <div className="carousel-text">
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
