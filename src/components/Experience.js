import React from 'react';
import './Experience.css';

const experience = [
  {
    type: 'work',
    role: 'Junior Full Stack Developer',
    org: 'Tech Company Pvt. Ltd.',
    location: 'Pune, India',
    period: 'Jan 2024 – Present',
    desc: 'Building and maintaining React-based web applications. Developed REST APIs using Node.js and Express. Collaborated in an agile team of 8 developers.',
    points: [
      'Reduced page load time by 40% through code splitting and lazy loading',
      'Implemented CI/CD pipeline using GitHub Actions',
      'Mentored 2 junior interns on React best practices',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
    current: true,
  },
  {
    type: 'work',
    role: 'Frontend Developer Intern',
    org: 'Startup Name',
    location: 'Remote',
    period: 'Jul 2023 – Dec 2023',
    desc: 'Worked on the company's main product dashboard. Translated Figma designs into pixel-perfect React components.',
    points: [
      'Built reusable component library used across 3 products',
      'Integrated third-party APIs for analytics and notifications',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    current: false,
  },
  {
    type: 'education',
    role: 'B.E. Computer Engineering',
    org: 'Your University / College Name',
    location: 'Your City, Maharashtra',
    period: '2020 – 2024',
    desc: 'Graduated with 8.5 CGPA. Coursework in Data Structures, Algorithms, DBMS, OS, and Web Technologies.',
    points: [
      'Final year project: AI-powered Resume Screening System (92% accuracy)',
      'Hackathon winner — Smart India Hackathon 2023',
    ],
    tech: ['C++', 'Python', 'Java', 'SQL'],
    current: false,
  },
];

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024' },
  { name: 'React — The Complete Guide', issuer: 'Udemy', year: '2023' },
  { name: 'Meta Front-End Developer Certificate', issuer: 'Coursera / Meta', year: '2023' },
  { name: 'Node.js, Express, MongoDB Bootcamp', issuer: 'Udemy', year: '2023' },
];

export default function Experience() {
  return (
    <div className="experience container">
      <p className="section-label">Background</p>
      <h2 className="section-title">Experience &amp; Education</h2>
      <p className="section-desc">
        My professional journey, internships, education, and certifications.
      </p>

      <div className="timeline">
        {experience.map((item, i) => (
          <div key={i} className={`timeline-item ${item.type}`}>
            <div className="timeline-marker">
              <div className={`marker-dot ${item.current ? 'current' : ''}`} />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{item.role}</h3>
                  <div className="timeline-meta">
                    <span className="timeline-org">{item.org}</span>
                    <span className="meta-sep">·</span>
                    <span className="timeline-loc">{item.location}</span>
                  </div>
                </div>
                <div className="timeline-right">
                  <span className={`timeline-period ${item.current ? 'current' : ''}`}>{item.period}</span>
                  <span className={`type-badge ${item.type}`}>{item.type === 'work' ? '💼 Work' : '🎓 Education'}</span>
                </div>
              </div>
              <p className="timeline-desc">{item.desc}</p>
              <ul className="timeline-points">
                {item.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
              <div className="timeline-tech">
                {item.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="certs-section">
        <h3 className="certs-title">Certifications</h3>
        <div className="certs-grid">
          {certifications.map((c, i) => (
            <div key={i} className="cert-card">
              <span className="cert-icon">🏆</span>
              <div>
                <strong>{c.name}</strong>
                <span>{c.issuer} · {c.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
