import React, { useState } from 'react';

const PublicationItem = ({ title, description, fileId }) => {
  const [showPreview, setShowPreview] = useState(false);

  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handlePreviewClick = () => {
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

  return (
    <div className="publication-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="publication-buttons">
        <button onClick={handlePreviewClick} className="preview-button">Preview</button>
        <a href={downloadUrl} download>
          <button className="download-button">Download</button>
        </a>
      </div>
      {showPreview && (
        <div className="preview-container">
          <iframe
            src={previewUrl}
            width="100%"
            height="480"
            allow="autoplay"
            title={title}
          ></iframe>
          <button onClick={handleClosePreview} className="close-preview-button">
            Close View
          </button>
        </div>
      )}
    </div>
  );
};

export default PublicationItem;
