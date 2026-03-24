import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.setProperty('--x', e.clientX + 'px');
        cursorRef.current.style.setProperty('--y', e.clientY + 'px');
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="hero" ref={cursorRef}>
      <div className="hero-glow" />
      <div className="hero-grid" />

      <div className="hero-content container">
        <div className="hero-badge fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-heading fade-up" style={{ animationDelay: '0.2s' }}>
          Hi, I'm <span className="highlight">Your Name</span>
          <br />
          <span className="hero-role">Full Stack Developer</span>
        </h1>

        <p className="hero-sub fade-up" style={{ animationDelay: '0.35s' }}>
          I build fast, scalable, and beautiful digital experiences.
          Passionate about clean code, great UX, and solving real-world problems.
        </p>

        <div className="hero-cta fade-up" style={{ animationDelay: '0.5s' }}>
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View Projects
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('contact')}>
            Get In Touch
          </button>
        </div>

        <div className="hero-socials fade-up" style={{ animationDelay: '0.65s' }}>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="social-link">
            <GitHubIcon /> GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="social-link">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="mailto:your@email.com" className="social-link">
            <EmailIcon /> Email
          </a>
        </div>
      </div>

      <div className="hero-stats fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="stat-item">
          <span className="stat-num">2+</span>
          <span className="stat-label">Years Exp.</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-num">15+</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-num">10+</span>
          <span className="stat-label">Technologies</span>
        </div>
      </div>

      <div className="scroll-hint fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Scroll</span>
      </div>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m2 7 10 7 10-7"/>
    </svg>
  );
}
