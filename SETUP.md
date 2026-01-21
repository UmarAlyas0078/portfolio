# Portfolio Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📝 Customization Guide

### Personal Information

#### 1. Update Hero Section (`src/components/Hero.vue`)
- Replace `Your Name` with your actual name
- Update the tagline and description
- Update CV download link
- Update GitHub link

#### 2. Update About Section (`src/components/About.vue`)
- Modify the bio text
- Update statistics (years of experience, projects, etc.)
- Customize the "What I Do" list

#### 3. Update Skills (`src/components/Skills.vue`)
- Add/remove technologies in the `technologies` array
- Adjust skill levels in the `skills` array
- Modify skill categories as needed

#### 4. Update Projects (`src/components/Projects.vue`)
- Replace placeholder projects with your actual projects
- Add real GitHub and Play Store links
- Update project descriptions and technologies
- Replace emoji icons with actual screenshots (optional)

#### 5. Update Experience (`src/components/Experience.vue`)
- Replace with your actual work experience
- Update company names, roles, and dates
- Modify achievements for each role

#### 6. Update Contact Information (`src/components/Contact.vue`)
- Replace email, LinkedIn, GitHub, and Play Store links
- Configure Formspree or EmailJS for the contact form
  - Sign up at https://formspree.io or https://www.emailjs.com
  - Replace `YOUR_FORM_ID` in the form submission code

#### 7. Update Footer (`src/components/Footer.vue`)
- Update social media links
- Update contact information
- Modify location if needed

---

## 🎨 Theme Customization

### Colors
Edit `tailwind.config.js` to change the primary color scheme:

```javascript
colors: {
  primary: {
    // Modify these values
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

### Fonts
Add custom fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Your Font', 'sans-serif'],
    }
  }
}
```

---

## 📧 Contact Form Setup

### Option 1: Formspree (Recommended)
1. Go to https://formspree.io
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint
5. Update `src/components/Contact.vue`:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### Option 2: EmailJS
1. Go to https://www.emailjs.com
2. Sign up and create an email service
3. Create an email template
4. Install EmailJS: `npm install @emailjs/browser`
5. Update the contact form to use EmailJS

---

## 🖼️ Adding Real Images

### Project Screenshots
1. Add images to `public/images/projects/`
2. Update `src/components/Projects.vue`:
   ```javascript
   image: '/images/projects/your-project.png'
   ```

### Profile Picture
1. Add your photo to `public/images/`
2. Update `src/components/Hero.vue`:
   ```html
   <img src="/images/profile.jpg" alt="Your Name" class="w-32 h-32 rounded-full" />
   ```

---

## 🚀 Deployment

### Netlify
1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

### Vercel
1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [vue()],
   })
   ```
4. Run: `npm run deploy`

---

## 📱 Adding Your CV

1. Add your CV PDF to `public/cv.pdf`
2. The download button in Hero and Experience sections will work automatically

---

## ✅ Pre-Launch Checklist

- [ ] Update all personal information
- [ ] Replace placeholder links with real ones
- [ ] Configure contact form (Formspree/EmailJS)
- [ ] Add real project screenshots
- [ ] Add your CV PDF
- [ ] Test all links
- [ ] Test contact form
- [ ] Test dark/light mode
- [ ] Test on mobile devices
- [ ] Optimize images for web
- [ ] Update meta tags in `index.html`
- [ ] Add favicon
- [ ] Test in different browsers

---

## 🎯 SEO Optimization

### Update Meta Tags in `index.html`
```html
<meta name="description" content="Your custom description" />
<meta name="keywords" content="Android Developer, Flutter, Kotlin, Mobile Development" />
<meta property="og:title" content="Your Name - Android & Flutter Developer" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="/images/og-image.jpg" />
```

### Add Favicon
1. Generate favicon at https://favicon.io
2. Add files to `public/`
3. Update `index.html` with favicon links

---

## 🆘 Troubleshooting

### Development server won't start
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### Styles not loading
- Make sure Tailwind is properly configured
- Check that `src/style.css` is imported in `main.js`

### Dark mode not working
- Check browser console for errors
- Verify localStorage is enabled

---

## 📚 Resources

- [Vue.js Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Formspree Documentation](https://help.formspree.io/)

---

## 💡 Tips

1. **Performance**: Optimize images before adding them
2. **Accessibility**: Test with screen readers
3. **Mobile First**: Always test on mobile devices
4. **Analytics**: Add Google Analytics or similar
5. **Updates**: Keep dependencies updated regularly

---

Good luck with your portfolio! 🚀
