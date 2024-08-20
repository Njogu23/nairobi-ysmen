import React, { useContext } from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './newscard.css';
import { MyContext } from '../../MyContext';
import { NavLink } from 'react-router-dom';

const NewsSection = () => {

  const { activityDetails } = useContext(MyContext)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
          {Object.keys(activityDetails).map((key) => (
            <div key={key} className="slider-item">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='slider-item'>
                <Card
                style={{
                  textDecoration:'none',
                  height: '100%',
                  transition: 'transform 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: "center",
                  boxShadow: '0px 10px 15px rgba(2, 7, 80, 0.5)'
                }}>
                  <NavLink to={`/activity/${key}`} style={{ width: '100%' }}>
                    <CardMedia
                      component="img"
                      image={activityDetails[key].images[0]}
                      alt={activityDetails[key].title}
                      style={{
                        height: '200px',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </NavLink>
                  <CardContent style={{
                    flexGrow: 1, 
                    color: '#030749', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center'
                  }}>
                    <Typography variant="h6" style={{ fontFamily: 'Courier', fontWeight: 'bold' }} component="h2" gutterBottom>
                      {activityDetails[key].title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {activityDetails[key].date}
                    </Typography>
                    <Button
                      variant="contained"
                      component={NavLink}
                      to={`/activity/${key}`}
                      onMouseOver={(e)=> {
                        e.target.style.backgroundColor = "#1979f5"
                        e.target.style.color = "white"
                      }}
                      style={{backgroundColor: "#0a54f5"}}
                      onMouseOut={(e)=> {
                        e.target.style.backgroundColor = "#0a54f5"
                        e.target.style.color = "white"
                      }}
                      className="read-more-button"
                      >Read More</Button>
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