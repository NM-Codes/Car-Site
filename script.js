document.addEventListener("DOMContentLoaded", () => {
const toggle = document.getElementById("theme-toggle");

  // Default dark mode
  if (!document.body.classList.contains("dark-mode") && !document.body.classList.contains("light-mode")) {
    document.body.classList.add("dark-mode");
    toggle.checked = false;
  }

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  });
    const hamburger = document.querySelector('.hamburger');
  const menu = document.getElementById('menu-list');

  hamburger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
});

