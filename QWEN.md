# Portfolio_Arbab_Khan - Project Context

## Directory Overview

This is a **personal portfolio repository** for Arbab Khan - a Software Engineering student and Full Stack Developer. The repository contains both professional documents and a complete animated portfolio website.

## Project Structure

```
Portfolio_Arbab_Khan/
├── portfolio/              # React-based animated portfolio website
│   ├── src/
│   │   ├── components/     # React components (Navbar, Hero, About, etc.)
│   │   ├── styles/         # Global CSS styles
│   │   ├── App.jsx         # Main application component
│   │   └── main.jsx        # Entry point
│   ├── public/             # Static assets (favicon, etc.)
│   ├── index.html          # HTML template
│   └── package.json        # Dependencies and scripts
├── Arbab Khan Job resume.docx  # Professional resume document
├── .gitattributes          # Git line ending configuration
└── QWEN.md                 # This file
```

## Portfolio Website

### Technologies Used
- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Custom styling with gradients and animations

### Features
- ✨ Animated hero section with typing effect
- 📱 Fully responsive design
- 🎨 Modern dark theme with gradient accents
- 📜 Smooth scroll animations
- 💼 Professional sections: About, Education, Experience, Skills, Projects, Contact
- 🎯 Interactive skill progress bars
- 📧 Contact form with validation
- ⬆️ Scroll-to-top button

### Building and Running

**Development:**
```bash
cd portfolio
npm run dev
```

**Production Build:**
```bash
cd portfolio
npm run build
npm run preview
```

**Install Dependencies:**
```bash
cd portfolio
npm install
```

### Sections Included

1. **Hero** - Introduction with animated typing effect for roles
2. **About** - Professional summary and stats
3. **Education** - Academic qualifications (SSUET, PIAIC)
4. **Experience** - Work history (Extreme Engineering, Organic Food & Spices)
5. **Skills** - Technical skills with animated progress bars
6. **Projects** - Portfolio projects (Resume Builder, E-Commerce)
7. **Contact** - Contact form and information

## Key Files

| File | Description |
|------|-------------|
| `portfolio/src/App.jsx` | Main application with all sections |
| `portfolio/src/components/` | Individual section components |
| `portfolio/src/styles/global.css` | Global styles and CSS variables |
| `Arbab Khan Job resume.docx` | Professional resume document |

## Profile Summary

**Arbab Khan**
- 🎓 B.S. Software Engineering at SSUET (Expected 2026)
- 🤖 Diploma in General Artificial Intelligence from PIAIC (Expected 2026)
- 💼 1+ years professional experience
- 🛠️ Skills: TypeScript, JavaScript, Python, Next.js, React, AI technologies
- 📧 arbabkhan4165@gmail.com
- 📱 03462485760
- 📍 Karachi, Pakistan

## Usage

### For Employers/Collaborators
1. **View Portfolio**: Run `npm run dev` in the `portfolio` directory and open the local URL
2. **View Resume**: Open `Arbab Khan Job resume.docx` in any Word processor

### For Deployment
The portfolio can be deployed to:
- Vercel (recommended for React/Vite)
- Netlify
- GitHub Pages
- Any static hosting service

## Notes

- The portfolio uses a dark theme optimized for readability
- All animations are built with Framer Motion for smooth performance
- The design is fully responsive for mobile, tablet, and desktop
- Contact form currently logs to console (can be connected to a backend service)
