# 📱 Android & Flutter Developer Portfolio

A **one-page responsive portfolio website** built with **Vue.js + Tailwind CSS** to showcase my professional journey as an Android Developer (5 years) with additional Flutter experience.  

This portfolio highlights my **skills, projects, and achievements**, and provides recruiters/clients with quick access to my GitHub, LinkedIn, and Play Store apps.  

---

## 🎯 Project Specifications

### ✅ Purpose
- Present myself as a **professional Android & Flutter Developer**.  
- Provide **quick access** to my projects, apps, and experience.  
- Build a **modern, responsive, and fast-loading** personal brand site.  

### ✅ Features
1. **Hero Section**  
   - Name, role, tagline.  
   - CTA buttons (*Download CV*, *GitHub*, *Contact*).  

2. **About Me**  
   - Short intro.  
   - Experience summary: *5 years Android, + Flutter development*.  

3. **Skills Section**  
   - Badges/icons for Android, Kotlin, Java, Flutter, Dart, Jetpack Compose, Firebase, REST APIs.  

4. **Projects Showcase**  
   - 3–5 featured apps/projects with title, description, screenshots.  
   - Links to GitHub repos or Google Play Store.  

5. **Experience Timeline**  
   - Roles, companies, years, and achievements.  

6. **Testimonials (Optional)**  
   - Quotes from colleagues/clients.  

7. **Contact Section**  
   - Email, LinkedIn, GitHub, Play Store, + contact form.  
   - Integrated with **Formspree / EmailJS**.  

8. **Dark/Light Mode**  
   - Theme toggle, stored in **localStorage**.  

9. **Responsive Design**  
   - Works on **desktop, tablet, mobile**.  

10. **Deployment**  
    - Hosted on **Netlify/Vercel** with CI/CD.  

---

## 🛠 Technical Details

### Tech Stack
- **Framework**: Vue.js 3 (Composition API)  
- **Styling**: Tailwind CSS  
- **Form Handling**: Formspree / EmailJS  
- **Deployment**: Netlify / Vercel  
- **Version Control**: Git + GitHub  

### Project Structure
```
portfolio/
│── public/           # Static assets
│── src/
│   ├── assets/       # Images, icons
│   ├── components/   # Vue components (Navbar, Footer, Cards, etc.)
│   ├── views/        # Sections (Hero, About, Skills, Projects, Contact)
│   ├── App.vue       # Root component
│   ├── main.js       # App entry point
│── tailwind.config.js
│── package.json
│── README.md
```
---

## 🧪 Test-Driven Development (TDD)

### Hero Section
- [ ] Should render **name, role, tagline**.  
- [ ] CTA buttons must link correctly (CV, GitHub, Contact).  

### About Me
- [ ] Should display developer bio.  
- [ ] Must highlight **Android & Flutter experience**.  

### Skills
- [ ] Should display at least **6 skills** with icons.  
- [ ] Skills badges must render consistently across devices.  

### Projects
- [ ] Each project card has **title, description, screenshot, link**.  
- [ ] GitHub/Play Store links must be **clickable**.  

### Experience Timeline
- [ ] Must render **chronological order**.  
- [ ] Each item has **role, company, duration**.  

### Contact Form
- [ ] Validates required fields (name, email, message).  
- [ ] On submit → sends message via Formspree/EmailJS.  
- [ ] Shows success/failure message.  

### Dark/Light Mode
- [ ] Toggle works and updates UI instantly.  
- [ ] Preference is stored in **localStorage**.  

### Responsive Design
- [ ] Website works on **mobile, tablet, desktop**.  

---

## 🚀 Getting Started

### Prerequisites
- Node.js (>=16.x)  
- npm or yarn  

### Installation
```bash
# Clone repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 🚀 Deployment
1. Push code to GitHub.  
2. Connect repo with **Netlify** or **Vercel**.  
3. Configure **custom domain**.  

---

## 📦 Future Enhancements
- Add **blog section** with articles about Android/Flutter.  
- Add **downloadable CV** (PDF).  
- Add **animations** using Framer Motion or Vue transitions.  
- Add **multilingual support** (English + native language).  

---

## 📬 Contact
- **Email**: yourname@email.com  
- **LinkedIn**: [linkedin.com/in/yourname](#)  
- **GitHub**: [github.com/yourusername](#)  
- **Play Store**: [play.google.com/yourapps](#)  

---
