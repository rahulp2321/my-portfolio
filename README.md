# 🚀 Personal Portfolio — React

A professional, fully responsive portfolio website built with React. Designed for developers to showcase their skills, projects, experience, and contact info — perfect for interviews and job applications.

---

## ✨ Features

- **Hero** — Animated intro with name, role, CTA buttons, social links, and stats
- **About** — Personal bio, quick info table, traits cards
- **Skills** — Tabbed skill bars for Frontend / Backend / Database / Tools
- **Projects** — Filterable project cards with GitHub & Live links
- **Experience** — Vertical timeline for work history, education, and certifications
- **Contact** — Contact form (plug in EmailJS / Formspree) + contact details
- **Responsive** — Mobile-first, works on all screen sizes
- **Dark theme** — Deep space aesthetic with accent glow effects

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Hero.js / Hero.css
│   │   ├── About.js / About.css
│   │   ├── Skills.js / Skills.css
│   │   ├── Projects.js / Projects.css
│   │   ├── Experience.js / Experience.css
│   │   ├── Contact.js / Contact.css
│   │   └── Footer.js / Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

---

## 🛠️ Setup & Run Locally

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ Customization — Update Your Details

Edit these files with your personal information:

| File | What to update |
|------|---------------|
| `src/components/Hero.js` | Name, role, tagline, social links |
| `src/components/About.js` | Bio, city, email, degree, traits |
| `src/components/Skills.js` | Skill names and levels (0–100) |
| `src/components/Projects.js` | Project title, desc, tags, GitHub/live URLs |
| `src/components/Experience.js` | Jobs, education, certifications |
| `src/components/Contact.js` | Email, LinkedIn, GitHub, location |
| `src/components/Footer.js` | Social links |
| `public/index.html` | Page title and meta description |
| `public/resume.pdf` | Add your actual resume PDF |

---

## 📧 Contact Form Setup

The form is ready — just plug in a free email service:

### Option A: Formspree (easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy your Form ID
3. In `Contact.js`, uncomment and update:
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

### Option B: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Follow their React integration guide

---

## 🌐 Deployment

### Vercel (Recommended — Free)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the `build/` folder to netlify.com/drop
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
Then run:
```bash
npm run deploy
```

---

## 🔀 Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit — portfolio website"

# Create a new repo on github.com, then:
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

---

## 📦 Build for Production

```bash
npm run build
```
Generates an optimized production build in the `build/` folder.

---

## 📄 License

MIT — feel free to use and customize for your own portfolio.

---

> Built with React · Dark Theme · Fully Responsive
