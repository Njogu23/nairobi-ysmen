import React, { createContext, useState} from 'react'

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {

    const activityDetails = {
        'feeding-program': {
            id:"1",
            title: 'Feeding Program',
            image: '/fellowship.jpg',
            description: 'Providing meals to the needy.',
            date: "22.09.2024",
            content: 'Our Feeding Program focuses on providing nutritious meals to underprivileged communities. We believe that no one should go hungry, and we strive to make a difference one meal at a time. Our dedicated volunteers work tirelessly to prepare and distribute food to those in need. Join us in our mission to eradicate hunger and improve lives.',
        },
        'desk-donation': {
            id:"2",
            title: 'Desk Donation',
            image: '/main.jpg',
            description: 'Donating desks to schools.',
            date: "22.09.2024",
            content: 'Education is a fundamental right, and our Desk Donation initiative aims to support schools by providing essential furniture. By donating desks, we help create a conducive learning environment for students. This initiative not only enhances the educational experience but also encourages better attendance and performance. Help us support education and empower the next generation.',
        },
        'book-drive': {
            id:"3",
            title: 'Book Drive',
            image: '/tunji.jpeg',
            description: 'Collecting and distributing books.',
            date: "22.09.2024",
            content: 'Our Book Drive collects and distributes books to children and adults in need. Access to books fosters literacy, imagination, and lifelong learning. We partner with local libraries, schools, and community centers to ensure that everyone has the opportunity to read and learn. Get involved by donating new or gently used books, or volunteer to help with collection and distribution.',
        },
        'health-camp': {
            id:"4",
            title: 'Health Camp',
            image: '/tree planting.jpg',
            description: 'Providing free health check-ups and services.',
            date: "22.09.2024",
            content: 'The Health Camp initiative provides free medical check-ups and health services to underserved communities. Our team of healthcare professionals and volunteers offer screenings, consultations, and treatment for various health issues. By bringing healthcare to those who cannot afford it, we aim to improve overall community health and well-being. Support our efforts by volunteering or donating medical supplies.',
        },
        'environmental-cleanup': {
            id:"5",
            title: 'Environmental Cleanup',
            image: '/tree planting.jpg',
            description: 'Organizing clean-up drives in local areas.',
            date: "22.09.2024",
            content: 'Our Environmental Cleanup activities focus on preserving the natural beauty of our surroundings. We organize clean-up drives in local parks, beaches, and neighborhoods to remove litter and promote environmental awareness. This initiative not only improves the aesthetics of our communities but also protects wildlife and reduces pollution. Join us in making a positive impact on the environment.',
        },
        'youth-mentorship': {
            id:"6",
            title: 'Youth Mentorship',
            image: '/fellowship.jpg',
            description: 'Guiding and supporting young individuals.',
            date: "22.09.2024",
            content: 'The Youth Mentorship program connects experienced mentors with young individuals seeking guidance and support. Our mentors provide advice on education, career choices, and personal development, helping mentees navigate their challenges and achieve their goals. This initiative fosters a supportive community and empowers the next generation of leaders. Become a mentor or mentee and make a difference today.',
        },
    };

    const heroSectionContent = [
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

    const ourWork = [
        {
          image: '/fellowship.jpg',
          title: 'Community Service',
          description: "Community service is at the heart of the Nairobi Y's Men Club's mission. We are dedicated to making a positive impact in the lives of those around us through various service projects. Our initiatives include feeding programs for the underprivileged, educational support for local schools, healthcare outreach, and support for vulnerable groups such as orphans and the elderly. In partnership with the YMCA, we extend our reach and resources to implement joint community service programs, such as collaborative youth empowerment projects and shared healthcare initiatives. By addressing the immediate needs of our community, we aim to promote social well-being and foster a sense of unity and cooperation.",
        },
        {
          image: '/tunji.jpeg',
          title: 'Christian Emphasis',
          description: "As part of our commitment to upholding Christian values, the Nairobi Y's Men Club integrates spiritual growth and service into our activities. We organize regular prayer meetings, Bible study sessions, and faith-based discussions that encourage members to deepen their spiritual journey. Our club also partners with local churches to support faith-based community programs, providing spiritual guidance and support to those in need. Through our Christian emphasis, we strive to inspire and nurture a spirit of compassion, love, and service among our members.",
        },
        {
          image: '/tunji.jpeg',
          title: 'Training',
          description: "Empowering our members with the right skills and knowledge is a key priority for the Nairobi Y's Men Club. We offer comprehensive training programs designed to enhance leadership, organizational, and community service skills. Our training sessions cover a wide range of topics, including project management, fundraising strategies, and effective communication. By investing in the development of our members, we ensure they are well-equipped to lead and execute impactful initiatives within the community.",
        },
        {
          image: '/fellowship.jpg',
          title: 'Environmental Conservation',
          description: "The Nairobi Y's Men Club is deeply committed to protecting and preserving our natural environment. Our environmental conservation initiatives include organizing tree planting drives, promoting recycling programs, and conducting clean-up campaigns in local communities. We also collaborate with environmental organizations to raise awareness about sustainability and environmental protection. In partnership with the YMCA, we develop and implement environmental education programs for youth, engaging them in hands-on activities and workshops to cultivate a sense of responsibility towards the environment. Through these efforts, we aim to foster a culture of environmental stewardship and ensure a healthier planet for future generations.",
        },
    ];
  

    return (
        <MyContext.Provider value={{activityDetails, heroSectionContent, ourWork}}>
            {children}
        </MyContext.Provider>
    )
}



