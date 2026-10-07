export {};

// Mobile navigation.
const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
const navigation = document.getElementById("site-nav");
function setMenu(open: boolean) {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", String(open));
  const label = menuButton.querySelector("[data-menu-label]");
  if (label) label.textContent = open ? "Close menu" : "Open menu";
  navigation.classList.toggle("is-open", open);
}
menuButton?.addEventListener("click", () =>
  setMenu(menuButton.getAttribute("aria-expanded") !== "true"),
);
navigation
  ?.querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.ariaExpanded === "true") {
    setMenu(false);
    menuButton.focus();
  }
});

// Light/dark toggle. Without a stored choice the page follows the system.
document
  .querySelector<HTMLButtonElement>("[data-theme-toggle]")
  ?.addEventListener("click", () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const next = current === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("ma-theme", next);
    } catch {
      // Storage can be unavailable (private mode); the switch still applies.
    }
  });

// Show the homepage navigation CTA after the hero CTA passes the sticky header.
const header = document.querySelector<HTMLElement>(".site-header.is-homepage");
const heroCta = document.querySelector<HTMLElement>(".hero-install");
const updateScrolled = () => {
  const showInstall =
    !heroCta ||
    !header ||
    heroCta.getBoundingClientRect().bottom <= header.getBoundingClientRect().height;
  document.documentElement.classList.toggle("is-scrolled", scrollY > 8);
  header?.classList.toggle("show-install", showInstall);
};
updateScrolled();
addEventListener("scroll", updateScrolled, { passive: true });
addEventListener("resize", updateScrolled);
addEventListener("load", updateScrolled);

// Reveal sections as they scroll into view.
const revealed = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px" },
  );
  revealed.forEach((element) => observer.observe(element));
} else {
  revealed.forEach((element) => element.classList.add("is-visible"));
}

// Copy buttons on code blocks.
document
  .querySelectorAll<HTMLButtonElement>("[data-copy-target]")
  .forEach((button) => {
    const label = button.querySelector("[data-copy-label]");
    button.addEventListener("click", async () => {
      const target = document.getElementById(button.dataset.copyTarget ?? "");
      if (!target || !label) return;
      try {
        await navigator.clipboard.writeText(target.textContent?.trim() ?? "");
        label.textContent = "Copied";
      } catch {
        const range = document.createRange();
        range.selectNodeContents(target);
        getSelection()?.removeAllRanges();
        getSelection()?.addRange(range);
        label.textContent = "Press Ctrl+C";
      }
      setTimeout(() => (label.textContent = "Copy"), 1800);
    });
  });
