import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-text">
            <span>© {year}</span> {personal.name} — Built with <span>React</span> &amp; ❤️
          </div>
          <div className="footer-socials">
            <a href={personal.github} target="_blank" rel="noreferrer" className="footer-social-link" title="https://github.com/rahulp2321">
              <Github size={16} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="footer-social-link" title="https://www.linkedin.com/in/rahul-patil-b782332a8">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${personal.email}`} className="footer-social-link" title="rahulp2321@gmail.com">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
