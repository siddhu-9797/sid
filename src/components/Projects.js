import React from 'react';
import { FiExternalLink } from 'react-icons/fi'; // Import arrow icon

const ProjectCard = ({ title, description, features, link }) => (
  <div className="proj-card">
    <div className="proj-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="external-link">
          Visit Site <FiExternalLink className="arrow-icon" />
        </a>
      )}
    </div>
  </div>
);

export const Projects = () => (
  <section className="projects-section" id="projects">
    <div className="container">
      <h2>Projects</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Practice Papers"
          description="An interactive platform for students preparing for exams."
          features={[
            "Interactive quizzes and practice tests",
            "Progress tracking for students",
            "User-friendly interface",
            "Customizable question sets",
          ]}
          link="https://www.practicepapers.com"
        />
        <ProjectCard
          title="Exfiltrating Sensitive Data from Web Browsers"
          description="An ethical demonstration of cookies exfiltration and preventative measures."
          features={[
            "Demonstrated potential ways to steal authenticated user sessions",
            "Bypassed Data Protection API (DPAPI) to extract cookies in plain text format",
            "Showcased importance of secure coding practices",
          ]}
          link=""
        />
        {/* Add more ProjectCards here */}
      </div>
    </div>
  </section>
);
