// src/pages/News.tsx
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './News.css';

interface NewsItem {
  title: string;
  date: string;
  content: string;
  image: string;
}

const News: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const newsList: NewsItem[] = [
    { 
      title: "Welcome Our New Family Member!!!", 
      date: "2024-5-04", 
      content: "Still thinking her name lol.", 
      image: "./images/zeze1.jpg" 
    },
    { 
      title: "Graduation Day.", 
      date: "2024-5-19", 
      content: "Offically earned my Master degree.", 
      image: "./images/grad.jpg" 
    },
    { 
      title: "News Item 3", 
      date: "2024-10-05", 
      content: "Summary of news item 3.", 
      image: "path/to/image3.jpg" 
    },
    { 
      title: "Happy Independent Day.", 
      date: "2024-7-04", 
      content: "Celebrateing July 4th with friends. ", 
      image: "path/to/image3.jpg" 
    },
    { 
      title: "Happy Independent Day.", 
      date: "2024-7-04", 
      content: "Celebrateing July 4th with friends. ", 
      image: "path/to/image3.jpg" 
    },
    // Add more news items as needed
  ];

  // Function to open modal with the selected image
  const openImageModal = (image: string) => setSelectedImage(image);

  // Function to close the image modal
  const closeImageModal = () => setSelectedImage(null);

  return (
    <div>
      <div className="news-container">
        <h1>Mini Blog</h1>
        <div className="news-list">
          {newsList.map((news, index) => (
            <div key={index} className="news-card">
              <img 
                src={news.image} 
                alt={news.title} 
                className="news-image" 
                onClick={() => openImageModal(news.image)} // Set image on click
              />
              <div className="news-content">
                <h3>{news.title}</h3>
                <p className="news-date">{news.date}</p>
                <p>{news.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image modal for larger view */}
      <Modal show={!!selectedImage} onHide={closeImageModal} centered>
        <Modal.Body>
          {selectedImage && (
            <img src={selectedImage} alt="Selected" className="modal-image" />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default News;


