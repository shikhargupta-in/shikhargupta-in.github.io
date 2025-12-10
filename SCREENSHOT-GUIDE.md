# 📸 Screenshot Guide - How to Capture Your Portfolio

Follow this guide to take professional screenshots of your updated portfolio for the README and social media.

## 🖥️ Tools Needed

### Option 1: Browser Built-in (Recommended)
- **Chrome/Edge**: DevTools full-page screenshot
- **Firefox**: Built-in screenshot tool
- **Safari**: Command+Shift+4

### Option 2: Third-Party Tools
- **macOS**: CleanShot X, Snagit
- **Windows**: Snipping Tool, ShareX
- **Cross-platform**: Awesome Screenshot (browser extension)

---

## 📐 Screenshot Specifications

### Desktop Screenshots
- **Resolution**: 1920x1080 (Full HD)
- **Format**: PNG (for quality)
- **File Size**: Keep under 500KB (use compression if needed)

### Mobile Screenshots
- **Resolution**: 375x812 (iPhone X/11/12)
- **Format**: PNG
- **File Size**: Keep under 300KB

---

## 📷 What to Capture

### 1. Hero Section (Desktop)
**Filename**: `hero-desktop.png`

**How to capture**:
1. Open your portfolio in Chrome
2. Set browser width to 1920px
3. Scroll to top
4. Open DevTools (F12)
5. Toggle device toolbar (Ctrl+Shift+M)
6. Select "Responsive" and set to 1920x1080
7. Click "Capture screenshot" button in DevTools

**What to show**:
- Your name and tagline
- Typing animation (if possible)
- Social media icons
- LeetCode button
- Full hero gradient background

---

### 2. Projects Section (Desktop)
**Filename**: `projects-desktop.png`

**What to show**:
- At least 3 project cards
- Tech stack tags visible
- "Live Demo" and "View Code" buttons
- Hover effect on one card (if possible)

**Pro tip**: Use Chrome extension "GoFullPage" to capture full section

---

### 3. Skills Section (Desktop)
**Filename**: `skills-desktop.png`

**What to show**:
- All skill bars
- Percentage indicators
- Skill icons
- Section title

---

### 4. Contact Form (Desktop)
**Filename**: `contact-desktop.png`

**What to show**:
- Complete contact form
- All form fields
- Contact methods sidebar
- "Follow on Medium" button

---

### 5. Mobile Hero (Phone View)
**Filename**: `hero-mobile.png`

**How to capture**:
1. Open Chrome DevTools
2. Toggle device toolbar
3. Select "iPhone 12 Pro" (390 x 844)
4. Capture screenshot

**What to show**:
- Hamburger menu (if applicable)
- Your name
- Tagline
- Hero section on mobile

---

### 6. Mobile Navigation
**Filename**: `nav-mobile.png`

**What to show**:
- Full sidebar on mobile
- All navigation items
- Social icons
- Your profile picture

---

### 7. Testimonials Section
**Filename**: `testimonials-desktop.png`

**What to show**:
- All 3 testimonial cards
- Quote icons
- Names and titles
- Section title

---

### 8. Blog Section
**Filename**: `blog-desktop.png`

**What to show**:
- All 3 blog cards
- "Coming Soon" badges
- Tech tags
- "Follow on Medium" button

---

## 🎨 How to Take Professional Screenshots

### Method 1: Chrome DevTools (Best for Full Page)

```bash
1. Open your portfolio in Chrome
2. Press F12 to open DevTools
3. Press Ctrl+Shift+P (Cmd+Shift+P on Mac)
4. Type "screenshot"
5. Select "Capture full size screenshot"
6. Image saves automatically to Downloads
```

### Method 2: Firefox Built-in

```bash
1. Open your portfolio in Firefox
2. Right-click on page
3. Select "Take a Screenshot"
4. Choose "Save full page" or select area
5. Click "Download"
```

### Method 3: macOS Native

```bash
1. Press Cmd+Shift+4
2. Press Space (cursor becomes camera)
3. Click on browser window
4. Screenshot saves to Desktop
```

### Method 4: Windows Snipping Tool

```bash
1. Press Windows+Shift+S
2. Select area
3. Edit and save from notification
```

