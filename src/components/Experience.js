import React from 'react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <span className="section-subtitle">// where i've worked</span>
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="section-divider" />

        <div className="timeline">
          {experience.map((job, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <span className="timeline-role">{job.role}</span>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <div className="timeline-company">{job.company}</div>
                <p className="timeline-desc">{job.description}</p>
                <div className="timeline-tech-tags">
                  {job.tech.map((t, j) => (
                    <span className="tech-tag" key={j}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
