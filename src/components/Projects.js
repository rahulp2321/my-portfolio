import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: 'rgba(10, 22, 40, 0.4)' }}>
      <div className="container">
        <span className="section-subtitle">// what i've built</span>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="section-divider" />

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <div className="project-header">
                <span className="project-icon">{project.icon}</span>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link" title="GitHub">
                      <Github size={15} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="project-link" title="Live Demo">
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-stack">
                {project.stack.map((s, j) => (
                  <span className="stack-tag" key={j}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
