# 🚀 DevOps Engineer Portfolio

A professional, fully responsive portfolio website built with **React** — designed for DevOps/Cloud engineers to showcase their skills, experience, certifications, and projects.

![Preview](./preview.png)

## ✨ Features

- ⚡ Built with React 18
- 🎨 Sleek dark theme with cyan/blue accents
- 📱 Fully responsive (mobile, tablet, desktop)
- 🖥️ Interactive terminal-style hero section
- 📋 Sections: Hero, About, Skills, Experience, Projects, Certifications, Contact
- 🔗 Contact form with mailto fallback
- ✅ Easy to customize — all data in one file

---

## 🏗️ Project Structure

```
devops-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Certifications.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── data/
│   │   └── portfolioData.js   ← 📝 EDIT THIS FILE
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/devops-portfolio.git
cd devops-portfolio

# Install dependencies
npm install

# Start dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ Customization

**All your personal info is in one place:**

```
src/data/portfolioData.js
```

Edit the following exports:
| Export | What to update |
|--------|----------------|
| `personal` | Name, title, email, phone, LinkedIn, GitHub, resume link |
| `skills` | Technology categories and tags |
| `experience` | Work history with company, role, period, description |
| `projects` | Project cards with GitHub/demo links |
| `certifications` | Cert name, issuer, date, credential ID |

---

## 📦 Build for Production

```bash
npm run build
```

Output is in the `build/` folder — ready to deploy to:
- **GitHub Pages** (see below)
- **Netlify** (drag & drop the build folder)
- **Vercel** (`vercel --prod`)
- **AWS S3 + CloudFront**

---

## 🌐 Deploy to GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/devops-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

---

## 📧 Contact Form Integration

The contact form uses `mailto:` by default. For a real backend, replace the `handleSubmit` function in `Contact.js` with:

- **[Formspree](https://formspree.io/)** — free, no backend needed
- **[EmailJS](https://www.emailjs.com/)** — client-side email sending
- **AWS SES + Lambda** — if you want the full DevOps stack 😄

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| lucide-react | Icons |
| Google Fonts | JetBrains Mono + Sora |
| CSS Variables | Theming |
| CSS Animations | Motion / transitions |

---

## 📄 License

MIT — free to use and modify.

---

> Built for DevOps engineers preparing for interviews. Good luck! 🎯
