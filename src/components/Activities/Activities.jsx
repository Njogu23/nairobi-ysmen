import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Container } from '@mui/material';
import './activities.css';
import { MyContext } from '../../MyContext';

export default function Activities() {

    const { activityDetails } = useContext(MyContext)

    return (
        <div className='activities-body'>
            <div className="activities-overlay">
                <div className="activities-content">
                    <h1>Discover Our Activities and Initiatives</h1>
                    <p className='activities-p'>"Let your light shine before others, that they may see your good deeds and glorify your Father in heaven."</p>
                    <h2>- Matthew 5:16</h2>
                </div>
            </div>
            <Typography variant="h4" style={{
                textAlign: 'center',
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#1a237e',  
                fontFamily: 'Arial, sans-serif',
                marginTop: '40px'
            }}>
            Explore Our Work
            </Typography>
            <hr style={{
                width: "30%",
                borderWidth: "1px",
                borderColor: '#fd5507',
                marginBottom:'30px'
            }} />
            <Container>
                <Grid container spacing={4} style={{ marginTop: '20px', marginBottom: '20px' }}>
                    {Object.keys(activityDetails).map(key => (
                        <Grid item xs={12} sm={6} md={4} key={key}>
                            <Card className="card">
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={activityDetails[key].images[0]}
                                    alt={activityDetails[key].title}
                                    className="card-media"
                                />
                                <CardContent className="card-content">
                                    <Typography 
                                    style={{color:'#030749'}}
                                    gutterBottom
                                    variant="h5" 
                                    component="div">
                                        {activityDetails[key].title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {activityDetails[key].description}
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Button
                                        variant="contained"
                                        component={NavLink}
                                        to={`/activity/${key}`}
                                        onMouseOver={(e)=> {
                                            e.target.style.backgroundColor = "#1979f5"
                                            e.target.style.color = "white"
                                          }}
                                          onMouseOut={(e)=> {
                                            e.target.style.backgroundColor = "#0a54f5"
                                            e.target.style.color = "white"
                                          }}
                                        className="read-more-button"
                                    >
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
