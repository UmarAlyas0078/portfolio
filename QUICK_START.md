# ⚡ Quick Start Guide

## 🚀 Get Your Portfolio Running in 3 Steps

### Step 1: Start the Development Server
The dependencies are already installed! Just run:
```bash
npm run dev
```

Your portfolio will be available at: **http://localhost:5173**

### Step 2: Customize Your Information
Open these files and update with YOUR information:

#### **Must Update:**
1. `src/components/Hero.vue` - Your name and links
2. `src/components/Contact.vue` - Your email and social links
3. `src/components/Footer.vue` - Your contact info

#### **Should Update:**
4. `src/components/About.vue` - Your bio and stats
5. `src/components/Experience.vue` - Your work history
6. `src/components/Projects.vue` - Your projects
7. `src/components/Skills.vue` - Your skills

### Step 3: Setup Contact Form
1. Go to https://formspree.io
2. Sign up (free)
3. Create a new form
4. Copy your form ID
5. Update line 45 in `src/components/Contact.vue`:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

---

## 🎨 What You Have

✅ **Hero Section** - Landing page with CTA buttons  
✅ **About Section** - Bio and statistics  
✅ **Skills Section** - Technology badges and progress bars  
✅ **Projects Section** - Showcase your work  
✅ **Experience Section** - Timeline of your career  
✅ **Contact Section** - Form and social links  
✅ **Dark/Light Mode** - Theme toggle  
✅ **Fully Responsive** - Works on all devices  

---

## 📝 Important Files to Add

1. **Your CV**: Add `public/cv.pdf` (for download button)
2. **Your Photo**: Add `public/images/profile.jpg` (optional)
3. **Project Screenshots**: Add to `public/images/projects/` (optional)

---

## 🚀 Deploy When Ready

### Netlify (Recommended - Easiest)
1. Push code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Select your repo
5. Build: `npm run build`
6. Publish: `dist`
7. Deploy!

### Vercel
1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Deploy (auto-configured)

---

## 📚 Need More Help?

- **CUSTOMIZATION_CHECKLIST.md** - Quick reference for updates
- **SETUP.md** - Detailed setup instructions
- **PROJECT_SUMMARY.md** - Complete project overview

---

## 🎯 Priority Tasks

1. ✅ Dependencies installed
2. ⏳ Start dev server (`npm run dev`)
3. ⏳ Update personal info
4. ⏳ Setup contact form
5. ⏳ Add your CV
6. ⏳ Test everything
7. ⏳ Deploy!

---

**You're ready to go! Start the dev server and see your portfolio come to life! 🎉**
