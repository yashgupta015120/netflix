<div align="center">

# NETFLIX INDIA
### A cinematic streaming landing-page concept

**A responsive front-end demo built with HTML, CSS, and inline JavaScript.**

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-OPEN-E50914?style=for-the-badge&logo=vercel&logoColor=white)](https://netflix-ruddy-nine.vercel.app/)

**[Watch it live on Vercel →](https://netflix-ruddy-nine.vercel.app/)**

[Explore the features](#-highlights) · [Run locally](#-run-locally) · [Deploy with Vercel](#-deploy-with-vercel)

<br>

> An independent educational project inspired by streaming landing pages. It is not affiliated with Netflix.

</div>

---

## ✨ Highlights

| Experience | What it does |
| --- | --- |
| 🎬 **Cinematic hero** | Layered artwork, dramatic gradients, ambient red light, and a responsive call to action. |
| 🎞️ **English-language experience** | Consistent English copy throughout the page. |
| 📺 **Feature showcase** | Four responsive sections introduce TV viewing, downloads, watching on different devices, and kids profiles. |
| 💬 **Interactive FAQs** | Keyboard-accessible, native disclosure panels with helpful answers. |
| ✉️ **Demo email form** | Checks the email format and shows feedback. It does **not** send or save form data. |
| ✨ **Subtle motion** | Staggered hero entrance, a gently breathing glow, scroll-reveal sections, and small hover details. |
| ♿ **Thoughtful defaults** | Semantic sections, descriptive image text, visible keyboard focus, and reduced-motion support. |
| 📱 **Responsive layout** | Adjusts the navigation, hero, feature artwork, FAQ, and footer for smaller screens. |

## 🖼️ Page tour

1. **Hero** — Follow the external Sign In link or try the front-end-only email form.
2. **Features** — Scroll through the four numbered feature sections and their illustrative artwork.
3. **FAQs** — Expand a question with a click, Enter, or Space.
4. **Footer** — Visit the linked official Netflix resources.

## 🧰 Built with

- **HTML5** for semantic page structure and native FAQ disclosure elements.
- **CSS3** for responsive layouts, design tokens, gradients, animation, and reduced-motion preferences.
- **Inline JavaScript** in `index.html` for form feedback and scroll-triggered reveals.
- **Google Fonts** for DM Sans and Manrope, with sans-serif fallbacks.

No separate JavaScript file, framework, package manager, build step, or third-party JavaScript library is required.

## 🎓 Concepts demonstrated

This project is also a compact example of core front-end concepts:

- **Semantic HTML:** landmarks, heading hierarchy, labels, and native `<details>` / `<summary>` interactions.
- **Form validation:** the browser's email validity API is paired with accessible feedback—without pretending to submit data.
- **Responsive design:** fluid sizing, CSS custom properties, and media queries adapt the same content to different screens.
- **Progressive motion:** `IntersectionObserver` enhances feature reveals, while CSS honors reduced-motion preferences.

## 📁 Project structure

```text
.
├── index.html          # Page content, metadata, accessible markup, and inline JavaScript
├── style.css           # Theme, responsive layouts, states, and animations
├── README.md           # Project guide and setup instructions
├── favicon.ico         # Browser tab icon
└── assets/
    ├── images/
    │   ├── bg.jpg      # Local hero background
    │   └── logo.svg    # Local logo artwork
    └── videos/
        └── video1.m4v  # Included local media asset; not currently used by the page
```

### How the page fits together

```mermaid
flowchart LR
    A[index.html] -->|content and inline JavaScript| B[Browser]
    A -->|style sheet| C[style.css]
    B -->|validates and reports locally| D[Email demo form]
    B -->|IntersectionObserver| E[Feature reveal]
    C -->|responsive layout and motion| A
```

## 🚀 Run locally

### Option 1: Open the file

Open `index.html` in a modern browser. The main page and local artwork work without a build process. Some showcase images, videos, and fonts are loaded from external services and require an internet connection.

### Option 2: Start a local server

If Python is installed:

```bash
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

## ▲ Deploy with Vercel

The live project is deployed at **[netflix-ruddy-nine.vercel.app](https://netflix-ruddy-nine.vercel.app/)**.

To deploy your own copy:

1. Push this project to a GitHub repository with `index.html` at its root.
2. In Vercel, choose **Add New → Project** and import your repository.
3. Keep it as a static site; no framework, build command, or server-side runtime is required.
4. Deploy, then open the generated Vercel URL. Connect the repository to enable automatic deployments on future pushes.

This page is made of static files, so Vercel serves the HTML, CSS, and local assets directly. Test the deployed URL on desktop and mobile, and confirm external showcase media loads.

## 🧪 Quick quality checklist

- [ ] Confirm all visible page copy is in English.
- [ ] Expand each FAQ with a mouse and keyboard.
- [ ] Try an empty, malformed, and valid email address. The page should clearly say that it does not send data.
- [ ] Scroll down to see the feature reveals; enable reduced motion in system settings to check the calmer experience.
- [ ] Check the page at desktop and narrow mobile widths, and confirm images load with an internet connection.
- [ ] Check links and browser developer tools after publishing.

## 🛠️ Make it yours

- **Update page copy:** Edit the visible text directly in `index.html`.
- **Restyle the experience:** Start with the CSS custom properties at the top of `style.css`.
- **Adjust interaction:** Update the form or reveal handlers in the inline `<script>` at the end of `index.html`.
- **Use your own media:** Replace external artwork and video URLs with files you have permission to use. The example video URLs currently depend on Netflix-hosted assets.
- **Connect a real signup service:** This demo intentionally has no backend. Add a secure, consent-aware service before collecting or transmitting personal data.

## ⚖️ Credits and scope

This is a student/educational front-end concept, not an official Netflix product. Netflix names, logos, and referenced media belong to their respective owners. Some illustrative media and the web fonts are retrieved from external providers; replace them with properly licensed assets if you adapt or redistribute the project.

The email form is a client-side interaction only. It does not create an account, process a subscription, transmit an email, or persist visitor data.
