import React, { createContext, useState} from 'react'

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {

    const activityDetails = {
        'feeding-program': {
            id:"1",
            title: 'Feeding Program',
            image: '/fellowship.jpg',
            description: 'Providing meals to the needy.',
            content: 'Our Feeding Program focuses on providing nutritious meals to underprivileged communities. We believe that no one should go hungry, and we strive to make a difference one meal at a time. Our dedicated volunteers work tirelessly to prepare and distribute food to those in need. Join us in our mission to eradicate hunger and improve lives.',
        },
        'desk-donation': {
            id:"2",
            title: 'Desk Donation',
            image: '/main.jpg',
            description: 'Donating desks to schools.',
            content: 'Education is a fundamental right, and our Desk Donation initiative aims to support schools by providing essential furniture. By donating desks, we help create a conducive learning environment for students. This initiative not only enhances the educational experience but also encourages better attendance and performance. Help us support education and empower the next generation.',
        },
        'book-drive': {
            id:"3",
            title: 'Book Drive',
            image: '/tunji.jpeg',
            description: 'Collecting and distributing books.',
            content: 'Our Book Drive collects and distributes books to children and adults in need. Access to books fosters literacy, imagination, and lifelong learning. We partner with local libraries, schools, and community centers to ensure that everyone has the opportunity to read and learn. Get involved by donating new or gently used books, or volunteer to help with collection and distribution.',
        },
        'health-camp': {
            id:"4",
            title: 'Health Camp',
            image: '/tree planting.jpg',
            description: 'Providing free health check-ups and services.',
            content: 'The Health Camp initiative provides free medical check-ups and health services to underserved communities. Our team of healthcare professionals and volunteers offer screenings, consultations, and treatment for various health issues. By bringing healthcare to those who cannot afford it, we aim to improve overall community health and well-being. Support our efforts by volunteering or donating medical supplies.',
        },
        'environmental-cleanup': {
            id:"5",
            title: 'Environmental Cleanup',
            image: '/tree planting.jpg',
            description: 'Organizing clean-up drives in local areas.',
            content: 'Our Environmental Cleanup activities focus on preserving the natural beauty of our surroundings. We organize clean-up drives in local parks, beaches, and neighborhoods to remove litter and promote environmental awareness. This initiative not only improves the aesthetics of our communities but also protects wildlife and reduces pollution. Join us in making a positive impact on the environment.',
        },
        'youth-mentorship': {
            id:"6",
            title: 'Youth Mentorship',
            image: '/fellowship.jpg',
            description: 'Guiding and supporting young individuals.',
            content: 'The Youth Mentorship program connects experienced mentors with young individuals seeking guidance and support. Our mentors provide advice on education, career choices, and personal development, helping mentees navigate their challenges and achieve their goals. This initiative fosters a supportive community and empowers the next generation of leaders. Become a mentor or mentee and make a difference today.',
        },
    };


    return (
        <MyContext.Provider value={{activityDetails}}>
            {children}
        </MyContext.Provider>
    )
}



