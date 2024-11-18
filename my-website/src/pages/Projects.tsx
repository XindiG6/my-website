import React from 'react';
import BottomNavbar from '../components/BottomNavbar'; // Ensure the path is correct
import './Publications.css';

const Publications: React.FC = () => {
  const publicationsList = [
    {
      title: "Optimizing Data I/O for LLM Datasets on Remote Storage",
      authors: (
        <>
          Tianle Zhong, Jiechen Zhao, <strong>Xindi Guo</strong>, Qiang Su, Geoffrey Fox.
        </>
      ),
      conference: "5th International Workshop on Cloud Intelligence / AIOps (AIOps '24), 2024.",
      link: "https://luosuu.github.io/assets/files/AIOps_24.pdf",
      codeLink: " ",
      label: "AIOps", // Label text
      image: "./images/paper1.jpg",
    },
    {
      title: "RINAS: Training with Dataset Shuffling Can Be General and Fast",
      authors: (
        <>
          Tianle Zhong, Jiechen Zhao, <strong>Xindi Guo</strong>, Qiang Su, Geoffrey Fox.
        </>
      ),
      conference: "arXiv preprint arXiv:2312.02368, 2023.",
      link: "https://arxiv.org/abs/2312.02368",
      codeLink: " ",
      label: "arXiv", // Label text
      image: "./images/paper2.jpg",
    },
  ];

  const projectsList = [
    {
      title: "Virtual Video Studio",
      description: "A software that connects the phone camera via Bluetooth to project people or objects into the virtual background, also can receive video streams through NDI SDK5 to achieve low-latency live streaming on ZOOM.",
      duration: "Sep 2020 - Jun 2021",
      link: "https://events.engineering.oregonstate.edu/expo2021/project/develop-virtual-video-studio",
      codeLink: "https://github.com/XindiG6/VirtualVideoStudio",
      label: "Capstone", // Label text
      image: "./images/project2.png",
    },
    {
      title: "BattleCasters",
      description: "An artillery and collectible card game where you use cards to cast spells and launch devastating attacks on your enemy. Players will be able to select from champions and craft powerful decks.",
      duration: "Mar 2021 - Aug 2021",
      link: "https://www.battlecasters.io/",
      codeLink: " ",
      label: "Game", // Label text
      image: "./images/project1.jpg",
    },
  ];

  return (
    <div>
      <div className="publications-container">
        <h1>Publications</h1>
        <div className="publications-list">
          {publicationsList.map((publication, index) => (
            <div key={index} className="publication-card">
              <div className="blue-label">{publication.label}</div>
              <img src={publication.image} alt={`${publication.title} image`} className="publication-image" />
              <div className="publication-details">
                <h3>{publication.title}</h3>
                <p><strong>Authors:</strong> {publication.authors}</p>
                <p>{publication.conference}</p>
                <a href={publication.link} target="_blank" rel="noopener noreferrer" className="button-link">View Publication</a>
                <a href={publication.codeLink} target="_blank" rel="noopener noreferrer" className="button-link">View Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects-list">
          {projectsList.map((project, index) => (
            <div key={index} className="project-card">
              <div className="blue-label">{project.label}</div>
              <img src={project.image} alt={`${project.title} image`} className="project-image" />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>{project.duration}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="button-link">View Project</a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="button-link">View Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom navbar */}
      <BottomNavbar />
    </div>
  );
};

export default Publications;
