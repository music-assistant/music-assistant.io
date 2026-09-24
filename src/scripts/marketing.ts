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

// Give the header a border once the page has scrolled.
const updateScrolled = () =>
  document.documentElement.classList.toggle("is-scrolled", scrollY > 8);
updateScrolled();
addEventListener("scroll", updateScrolled, { passive: true });

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

// Installation method tabs on /get-started/. Links work without JavaScript;
// with it, they behave as a tab list and keep the choice in the URL hash.
const picker = document.querySelector<HTMLElement>("[data-install-picker]");
if (picker) {
  const tabs = [...picker.querySelectorAll<HTMLAnchorElement>("a")];
  const panelFor = (tab: HTMLAnchorElement) =>
    document.getElementById(tab.hash.slice(1));

  function select(tab: HTMLAnchorElement, updateUrl = false) {
    for (const item of tabs) {
      const panel = panelFor(item);
      const selected = item === tab;
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
      if (panel) panel.hidden = !selected;
    }
    if (updateUrl) history.replaceState(null, "", tab.hash);
  }

  picker.setAttribute("role", "tablist");
  tabs.forEach((tab, index) => {
    const panel = panelFor(tab);
    tab.setAttribute("role", "tab");
    if (panel) {
      tab.setAttribute("aria-controls", panel.id);
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", tab.id);
    }
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      select(tab, true);
    });
    tab.addEventListener("keydown", (event) => {
      const keys: Record<string, number> = {
        ArrowRight: (index + 1) % tabs.length,
        ArrowLeft: (index + tabs.length - 1) % tabs.length,
        Home: 0,
        End: tabs.length - 1,
      };
      const next = keys[event.key];
      if (next === undefined) return;
      event.preventDefault();
      select(tabs[next], true);
      tabs[next].focus();
    });
  });
  const fromHash = () =>
    select(tabs.find((tab) => tab.hash === location.hash) ?? tabs[0]);
  fromHash();
  addEventListener("hashchange", fromHash);
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
