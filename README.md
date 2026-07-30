# Samuel Olamide Portfolio Website

A personal portfolio site built with plain HTML, CSS, and JavaScript. No frameworks and no build tools were used. It was designed and coded step by step to actually understand how each part works, not just to produce a finished result.

## About This Project

This site was built from scratch using HTML, CSS, and JavaScript, with attention to layout, visual detail, and interactivity. Each feature, from the animation techniques to the contact form's email delivery, was implemented deliberately as part of building a fully functional, production ready portfolio.

## Features

Responsive layout that works from mobile to desktop, using Flexbox, Grid, and fluid typography with clamp().

Floating pill navigation with icon links for Home, X, GitHub, CV, and Contact.

An animated hero section with a blinking terminal style cursor next to the name.

A polaroid style photo layout in the About section, with overlapping rotated images that scale correctly at any screen size.

A scrolling skills marquee and a scrolling projects carousel, both built with pure CSS animation and no JavaScript, pausing automatically on hover.

A full width dark "Vision" section that intentionally breaks the light theme for emphasis.

A working contact form connected to EmailJS, so messages are delivered to a real inbox. Includes client side validation and inline success or error feedback without reloading the page.

A floating WhatsApp button fixed to the corner of the page.

Accessibility considerations, including visible focus states for keyboard navigation and support for prefers reduced motion.

## Tech Stack

HTML5 for structure.

CSS3 for styling, including custom properties, Flexbox, Grid, and keyframe animations.

Vanilla JavaScript for DOM manipulation, form handling, and asynchronous requests using Promises.

EmailJS for client side email delivery from the contact form.

Devicon and Simple Icons for technology and brand logos in the skills section.

Google Fonts, specifically Space Grotesk, Inter, and JetBrains Mono.

## Project Structure

```
portfolio/
├── index.html      Homepage, includes every section of the site
├── styles.css       All styling, shared across the site
├── script.js         Form validation, EmailJS submission, footer year
└── README.md       This file
```

## Running Locally

This is a static site with no build step required.

1. Download all files into a single folder. index.html, styles.css, and script.js must be in the same folder for the links between them to work.
2. Open index.html in a browser.

## Deploying with GitHub and Vercel

There is no live link yet. The plan is to push this project to GitHub first, then deploy it through Vercel.

1. Create a new repository on GitHub and push all project files to it.
2. Go to vercel.com and sign in with a GitHub account.
3. Import the repository from GitHub into Vercel.
4. Since this is a static site with no build command, Vercel should detect and deploy it automatically as is.
5. Vercel will generate a live URL once deployment finishes. That link can be added to this README and used as the actual portfolio link.

## Configuration Checklist

The following items are still placeholders and need to be replaced with real content.

Photos: replace the placeholder image URLs in the hero and About sections with real photos.

CV: add a real cv.pdf file to the project folder. The Download CV button already links to cv.pdf.

GitHub username: currently a placeholder in the navigation.

X (Twitter) handle: currently a placeholder in the navigation.

WhatsApp number: currently a placeholder in the floating WhatsApp button.

Projects: the homepage carousel currently shows placeholder project titles, descriptions, images, and links. These should be replaced with real project details once available.

EmailJS: the contact form is already connected. If it stops working, check that the Service ID, Template ID, and Public Key in script.js and index.html still match the EmailJS dashboard.

## Author

Samuel Olamide
Computer Science student at Obafemi Awolowo University (OAU)
Email: oyenpemisamuelolamide@gmail.com
