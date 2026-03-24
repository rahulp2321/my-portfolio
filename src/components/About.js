import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about container">
      <div className="about-grid">
        <div className="about-left">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Crafting digital<br />experiences with care</h2>
          <p className="about-para">
            I'm a passionate Full Stack Developer based in <strong>Your City, India</strong>.
            I specialize in building modern web applications using React, Node.js, and cloud technologies.
          </p>
          <p className="about-para">
            When I'm not coding, I enjoy contributing to open source, writing technical blogs,
            and exploring the intersection of design and engineering. I'm always eager to learn
            new technologies and take on challenging projects.
          </p>

          <div className="about-info">
            <div className="info-row">
              <span className="info-label">Name</span>
              <span className="info-val">Your Full Name</span>
            </div>
            <div className="info-row">
              <span className="info-label">Location</span>
              <span className="info-val">Your City, Maharashtra, India</span>
            </div>
            <div className="info-row">
              <span className="info-label">Email</span>
              <span className="info-val"><a href="mailto:your@email.com">your@email.com</a></span>
            </div>
            <div className="info-row">
              <span className="info-label">Degree</span>
              <span className="info-val">B.E. / B.Tech Computer Science</span>
            </div>
            <div className="info-row">
              <span className="info-label">Availability</span>
              <span className="info-val available">
                <span className="avail-dot" />
                Open to Work
              </span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="avatar-card">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <span className="avatar-initials">YN</span>
              </div>
            </div>
            <div className="avatar-glow" />
          </div>

          <div className="about-cards">
            <div className="about-card">
              <span className="card-icon">🚀</span>
              <div>
                <strong>Fast Learner</strong>
                <p>Always keeping up with the latest technologies and best practices.</p>
              </div>
            </div>
            <div className="about-card">
              <span className="card-icon">🎯</span>
              <div>
                <strong>Problem Solver</strong>
                <p>Love tackling complex challenges and finding elegant solutions.</p>
              </div>
            </div>
            <div className="about-card">
              <span className="card-icon">🤝</span>
              <div>
                <strong>Team Player</strong>
                <p>Thrive in collaborative environments with agile methodologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