---

## 🎯 Screenshot Checklist

Create a folder: `assets/img/screenshots/`

Desktop Screenshots:
- [ ] `hero-desktop.png` - Hero section
- [ ] `about-desktop.png` - About Me section
- [ ] `testimonials-desktop.png` - Testimonials
- [ ] `blog-desktop.png` - Blog section
- [ ] `skills-desktop.png` - Skills section
- [ ] `projects-desktop.png` - Projects gallery
- [ ] `contact-desktop.png` - Contact form
- [ ] `full-page-desktop.png` - Entire page (optional)

Mobile Screenshots:
- [ ] `hero-mobile.png` - Mobile hero
- [ ] `nav-mobile.png` - Mobile navigation
- [ ] `projects-mobile.png` - Mobile projects
- [ ] `contact-mobile.png` - Mobile contact

---

## 🖼️ After Taking Screenshots

### 1. Create Folder
```bash
mkdir -p assets/img/screenshots
```

### 2. Move Screenshots
```bash
# Move all screenshots to folder
mv ~/Downloads/hero-desktop.png assets/img/screenshots/
# Repeat for all screenshots
```

### 3. Optimize Images (Optional)
Use online tools to compress:
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)
- [ImageOptim](https://imageoptim.com/mac) (macOS)

Target: Keep each image under 500KB

### 4. Update README
The README is already configured to reference these screenshots:

```markdown
### Desktop View
![Hero Section](assets/img/screenshots/hero-desktop.png)
![Projects Section](assets/img/screenshots/projects-desktop.png)

### Mobile View
![Mobile Hero](assets/img/screenshots/hero-mobile.png)
![Mobile Navigation](assets/img/screenshots/nav-mobile.png)
```

### 5. Commit and Push
```bash
git add assets/img/screenshots/
git add README.md
git commit -m "Add portfolio screenshots"
git push origin main
```

---

## 🎬 Alternative: Record a GIF/Video

For showcasing animations and interactions:

### Tools:
- **macOS**: Kap, Gifox
- **Windows**: ScreenToGif
- **Cross-platform**: LICEcap

### What to Record:
1. **Typing animation** on hero section
2. **Smooth scrolling** through sections
3. **Hover effects** on project cards
4. **Skill bars** filling animation
5. **Contact form** interaction
6. **Mobile navigation** menu

### Specs:
- **Duration**: 10-20 seconds max
- **Format**: GIF or MP4
- **Size**: Keep under 5MB
- **FPS**: 30fps
- **Resolution**: 1280x720 (720p)

Save as: `assets/img/portfolio-demo.gif`

Add to README:
```markdown
## 🎬 Demo

![Portfolio Demo](assets/img/portfolio-demo.gif)
```

---

## ✅ Quick Action Steps

**Right now:**

1. **Deploy your site first** (so you have a live URL)
```bash
git add .
git commit -m "Update portfolio with premium design"
git push origin main
```

2. **Wait 2-3 minutes** for GitHub Pages to rebuild

3. **Visit your live site**: `https://shikhargupta-in.github.io`

4. **Take screenshots** using Chrome DevTools:
   - Press `F12`
   - Press `Ctrl+Shift+P` 
   - Type "screenshot"
   - Select "Capture full size screenshot"

5. **Create folder and move screenshots**:
```bash
mkdir -p assets/img/screenshots
mv ~/Downloads/*.png assets/img/screenshots/
```

6. **Optimize images** at [TinyPNG.com](https://tinypng.com)

7. **Add, commit, and push**:
```bash
git add assets/img/screenshots/
git commit -m "Add portfolio screenshots"
git push origin main
```

Done! Your README will now display beautiful screenshots! 📸✨

---

## 📱 Social Media Images

For LinkedIn, Twitter, etc:

### LinkedIn Post Image
- **Size**: 1200 x 627px
- **Tool**: Canva, Figma
- **Content**: Hero screenshot + your info overlay

### Twitter Card
- **Size**: 1200 x 675px
- **Use**: When sharing your portfolio link

### Instagram Story
- **Size**: 1080 x 1920px (9:16 ratio)
- **Content**: Mobile screenshot of portfolio

---

Need help? Just ask! 🚀

