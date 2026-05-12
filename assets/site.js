(() => {
  const root = document.documentElement;
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navPanel = document.querySelector("[data-site-nav-panel]");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const storageKey = "sayantan-site-theme";

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
  };

  const storedTheme = window.localStorage.getItem(storageKey);
  if (storedTheme) {
    applyTheme(storedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      window.localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme);
    });
  }

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", () => {
      const isOpen = navPanel.classList.toggle("is-open");
      navToggle.classList.toggle("collapsed", !isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
})();
