import React from 'react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <span className="section-subtitle">// my credentials</span>
        <h2 className="section-title">Certifi<span>cations</span></h2>
        <div className="section-divider" />

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <div className="cert-card" key={i}>
              <span className="cert-icon">{cert.icon}</span>
              <div className="cert-info">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-date">Issued: {cert.date}</div>
                {cert.credentialId && (
                  <div className="cert-badge">
                    <span>✓</span> ID: {cert.credentialId}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
