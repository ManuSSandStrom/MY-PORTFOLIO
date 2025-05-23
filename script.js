// Data for dynamic sections (Skills, Projects, Certifications)
const skills = [
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "Java", icon: "fab fa-java" },
    { name: "C", icon: "fas fa-code" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "VS Code", icon: "fas fa-code" },
    { name: "Eclipse", icon: "fas fa-code" },
    { name: "MS Word", icon: "fas fa-file-word" },
    { name: "Excel", icon: "fas fa-file-excel" },
    { name: "PowerPoint", icon: "fas fa-file-powerpoint" }
];

const projects = [
    {
        title: "MANUS RESUME BUILDER",
        description: "Developed a dynamic resume builder using HTML, CSS, and JavaScript, enabling users to input and generate downloadable resumes in real-time.",
        image: "https://res.cloudinary.com/dcd6l5egh/image/upload/v1744520866/THUMBNAIL_FOR_RESUME_dikyqp.png",
        link: "https://rebrand.ly/7ad1dc"
    },
    {
        title: "STUDY-SYNC-AI",
        description: "Created a web-based platform for students to manage academic schedules and receive AI-driven study recommendations. Built using HTML, CSS, and Java, with AI integration for smart study tips and prioritization.",
        image: "https://res.cloudinary.com/dcd6l5egh/image/upload/v1744522707/NEW_zuw5da.png",
        link: "https://study-sync-ai-powered.vercel.app/"
    }
];

const certifications = [
    {
        title: "Meta Front-End Developer Professional Certificate",
        issuer: "Coursera",
        year: "2024"
    },
    {
        title: "Responsive Web Design Certification",
        issuer: "freeCodeCamp",
        year: "2024"
    }
];

// Function to populate Skills section
function renderSkills() {
    const skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = ""; // Clear existing content

    skills.forEach(skill => {
        const skillItem = document.createElement("div");
        skillItem.classList.add("skill-item");
        skillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <p>${skill.name}</p>
        `;
        skillsList.appendChild(skillItem);
    });
}

// Function to populate Projects section
function renderProjects() {
    const projectsGrid = document.getElementById("projects-grid");
    projectsGrid.innerHTML = ""; // Clear existing content

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Function to populate Certifications section
function renderCertifications() {
    const certificationsList = document.getElementById("certifications-list");
    certificationsList.innerHTML = ""; // Clear existing content

    certifications.forEach(cert => {
        const certItem = document.createElement("div");
        certItem.classList.add("certification-item");
        certItem.innerHTML = `
            <h3>${cert.title}</h3>
            <p>${cert.issuer} - ${cert.year}</p>
        `;
        certificationsList.appendChild(certItem);
    });
}

// Toggle Menu Functionality
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const isOpen = navMenu.classList.contains("active");
    navToggle.innerHTML = `<i class="fas ${isOpen ? "fa-times" : "fa-bars"}"></i>`;
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        navToggle.innerHTML = `<i class="fas fa-bars"></i>`;
    });
});

// Theme Toggle Functionality
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    const isDark = body.classList.contains("dark-theme");
    themeToggle.innerHTML = `<i class="fas ${isDark ? "fa-sun" : "fa-moon"}"></i>`;
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Check for saved theme preference on page load
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
    }
});

// Contact Form Submission with WhatsApp Integration
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!name || !email || !phone || !message) {
        alert("Please fill out all fields.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Format the message for WhatsApp
    const formattedMessage = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );

    // Show success alert
    alert("Your message is being sent via WhatsApp!");

    // Redirect to WhatsApp
    window.location.href = `https://wa.me/919515022680?text=${formattedMessage}`;

    // Reset the form
    contactForm.reset();
});

// ScrollReveal Animations with Mobile Optimization
function getScrollRevealConfig(isMobile) {
    return {
        section: {
            delay: 200,
            distance: isMobile ? "15px" : "20px",
            origin: "bottom",
            duration: isMobile ? 600 : 800,
            easing: "ease-out",
            interval: 100
        },
        item: {
            delay: 300,
            distance: isMobile ? "10px" : "15px",
            origin: "bottom",
            duration: isMobile ? 500 : 700,
            easing: "ease-out",
            interval: 150
        }
    };
}

const isMobile = window.innerWidth <= 768;
const config = getScrollRevealConfig(isMobile);

ScrollReveal().reveal(".section", config.section);
ScrollReveal().reveal(".skill-item", { ...config.item, origin: "left" });
ScrollReveal().reveal(".project-card", config.item);
ScrollReveal().reveal(".certification-item", { ...config.item, origin: "right" });
ScrollReveal().reveal(".testimonial-item", config.item);
ScrollReveal().reveal(".contact-form", { ...config.item, origin: "bottom" });

// Initialize dynamic content on page load
document.addEventListener("DOMContentLoaded", () => {
    renderSkills();
    renderProjects();
    renderCertifications();
});