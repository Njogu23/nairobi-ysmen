import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Container } from '@mui/material';
import { MyContext } from '../../MyContext';
import './activities.css';

const ActivityDetail = () => {
  const { id } = useParams();
  const {activityDetails } = useContext(MyContext)
  const activity = activityDetails[id];

  return (
    <Container className="activity-detail-container">
      <Card className="activity-detail-card">
        <img
          src={activity.image}
          alt={activity.title}
          className="activity-detail-media"
        />
        <CardContent className="activity-detail-content">
          <Typography variant="h4" gutterBottom>
            {activity.title}
          </Typography>
          <Typography variant="body1">
            {activity.content}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ActivityDetail;
