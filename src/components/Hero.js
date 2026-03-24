import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      {/* Background orbs */}
      <div className="hero-bg-orb hero-bg-orb-1" />
      <div className="hero-bg-orb hero-bg-orb-2" />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '60px', alignItems: 'center' }}>

          {/* Left: Text content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot" />
              {personal.available ? 'Available for opportunities' : 'Currently employed'}
            </div>

            <h1 className="hero-name">
              Hi, I'm<br />
              <span className="highlight">{personal.name}</span>
            </h1>

            <div className="hero-title-line">
              <span>{personal.title}</span>
              <span className="separator">//</span>
              <span>{personal.tagline}</span>
            </div>

            <p className="hero-description">{personal.description}</p>

            <div className="hero-cta">
              <a href="#contact" className="btn-primary" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}>
                Get In Touch <ArrowRight size={16} />
              </a>
              <a href={personal.resume} className="btn-secondary" download>
                <Download size={16} /> Resume
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">{personal.yearsExperience}+</span>
                <span className="hero-stat-label">Years Exp.</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">{personal.projectsDelivered}+</span>
                <span className="hero-stat-label">Projects</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">{personal.certifications}</span>
                <span className="hero-stat-label">Certs</span>
              </div>
            </div>
          </div>

          {/* Right: Terminal window */}
          <div className="hero-terminal">
            <div className="terminal-window">
              <div className="terminal-titlebar">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-title">bash — rahul@devops-machine</span>
              </div>
              <div className="terminal-body">
                <TermLine prompt="$" cmd="cat profile.json" />
                <TermLine output='{"name": "Rahul Patil",' />
                <TermLine output=' "role": "DevOps Engineer",' />
                <TermLine output=' "location": "Kolhapur, India",' />
                <TermLine output=' "experience": "10+ years",' />
                <TermLine output='   "AWS", "Kubernetes",' />
                <TermLine output='   "CI/CD"' />
                <TermLine output=' ]}' />
                <TermLine prompt="$" cmd="" isActive />	
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function TermLine({ prompt, cmd, output, isActive }) {
  if (output !== undefined) {
    return (
      <div className="terminal-line">
        <span className="output">{output}</span>
      </div>
    );
  }
  return (
    <div className="terminal-line">
      {prompt && <span className="prompt-symbol">{prompt}</span>}
      {cmd && <span className="cmd">{cmd}</span>}
      {isActive && <span style={{ display: 'inline-block', width: 8, height: 16, background: 'var(--accent-cyan)', animation: 'blink 1s infinite', verticalAlign: 'middle', marginLeft: 4 }} />}
    </div>
  );
}
