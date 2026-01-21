# 📋 Quick Customization Checklist

Use this checklist to quickly customize your portfolio with your information.

## 🔧 Essential Updates (Do These First!)

### 1. Hero Section (`src/components/Hero.vue`)
- [ ] Line 39: Replace `Your Name` with your actual name
- [ ] Line 43: Update role/title if needed
- [ ] Line 47: Update tagline/description
- [ ] Line 8: Update CV download link
- [ ] Line 12: Update GitHub URL

### 2. Contact Information (`src/components/Contact.vue`)
- [ ] Line 14-37: Update all contact info (email, LinkedIn, GitHub, Play Store)
- [ ] Line 45: Configure Formspree - replace `YOUR_FORM_ID` with your actual form ID
  - Get it from: https://formspree.io (free account)

### 3. Footer (`src/components/Footer.vue`)
- [ ] Line 51: Update GitHub URL
- [ ] Line 60: Update LinkedIn URL
- [ ] Line 69: Update Twitter URL
- [ ] Line 96: Update email
- [ ] Line 106: Update Play Store URL
- [ ] Line 115: Update copyright name

### 4. Navbar (`src/components/Navbar.vue`)
- [ ] Already configured, but you can change the logo on line 21

---

## 📝 Content Updates

### 5. About Section (`src/components/About.vue`)
- [ ] Lines 2-7: Update statistics (years, projects, apps, clients)
- [ ] Lines 35-40: Update bio paragraphs with your story
- [ ] Lines 43-67: Customize "What I Do" list

### 6. Skills Section (`src/components/Skills.vue`)
- [ ] Lines 2-32: Update skill categories and levels
- [ ] Lines 36-47: Update technology badges
- [ ] Line 95: Update "Other Skills" list

### 7. Projects Section (`src/components/Projects.vue`)
- [ ] Lines 2-50: Replace with YOUR actual projects
  - Update titles, descriptions, technologies
  - Add real GitHub and Play Store links
  - Replace emoji icons with real screenshots (optional)

### 8. Experience Section (`src/components/Experience.vue`)
- [ ] Lines 2-48: Replace with YOUR work experience
  - Update companies, roles, dates
  - Update achievements for each position

---

## 🎨 Optional Customization

### 9. Colors & Theme (`tailwind.config.js`)
- [ ] Lines 10-20: Change primary color scheme if desired

### 10. Meta Tags (`index.html`)
- [ ] Line 6: Update page description
- [ ] Line 7: Update page title
- [ ] Add Open Graph tags for social sharing

### 11. Add Your Files
- [ ] Add your CV as `public/cv.pdf`
- [ ] Add your profile photo to `public/images/profile.jpg` (optional)
- [ ] Add project screenshots to `public/images/projects/` (optional)

---

## 🚀 Before Going Live

### Final Checks
- [ ] Test all external links (GitHub, LinkedIn, Play Store, etc.)
- [ ] Test contact form submission
- [ ] Test dark/light mode toggle
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Verify all personal information is correct
- [ ] Check for any placeholder text still remaining

---

## 📱 Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 🆘 Need Help?

Check `SETUP.md` for detailed instructions on:
- Contact form setup (Formspree/EmailJS)
- Deployment (Netlify/Vercel/GitHub Pages)
- Adding images and screenshots
- SEO optimization
- Troubleshooting

---

## ⚡ Priority Order

1. **Update contact info** (Hero, Contact, Footer)
2. **Configure contact form** (Formspree)
3. **Update About & Experience** (your story)
4. **Update Projects** (your work)
5. **Update Skills** (your expertise)
6. **Add CV file**
7. **Test everything**
8. **Deploy!**

---

Good luck! 🎉
