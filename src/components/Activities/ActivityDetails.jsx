import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Container, CardMedia } from '@mui/material';
import { MyContext } from '../../MyContext';
import Slider from 'react-slick';
import { motion } from 'framer-motion'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './activities.css';

const ActivityDetail = () => {
  const { id } = useParams();
  const { activityDetails } = useContext(MyContext);
  const activity = activityDetails[id];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: activity.images.length < 3? 1 : 2, 
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Container className="activity-detail-container">
      <Card className="activity-detail-card">
        <img
          src={activity.images[0]}
          alt={activity.title}
          className="activity-detail-media"
        />
        <CardContent className="activity-detail-content">
          <Typography variant="h4" gutterBottom>
            {activity.title}
          </Typography>
          <hr style={{
            width: '30%',
            borderWidth: "1px",
            borderColor: '#fd5507',  
          }} />
          <hr style={{
            width: '20%',
            borderWidth: "1px",
            borderColor: '#fd5507',  
          }} />
            {activity.content.map((paragraph, index) => (
              <Typography variant="body2" className='activity-content' key={index}>{paragraph}</Typography>
            ))}
          <br />
          {activity.author ? <Typography variant="h4" className='activity-content' style={{textAlign: "right", fontSize: "20px"}}>By: {activity.author}</Typography>: null}
          <br />
            {activity.images && activity.images.length >= 2 && (
              <div className='activity-slider-item'>
                <Slider {...settings} className='activity-slider'>
                  {activity.images.map((image, key) => (
                    <div key={key} className='activity-slider'>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }} 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }} 
                        className='activity-slider-item'>
                        <Card
                          style={{
                            maxHeight: '60vh',
                            transition: 'transform 0.2s',
                            display: 'flex',
                            boxShadow: '0px 10px 15px rgba(2, 7, 80, 0.5)'
                          }}>
                          <CardMedia
                            component="img"
                            image={image}
                            alt={key}
                            style={{
                              height: "100%",
                              width: '100%',
                              objectFit: 'cover',
                              borderRadius: "0"
                            }}
                          />
                        </Card>
                      </motion.div>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default ActivityDetail;
