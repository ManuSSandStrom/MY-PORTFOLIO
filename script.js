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
    // Add more skills here as needed
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
    // Add more projects here as needed
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
    // Add more certifications here as needed
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

// Contact Form Submission Feedback
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        // Note: Formspree handles submission; this is just client-side feedback
        setTimeout(() => {
            alert("Thank you for your message! I'll get back to you soon.");
            contactForm.reset(); // Clear form after submission
        }, 500); // Delay to simulate submission
    });
}

// View Toggle Functionality
const viewToggle = document.getElementById("viewToggle");
const navLinks = document.querySelector(".nav-links");

viewToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
        alert("Switched to Mobile View");
    } else {
        alert("Switched to Desktop View");
    }
});

// ScrollReveal Animations with Mobile Optimization
function getScrollRevealConfig(isMobile) {
    return {
        section: {
            delay: 200,
            distance: isMobile ? "15px" : "20px", // Reduced for mobile
            origin: "bottom",
            duration: isMobile ? 600 : 800, // Faster on mobile
            easing: "ease-out",
            interval: 100
        },
        item: {
            delay: 300,
            distance: isMobile ? "10px" : "15px", // Subtler for mobile
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

ScrollReveal().reveal(".skill-item", {
    ...config.item,
    origin: "left"
});

ScrollReveal().reveal(".project-card", config.item);

ScrollReveal().reveal(".certification-item", {
    ...config.item,
    origin: "right"
});

ScrollReveal().reveal(".testimonial-item", config.item);

ScrollReveal().reveal(".contact-form, .contact-info", {
    ...config.item,
    origin: "bottom"
});

// Initialize dynamic content on page load
document.addEventListener("DOMContentLoaded", () => {
    renderSkills();
    renderProjects();
    renderCertifications();
});
