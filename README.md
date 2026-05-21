# Jirono - Industry Leading Managed Services & Staffing Solutions

Jirono is a modern, responsive frontend website designed for an industry-leading managed services and staffing solutions provider. The platform highlights proven methodologies to capture business priorities, goals, and operational pain points to deliver measurable business outcomes.

---

## 🚀 Features

* **Responsive Navigation:** A Bootstrap-powered navbar featuring custom dropdown menus ("Discover" and "Pages") alongside toggleable mobile menu integration.
* **Dynamic Accordions & UI Elements:** Custom interactive dropdowns and accordion logic for Frequently Asked Questions (FAQ) and services, managed dynamically via jQuery.
* **Comprehensive Service Layouts:** Highlighting Cloud Services, Design & Development, Network Services, and Disaster Recovery using structured Bootstrap grids.
* **Statistics Counter Section:** Visual representation of key performance metrics including Completed Projects, Happy Customers, Experienced Staff, and Ongoing Projects.
* **Meet the Team:** An elegant, card-based layout featuring team profiles integrated with FontAwesome social media links.
* **Tiered Pricing Plans:** A 3-tier presentation (Basic, Advanced, and Expert) with distinct feature subsets to incentivize conversions.
* **Multi-page Architecture:** A complete multipage corporate setup including Home, About Us, Features, FAQ, Blog, Blog Single, and Contact templates.
* **Asynchronous Comments:** Integrated dynamic comment-rendering engine built inside the individual blog posts.

---

## 🛠️ Tech Stack & Architecture

### **Frontend Core**
* **HTML5:** Semantic structure across all corporate page templates.
* **JavaScript (ES6+) & jQuery (v3.6.1):** Handles smooth accordion toggles, dynamic DOM manipulation, and window scroll state transitions.
* **Bootstrap (v4.0.0):** Main structural grid framework ensuring mobile-first responsiveness.
* **FontAwesome:** Modern scalable vector icons for services and social handles.

### **Styling & Preprocessing**
The styling architecture leverages **SASS (SCSS)** to keep the codebase clean, modular, and highly scalable.
* **Partials:** Global styles, variables, layout rules, and individual section blocks are split into compartmentalized partial files inside the `assets/scss/partials/` directory.
* **Compilation:** Main stylesheets are imported via `assets/scss/style.scss` and compiled down into the asset folder path at `assets/css/style.css`.

---

## 📁 Project Structure

```text
├── about-us.html               # About company template
├── blog-single.html            # Individual blog post layout with comments
├── blog.html                   # Full blog grid template
├── contact.html                # Contact page template
├── faq.html                    # Frequently Asked Questions template
├── features.html               # Features showcase template
├── index.html                  # Main homepage template
├── README.md                   # Project documentation
│
└── assets/                     # Production Build Assets
    ├── css/
    │   └── style.css           # Compiled production stylesheet
    │
    ├── images/                 # Project illustration SVGs and graphical assets
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   ├── 3.jpg
    │   ├── blog-image-1.jpg
    │   ├── blog-image-2.jpg
    │   ├── blog-image-3.jpg
    │   ├── blog-image-4.jpg
    │   ├── blog-image-5.jpg
    │   ├── blue back.jpg
    │   ├── card-image-1.jpg
    │   ├── card-image-2.jpg
    │   ├── card-image-3.jpg
    │   ├── card-image-4.jpg
    │   ├── cloud-services-img.png
    │   ├── comment-avatar.png
    │   ├── community-supported.png
    │   ├── design-development-image.png
    │   ├── expanded-image.png
    │   ├── extensive-editor.png
    │   ├── header-bg.svg
    │   ├── jirono-blue.png
    │   ├── jirono-white.png
    │   ├── non-destructive editing.html
    │   ├── non-destructive editing.png
    │   ├── parallax-cover.jpg
    │   ├── parallax.jpg
    │   ├── syntax highlighted.png
    │   └── vectoral shape.png
    │
    ├── js/
    │   └── index.js            # Core interactive JavaScript & jQuery logic
    │
    └── scss/                   # SASS Components & Modularity
        ├── partials/
        │   ├── _about.scss             # Styles for about section
        │   ├── _advantages.scss        # Styles for corporate advantages
        │   ├── _blog.scss              # General blog styling
        │   ├── _cloud-services.scss    # Cloud services layout features
        │   ├── _contact-us.scss        # Contact section components
        │   ├── _faq.scss               # Accordion styles for FAQs
        │   ├── _fields.scss            # Field showcase styling
        │   ├── _footer.scss            # Footer component styles
        │   ├── _get-in-touch.scss      # Get in touch section styles
        │   ├── _home-page-blog.scss    # Homepage blog snippet grids
        │   ├── _map.scss               # Contact maps visual styling
        │   ├── _navbar.scss            # Fixed & responsive header navigation
        │   ├── _our-mission.scss       # Strategic mission statement styling
        │   ├── _our-team.scss          # Team profile layouts & social links
        │   ├── _pricing.scss           # 3-Tier package grids
        │   ├── _responsivity.scss      # Media queries and responsive overrides
        │   └── _statistics.scss        # Data counters UI elements
        └── style.scss                  # Core SASS file importing partial stylesheets
```