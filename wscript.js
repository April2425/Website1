document.addEventListener("DOMContentLoaded", () => {
    // Add Current Year in Footer
    const footer = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footer.textContent = `© ${currentYear} My Website`;
});
