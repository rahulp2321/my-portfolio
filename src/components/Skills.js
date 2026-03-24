import React, { useState } from 'react';
import './Skills.css';

const skillsData = {
  Frontend: [
    { name: 'React.js',    level: 90, color: '#61dafb' },
    { name: 'JavaScript',  level: 88, color: '#f7df1e' },
    { name: 'HTML/CSS',    level: 92, color: '#e34c26' },
    { name: 'TypeScript',  level: 75, color: '#3178c6' },
    { name: 'Tailwind CSS',level: 82, color: '#38bdf8' },
  ],
  Backend: [
    { name: 'Node.js',     level: 85, color: '#68a063' },
    { name: 'Express.js',  level: 82, color: '#ffffff' },
    { name: 'Python',      level: 78, color: '#3776ab' },
    { name: 'REST APIs',   level: 88, color: '#ff6b35' },
    { name: 'GraphQL',     level: 65, color: '#e10098' },
  ],
  Database: [
    { name: 'MongoDB',     level: 80, color: '#4ea94b' },
    { name: 'MySQL',       level: 78, color: '#4479a1' },
    { name: 'PostgreSQL',  level: 70, color: '#336791' },
    { name: 'Firebase',    level: 75, color: '#ffca28' },
    { name: 'Redis',       level: 60, color: '#dc382d' },
  ],
  Tools: [
    { name: 'Git/GitHub',  level: 90, color: '#f05032' },
    { name: 'Docker',      level: 65, color: '#0db7ed' },
    { name: 'AWS',         level: 60, color: '#ff9900' },
    { name: 'Figma',       level: 72, color: '#f24e1e' },
    { name: 'Linux',       level: 70, color: '#fcc624' },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Frontend');

  return (
    <div className="skills container">
      <p className="section-label">Technical Skills</p>
      <h2 className="section-title">My Toolkit</h2>
      <p className="section-desc">
        Technologies and tools I work with daily to bring ideas to life.
      </p>

      <div className="skills-tabs">
        {Object.keys(skillsData).map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {skillsData[activeTab].map((skill, i) => (
          <div className="skill-card" key={skill.name} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-pct">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ '--w': skill.level + '%', '--color': skill.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="tech-badges">
        {Object.values(skillsData).flat().map(s => (
          <span key={s.name} className="tech-badge">{s.name}</span>
        ))}
      </div>
    </div>
  );
}
