import React from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './newscard.css';

const NewsSection = () => {
  const newsItems = [
    { id: 1, src: "/main.jpg", alt: "main", title: "Main Event", date: "23/09/2024" },
    { id: 2, src: "/fellowship.jpg", alt: "fellowship", title: "Fellowship Meeting", date: "23/09/2024" },
    { id: 3, src: "/tree planting.jpg", alt: "treeplanting", title: "Tree Planting Initiative", date: "23/09/2024" },
    { id: 4, src: "/tunji.jpeg", alt: "tunji", title: "Member Spotlight: Tunji", date: "23/09/2024" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true
        }
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '40px' }}
    >
      <Typography variant="h4" style={{
        textAlign: 'center',
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#1a237e',  // Dark blue color
        fontFamily: 'Arial, sans-serif',  // Fallback fonts for compatibility
        marginTop: '40px'
      }}>
        News & Updates
      </Typography>
      <hr style={{
        width: '30%',
        borderWidth: "1px",
        borderColor: '#fd5507',  
      }} />
      <div className="slider-container">
        <Slider {...settings} className='slider'>
          {newsItems.map((item) => (
            <div key={item.id} className="slider-item">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='slider-item'>
                <Card style={{
                  height: '100%',
                  transition: 'transform 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  boxShadow: '0px 10px 15px rgba(2, 7, 80, 0.5)'
                }}>
                  <CardMedia
                    component="img"
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    style={{
                      height: '200px',  // Fixed height for image
                      width: '100%',  // Ensure image takes full width
                      objectFit: 'cover'
                    }}
                  />
                  <CardContent style={{
                    flexGrow: 1, 
                    color: '#030749', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center'
                  }}>
                    <Typography variant="h6" style={{ fontFamily: 'Courier', fontWeight: 'bold' }} component="h2" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.date}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default NewsSection;