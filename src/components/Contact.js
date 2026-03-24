import React, { useState } from 'react';
import './Contact.css';

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'your@email.com',
    link: 'mailto:your@email.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourusername',
    link: 'https://linkedin.com/in/yourusername',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/yourusername',
    link: 'https://github.com/yourusername',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Nagpur, Maharashtra, India',
    link: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // ── Replace this with your preferred email service ──
    // Options: EmailJS, Formspree, Netlify Forms, or your own API
    // Example with Formspree:
    // const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // });
    // if (res.ok) setStatus('success'); else setStatus('error');

    // Simulated response for demo:
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact container">
      <p className="section-label">Get In Touch</p>
      <h2 className="section-title">Let's Work Together</h2>
      <p className="section-desc">
        I'm currently open to new opportunities. Whether you have a project, a question,
        or just want to say hi — my inbox is always open!
      </p>

      <div className="contact-grid">
        {/* Left — Info */}
        <div className="contact-left">
          <div className="contact-cards">
            {contactInfo.map((item) => (
              <div key={item.label} className="contact-card">
                <span className="contact-icon">{item.icon}</span>
                <div className="contact-detail">
                  <span className="contact-label">{item.label}</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer" className="contact-value link">
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="availability-box">
            <div className="avail-header">
              <span className="avail-pulse" />
              <strong>Currently Available</strong>
            </div>
            <p>Open to full-time roles, freelance projects, and internship opportunities.</p>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="download-btn">
              ↓ Download Resume
            </a>
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Job Opportunity / Project Collaboration"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`submit-btn ${status === 'sending' ? 'loading' : ''}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <><span className="spinner" /> Sending...</>
              ) : status === 'success' ? (
                <>✓ Message Sent!</>
              ) : (
                <>Send Message →</>
              )}
            </button>

            {status === 'success' && (
              <p className="form-success">
                🎉 Thanks for reaching out! I'll get back to you within 24 hours.
              </p>
            )}
            {status === 'error' && (
              <p className="form-error">
                Something went wrong. Please try emailing me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
