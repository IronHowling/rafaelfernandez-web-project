## Project 2 - HTML Foundation Page

### Description
My webpage focuses on the intersection of **Quantum Cryptography** and **Advanced Cybersecurity**, specifically highlighting my research into **Ephemeral Intelligent Agents**. These agents are designed to secure critical IoT infrastructure—such as nuclear reactors and satellite networks by providing a transient security layer that self-destructs to leave no forensic footprint.

### What I Learned
While creating this page, I learned how to structure a multi page website and link them using a navigation bar. I also learned how to implement older HTML styling attributes like font color and background color to manage a page's layout without using CSS.

### Challenges
The biggest challenge was achieving a professional research paper look while restricted to HTML tags like tables and font attributes. Also managing the heading hierarchy to pass W3C validation while using obsolete styling elements required careful balancing of the project requirements.

## Project 3 - CSS Styling & Research Elevation
In this project, I transitioned the research portal from basic HTML styling to a dark-mode CSS environment. 

### What I Learned:
* **External Stylesheets:** I learned how to separate content from design by using a single `styles.css` file to control the look of multiple pages.
* **CSS Animations:** I implemented a custom scanning radar effect using `@keyframes` and `body::before` to simulate a HUD.
* **Glassmorphism:** I used `backdrop-filter: blur()` to create a high-tech, semi-transparent research container.
* **Accessibility:** I ensured that my neon color scheme maintained high contrast ratios and that all technical imagery included descriptive alt-text for screen readers.

### Challenges:
* Balancing the "Neon SOC" aesthetic with accessibility requirements was a challenge, as bright neon colors on dark backgrounds can sometimes fail contrast checks.
* Managing relative links across a multi-directory structure (root, /html, /css, /images) required careful pathing to ensure images and styles loaded correctly on the live GitHub Pages site.

## Project 4 - JavaScript & Responsive Design
In this final phase, I integrated dynamic behavior and mobile-first responsiveness into the Cyber Defense portal.

### Technical Implementation:
* **Interactive Terminal:** Created a functional JavaScript terminal using `addEventListener` to process operator designations and provide real-time 
* **Responsive Architecture:** Implemented CSS Media Queries to adapt the layout for mobile and tablet devices, ensuring stability on all screen sizes 
* **Isotropic 3D UI:** Developed a custom coordinate-mapping script that creates a 3D perspective shift based on mouse movement.
* **Validation & Compliance:** The project maintains 100% W3C valid HTML/CSS and was audited for accessibility compliance.

### Challenges:
* **Coordinate Mapping:** Balancing the 3D rotation math so it felt immersive on desktop but didn't interfere with form usability.
* **Input Logic:** Ensuring the "Enter" key and "Submit" button shared the same functional logic (DRY principle) for a seamless user experience.