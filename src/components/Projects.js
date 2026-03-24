import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'Full-stack e-commerce app with product management, cart, payments via Razorpay, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Razorpay'],
    category: 'Full Stack',
    github: 'https://github.com/yourusername/ecommerce',
    live: 'https://your-ecommerce.vercel.app',
    featured: true,
    icon: '🛒',
  },
  {
    title: 'Task Management App',
    desc: 'A Kanban-style task tracker with drag-and-drop, real-time sync, and team collaboration features.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    category: 'Frontend',
    github: 'https://github.com/yourusername/taskmanager',
    live: 'https://tasks.yourdomain.com',
    featured: true,
    icon: '📋',
  },
  {
    title: 'REST API — Blog Platform',
    desc: 'RESTful API with JWT auth, CRUD for posts/comments, rate limiting, and full API documentation.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    category: 'Backend',
    github: 'https://github.com/yourusername/blog-api',
    live: null,
    featured: true,
    icon: '⚡',
  },
  {
    title: 'Portfolio Website',
    desc: 'This very portfolio — built with React, featuring animated sections, dark theme, and responsive design.',
    tags: ['React', 'CSS3'],
    category: 'Frontend',
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://yourportfolio.com',
    featured: false,
    icon: '🎨',
  },
  {
    title: 'Weather Dashboard',
    desc: 'Real-time weather app with 7-day forecast, location search, and interactive charts using OpenWeatherMap API.',
    tags: ['React', 'Chart.js', 'OpenWeatherMap API'],
    category: 'Frontend',
    github: 'https://github.com/yourusername/weather',
    live: 'https://weather.yourdomain.com',
    featured: false,
    icon: '🌤️',
  },
  {
    title: 'Chat Application',
    desc: 'Real-time group chat with socket.io, user rooms, message history, and online presence indicators.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com/yourusername/chat',
    live: null,
    featured: false,
    icon: '💬',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="projects container">
      <p className="section-label">Projects</p>
      <h2 className="section-title">What I've Built</h2>
      <p className="section-desc">
        A selection of projects I've worked on — from full-stack applications to open source contributions.
      </p>

      <div className="project-filters">
        {categories.map(c => (
          <button
            key={c}
            className={`filter-btn ${filter === c ? 'active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((p, i) => (
          <div
            key={p.title}
            className={`project-card ${p.featured ? 'featured' : ''}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {p.featured && <div className="featured-badge">Featured</div>}
            <div className="project-icon">{p.icon}</div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
            </div>
            <div className="project-links">
              <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                <GitHubIcon /> Code
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="proj-link live">
                  Live ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="projects-more">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
          style={{ display:'inline-flex', alignItems:'center', gap:8 }}
        >
          <GitHubIcon /> View all on GitHub
        </a>
      </div>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
