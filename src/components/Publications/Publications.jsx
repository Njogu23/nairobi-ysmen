import React from 'react';
import './publications.css'; // Ensure you have the CSS for custom styles
import PublicationItem from './PublicationItem';

const publications = [
  {
    title: "The Trumpet 2009",
    description: "The complete report for the year 2009, detailing all our activities.",
    fileId: "16GBSx7xu-8I3P5wdG--jkB0_87p6ZIFl"
  },
  {
    title: "The Trumpet 2010",
    description: "The complete report for the year 2012, detailing all our activities.",
    fileId: "1wMyUjeGt26MYrLrw94klZo8We9kbPWeL"
  },
  {
    title: "The Trumpet 2012",
    description: "The complete report for the year 2012, detailing all our activities.",
    fileId: "1MEvwnk5T5Ks-pZx4VQBbQANRWyt9M_7L"
  },
  {
    title: "The Trumpet 2017",
    description: "The complete report for the year 2012, detailing all our activities.",
    fileId: "14dTX1jZ5QKVrfn5FvnuEkYuW6buwzQgM"
  }
];

const Publications = () => {
  return (
    <div className="publications-page">
      <h1>Publications</h1>
      {publications.map((pub, index) => (
        <PublicationItem key={index} title={pub.title} fileId={pub.fileId} description={pub.description}/>
      ))}
    </div>
  );
};

export default Publications;
