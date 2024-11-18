// src/pages/Gallery.tsx
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import BottomNavbar from '../components/BottomNavbar';
import './Gallery.css';

interface Photo {
  src: string;
  title: string;
  description: string;
  orientation: 'landscape' | 'portrait';
}

// Array of photos with titles, descriptions, and orientations
const photos: Photo[] = [
  {
    src: "./images/boston.jpeg",
    title: "Sunset at the Beach",
    description: "A beautiful sunset at the beach with vibrant colors and serene waves.",
    orientation: 'landscape'
  },
  {
    src: "./images/hudson.jpg",
    title: "Mountain View",
    description: "A breathtaking view from the mountain top, overlooking the valley.",
    orientation: 'landscape'
  },
  {
    src: "./images/mirror.jpeg",
    title: "Mountain View",
    description: "A breathtaking view from the mountain top, overlooking the valley.",
    orientation: 'landscape'
  },
  {
    src: "./images/sand.jpg",
    title: "Mountain View",
    description: "A breathtaking view from the mountain top, overlooking the valley.",
    orientation: 'landscape'
  },
  { 
    src: "./images/sand.jpg",
    title: "Mountain View",
    description: "A breathtaking view from the mountain top, overlooking the valley.",
    orientation: 'landscape'
  },
  {
    src: "IMG_2959.jpg",
    title: "Mountain View",
    description: "A breathtaking view from the mountain top, overlooking the valley.",
    orientation: 'portrait'
  },
  // Add more photos with specified orientations
];

const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Function to open modal and set selected photo
  const openModal = (photo: Photo) => setSelectedPhoto(photo);

  // Function to close modal
  const closeModal = () => setSelectedPhoto(null);

  return (
    <div>
      {/* Page Title */}
      <h1 className="gallery-title">Photo Gallery</h1>
      {/* Gallery container */}
      <div className="gallery-container" id="gallery">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className={`gallery-item ${photo.orientation}`} 
            onClick={() => openModal(photo)}
          >
            <img src={photo.src} alt={photo.title} className="gallery-photo" />
            <div className="gallery-info">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
        
        {/* Modal for viewing larger image */}
        <Modal show={!!selectedPhoto} onHide={closeModal} centered>
          {selectedPhoto && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedPhoto.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img src={selectedPhoto.src} alt={selectedPhoto.title} className="modal-photo" />
                <p>{selectedPhoto.description}</p>
              </Modal.Body>
            </>
          )}
        </Modal>
      </div>

      {/* Bottom navbar */}
      <BottomNavbar />
    </div>
  );
};

export default Gallery;


