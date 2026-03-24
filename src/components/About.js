import React from 'react';
import { personal } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <span className="section-subtitle">//</span>
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="section-divider" />

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm <strong style={{ color: 'var(--accent-blue)' }}>Rahul Patil</strong>, a DevOps Engineer based in Kolhapur with <strong style={{ color: 'var(--accent-blue)' }}>10+ years</strong> of hands-on experience designing and maintaining production infrastructure. I specialize in AWS, Kubernetes, and end-to-end CI/CD automation.
            </p>
            <p>
              My approach: I help organizations streamline build, release, and deployment pipelines by implementing scalable DevOps practices, Docker-based container strategies, and Kubernetes orchestration.
            </p>

            <div className="about-highlights">
              {[
                'Expertise in Azure DevOps (On-Prem & Cloud)',
                'CI/CD pipeline design (Classic & YAML)',
                'Docker & Kubernetes deployment automation',
                '.NET 6 / .NET 8 application build & release pipelines',
                'NuGet package management & artifact automation',
				'Infrastructure as Code & environment standardization',
				'Git branching strategy (Dev / Feature / Release automation)'

              ].map((item, i) => (
                <div className="about-highlight-item" key={i}>
                  <span className="icon-dot" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="about-card">
              <div className="about-info-grid">
                <InfoItem label="Name" value={personal.name} />
                <InfoItem label="Title" value={personal.title} />
                <InfoItem label="Location" value={personal.location} />
                <InfoItem label="Experience" value={`${personal.yearsExperience}+ Years`} />
                <InfoItem label="Email" value={personal.email} isLink={`mailto:${personal.email}`} />
                <InfoItem label="Phone" value={personal.phone} isLink={`tel:${personal.phone}`} />
                <InfoItem label="LinkedIn" value="in/rahulpatil-devops" isLink={personal.linkedin} />
                <InfoItem label="GitHub" value="rahulpatil-devops" isLink={personal.github} />
              </div>

              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <a href={personal.resume} download className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ label, value, isLink }) {
  return (
    <div className="about-info-item">
      <label>{label}</label>
      <span>
        {isLink ? <a href={isLink} target="_blank" rel="noreferrer">{value}</a> : value}
      </span>
    </div>
  );
}
