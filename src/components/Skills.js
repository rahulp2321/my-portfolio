import React from 'react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'rgba(10, 22, 40, 0.4)' }}>
      <div className="container">
        <span className="section-subtitle"></span>
        <h2 className="section-title">Tech <span>Stack</span></h2>
        <div className="section-divider" />

        <div className="skills-grid">
          {skills.map((category, i) => (
            <div className="skill-category-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="skill-category-icon">{category.icon}</div>
              <div className="skill-category-title">{category.title}</div>
              <div className="skill-tags">
                {category.tags.map((tag, j) => (
                  <span className="skill-tag" key={j}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
