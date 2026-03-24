import React, { useState } from 'react';
import './Navbar.css';

const links = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact' },
];

export default function Navbar({ active, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => scrollTo('home')}>
          <span className="logo-bracket">&lt;</span>
          YN
          <span className="logo-bracket">/&gt;</span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.id}>
              <button
                className={`nav-link ${active === l.id ? 'active' : ''}`}
                onClick={() => scrollTo(l.id)}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="nav-resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume ↗
            </a>
          </li>
        </ul>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
