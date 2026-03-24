import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, replace with your API / EmailJS / Formspree endpoint
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contactItems = [
    { icon: <Mail size={18} />, label: 'Email', value: 'rahulp2321@gmail.com', href: `mailto:${personal.email}` },
    { icon: <Phone size={18} />, label: 'Phone', value: '8796685268', href: `tel:${personal.phone}` },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Kolhapur', href: null },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'https://www.linkedin.com/in/rahul-patil-b782332a8', href: personal.linkedin },
    { icon: <Github size={18} />, label: 'GitHub', value: 'https://github.com/rahulp2321', href: personal.github },
  ];

  return (
    <section id="contact" className="section" style={{ background: 'rgba(10, 22, 40, 0.4)' }}>
      <div className="container">
        <span className="section-subtitle">// let's connect</span>
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <div className="section-divider" />

        <div className="contact-grid">
          <div className="contact-info">
            {contactItems.map((item, i) => (
              item.href ? (
                <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="contact-item">
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </a>
              ) : (
                <div key={i} className="contact-item" style={{ cursor: 'default' }}>
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">{item.value}</div>
                  </div>
                </div>
              )
            ))}
          </div>

          <div className="contact-form">
            <h3 className="form-title">Send a Message</h3>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  className="form-input"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>
              <button
                className="form-submit"
                onClick={handleSubmit}
                type="button"
              >
                <Send size={16} /> Send Message
              </button>
              {submitted && (
                <div className="form-success">
                  <CheckCircle size={16} /> Message sent! I'll get back to you soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
