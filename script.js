const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");
const themeToggle = document.getElementById("theme-toggle");
const themeSymbol = document.getElementById("theme-symbol");

// Menu para celular e tablet
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.textContent = isOpen ? "×" : "☰";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Fecha o menu depois de selecionar uma seção
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Tema claro e escuro
function setTheme(theme) {
  document.body.classList.toggle("light", theme === "light");
  themeSymbol.textContent = theme === "light" ? "☾" : "☼";
  themeToggle.setAttribute(
    "aria-label",
    theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"
  );
  document.documentElement.style.colorScheme = theme;
}

// Começa em dark; mantém a escolha feita no navegador
const savedTheme = localStorage.getItem("studioKTheme") || "dark";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("light") ? "light" : "dark";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("studioKTheme", nextTheme);
  setTheme(nextTheme);
});
