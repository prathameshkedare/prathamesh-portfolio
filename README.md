# Prathamesh Kedare — Portfolio

## 📁 Folder Structure

```
src/
├── index.html        → Main page (all sections: hero, about, experience, projects, education, contact)
├── css/
│   └── style.css      → All styling (theme variables, layout, animations, responsive rules)
├── js/
│   └── main.js         → Scroll-reveal animation + navbar shrink-on-scroll behavior
└── assets/
    ├── favicon.png     → ADD: your site favicon (32x32 or 64x64 png)
    ├── profile.jpg      → ADD: your profile photo (optional, not yet wired into HTML — ask if you want a photo section)
    └── resume.pdf        → ADD: your CV/resume PDF — the "Download Resume" button in the hero links to this
```

## 🚀 How to Use

1. Drop your **resume.pdf** into `src/assets/` — the "Download Resume" button already points to it.
2. (Optional) Add a **favicon.png** into `src/assets/` for the browser tab icon.
3. Open `src/index.html` directly in a browser — no build step required, everything is plain HTML/CSS/JS.
4. To deploy: upload the entire `src/` folder to Netlify, Vercel, or GitHub Pages.

## 🎨 Customizing Colors

All theme colors live at the top of `css/style.css` inside `:root`:

```css
--accent:  #2563eb;   /* primary blue */
--accent2: #06b6d4;   /* secondary cyan */
--bg-dark: #0d1117;   /* page background */
```

Change these two accent values to re-theme the entire site instantly.

## 🛠️ Tech Used

- Vanilla HTML5 / CSS3 / JavaScript (no build tools required)
- Google Fonts: Inter + JetBrains Mono
- Font Awesome icons (via CDN)
- IntersectionObserver for scroll-reveal animations
