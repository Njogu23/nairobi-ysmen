import React from "react";
import Typography from '@mui/material/Typography';
import './intro.css';

export default function Intro() {
  return (
    <div className="introduction">
      <Typography variant="h4" style={{
        textAlign: 'center',
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#1a237e',  // Dark blue color
        fontFamily: 'Arial, sans-serif',  // Fallback fonts for compatibility
        marginTop: '40px'
      }}>
        Introduction
      </Typography>
      <hr style={{
        width: "30%",
        borderWidth: "1px",
        borderColor: '#fd5507', 
        marginBottom: '30px'
      }} />
      <h2>Welcome to the Nairobi Y's Men Club</h2>
      <p>
        We are dedicated to serving the community through various initiatives that promote fellowship, leadership, and service. Join us in making a positive impact!
      </p>
    </div>
  );
}
