import React from 'react';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import './callToAction.css'; // Create a new CSS file for specific styling

const CallToAction = () => (
  <div className="cta homepage-section">
    <Typography variant="h4" style={{
        textAlign: 'center',
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#1a237e',  // Dark blue color
        fontFamily: 'Arial, sans-serif',
        marginTop: '40px'
    }}>
      Get Involved
    </Typography>
    <hr style={{
        width: "30%",
        borderWidth: "1px",
        borderColor: '#fd5507',
        marginBottom:'30px'
    }} />
    <Typography variant="h6" style={{
        textAlign: 'center',
        fontSize: '18px',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        marginBottom: '20px'
    }}>
      Become a member, volunteer, or donate to support our cause. Together, we can make a difference!
    </Typography>
    <div style={{textAlign: 'center'}}>
        <NavLink to='/aboutus'>
            <button className="cta-button">Join Us</button>
        </NavLink>
    </div>
  </div>
);

export default CallToAction;
