import React, {useContext} from 'react';
import Typography from '@mui/material/Typography';
import './ourwork.css';
import { MyContext } from '../../MyContext';

const OurWork = () => {
  const { ourWork } = useContext(MyContext)
  
  return (
    <div className="our-work">
      <Typography variant="h4" style={{
        textAlign: 'center',
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#1a237e',
        fontFamily: 'Arial, sans-serif',
        marginTop: '40px'
      }}>
        What We Do
      </Typography>
      <hr style={{
        width: "30%",
        borderWidth: "1px",
        borderColor: '#fd5507', 
        marginBottom: '30px'
      }} />
      <div className="card-container">
        {ourWork.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-content">
              <Typography variant="h5" className="card-title">{item.title}</Typography>
              <Typography variant="body1" className="card-desc">{item.description}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
