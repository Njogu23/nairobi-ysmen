import React from 'react';
import './ourwork.css';
import Typography from '@mui/material/Typography';

export default function OurWork() {
  const data = [
    {
      image: '/fellowship.jpg',
      title: 'Community Service',
      description: "Community service is at the heart of the Nariobi Y's Men Club's mission. We are dedicated to making a positive impact in the lives of those around us through various service projects. Our initiatives include feeding programs for the underprivileged, educational support for local schools, healthcare outreach, and support for vulnerable groups such as orphans and the elderly. In partnership with the YMCA, we extend our reach and resources to implement joint community service programs, such as collaborative youth empowerment projects and shared healthcare initiatives. By addressing the immediate needs of our community, we aim to promote social well-being and foster a sense of unity and cooperation.",
    },
    {
      image: '/tunji.jpeg',
      title: 'Christian Emphasis',
      description: "As part of our commitment to upholding Christian values, the Nariobi Y's Men Club integrates spiritual growth and service into our activities. We organize regular prayer meetings, Bible study sessions, and faith-based discussions that encourage members to deepen their spiritual journey. Our club also partners with local churches to support faith-based community programs, providing spiritual guidance and support to those in need. Through our Christian emphasis, we strive to inspire and nurture a spirit of compassion, love, and service among our members.",
    },
    {
      image: '/tunji.jpeg',
      title: 'Training',
      description: "Empowering our members with the right skills and knowledge is a key priority for the Nariobi Y's Men Club. We offer comprehensive training programs designed to enhance leadership, organizational, and community service skills. Our training sessions cover a wide range of topics, including project management, fundraising strategies, and effective communication. By investing in the development of our members, we ensure they are well-equipped to lead and execute impactful initiatives within the community.",
    },
    {
      image: '/fellowship.jpg',
      title: 'Environmental Conservation',
      description: "The Nariobi Y's Men Club is deeply committed to protecting and preserving our natural environment. Our environmental conservation initiatives include organizing tree planting drives, promoting recycling programs, and conducting clean-up campaigns in local communities. We also collaborate with environmental organizations to raise awareness about sustainability and environmental protection. In partnership with the YMCA, we develop and implement environmental education programs for youth, engaging them in hands-on activities and workshops to cultivate a sense of responsibility towards the environment. Through these efforts, we aim to foster a culture of environmental stewardship and ensure a healthier planet for future generations.",
    },
  ];

  return (
    <>
    <Typography variant="h4" style={{
        textAlign: 'center',
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#1a237e',  // Dark blue color
        fontFamily: 'Arial, sans-serif',  // Fallback fonts for compatibility
        marginTop: '40px'
      }}>
        What We Do
      </Typography>
      <hr style={{
        width: '100%',
        borderWidth: "1px",
        borderColor: '#fd5507', 
        marginBottom:'30px'
      }} />
    <div className="card-container">
      {data.map((item, index) => (
        <div key={index} className={`card ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
          {index % 2 === 0 ? (
            <div className='card-arrangement'>
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-content">
                <h3 className='card-title'>{item.title}</h3>
                <p className='card-desc'>{item.description}</p>
              </div>
            </div>
          ) : (
            <div className='card-arrangement'>
              <div className="card-content">
                <h3 className='card-title'>{item.title}</h3>
                <p className='card-desc'>{item.description}</p>
              </div>
              <img src={item.image} alt={item.title} className="card-image" />
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
}
