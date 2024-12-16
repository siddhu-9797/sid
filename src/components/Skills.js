import React, { useEffect, useState } from 'react';
import colorSharp from "../assets/img/footer-bg.png";
import collegeLogo from "../assets/img/cmu.jpg"; // Example logo
import companyLogo from "../assets/img/providence.svg"; // Example logo

export const Skills = () => {
  const workExperience = [
    { 
      date: "2022-2024", 
      title: "Senior Cybersecurity Engineer", 
      description: "Providence St. Joseph Healthcare, India. Managed Rapid7 InsightVM, identified 100+ vulnerabilities, and led secure development practices.",
      logo: companyLogo
    },
    { 
      date: "August 2021 - October 2021", 
      title: "Application Security Intern", 
      description: "Samsung R&D, India. Conducted penetration tests, improved application security, and collaborated on threat mitigation strategies.",
      logo: companyLogo
    }
  ];

  const education = [
    { 
      date: "2024-2026", 
      title: "Master of Science in Information Security", 
      description: "Carnegie Mellon University. Focused on advanced cybersecurity techniques and full-stack development.",
      logo: collegeLogo
    },
    { 
      date: "2018-2022", 
      title: "Bachelor of Technology in Computer Science & Engineering", 
      description: "K L University, India. Gained expertise in application development, cryptography, and secure coding.",
      logo: collegeLogo
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skills-timeline">
              <h2>Skills & Background</h2>
              <p>A detailed timeline of my work experience and education background.</p>
              
              <div className="timeline-container">
                {/* Work Experience (Left Side) */}
                <div className="timeline-side left">
                  {workExperience.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-point"></div>
                      <div className="timeline-content">
                          {/* <img src={item.logo} alt={`${item.title} logo`} className="timeline-logo" /> */}
                        <span className="timeline-date">{item.date}</span>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Vertical Timeline Bar */}
                <div className="timeline-bar"></div>

                {/* Education (Right Side) */}
                <div className="timeline-side right">
                  {education.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-point"></div>
                      <div className="timeline-content">
                        {/* <img src={item.logo} alt={`${item.title} logo`} className="timeline-logo" /> */}
                        <span className="timeline-date">{item.date}</span>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
