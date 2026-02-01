// Reveal sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach((section) => observer.observe(section));

// Mobile navigation toggle
const header = document.querySelector("header");
const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav a");

if (header && toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggleBtn.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.textContent = "☰";
    });
  });
}