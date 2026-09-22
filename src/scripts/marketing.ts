export {};

const installPicker = document.querySelector<HTMLElement>(".install-picker");
if (installPicker) {
  const options = [
    ...installPicker.querySelectorAll<HTMLAnchorElement>(".install-option"),
  ];
  installPicker.setAttribute("role", "tablist");

  function selectInstall(option: HTMLAnchorElement, updateUrl = false) {
    for (const item of options) {
      const panel = document.getElementById(item.hash.slice(1));
      if (!panel) continue;
      const selected = item === option;
      item.setAttribute("role", "tab");
      item.setAttribute("aria-controls", panel.id);
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", item.id);
      panel.tabIndex = 0;
      panel.hidden = !selected;
    }
    if (updateUrl) history.replaceState(null, "", option.hash);
  }

  options.forEach((option, index) => {
    option.addEventListener("click", (event) => {
      event.preventDefault();
      selectInstall(option, true);
    });
    option.addEventListener("keydown", (event) => {
      let next: number | undefined;
      if (event.key === "ArrowRight") next = (index + 1) % options.length;
      if (event.key === "ArrowLeft")
        next = (index + options.length - 1) % options.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = options.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectInstall(options[next], true);
      options[next].focus();
    });
  });
  const selectFromHash = () =>
    selectInstall(
      options.find((option) => option.hash === location.hash) ?? options[0],
    );
  selectFromHash();
  window.addEventListener("hashchange", selectFromHash);
}

const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
const navigation = document.querySelector<HTMLElement>(".site-nav");
function setMenu(open: boolean) {
  menuButton?.setAttribute("aria-expanded", String(open));
  const label = menuButton?.querySelector(".sr-only");
  if (label) label.textContent = open ? "Close menu" : "Open menu";
  navigation?.classList.toggle("is-open", open);
}
menuButton?.addEventListener("click", () =>
  setMenu(menuButton.getAttribute("aria-expanded") !== "true"),
);
navigation
  ?.querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton?.getAttribute("aria-expanded") === "true"
  ) {
    setMenu(false);
    menuButton.focus();
  }
});

const tracks = [
  ...document.querySelectorAll<HTMLButtonElement>(".track-trigger"),
];
function setTrack(trigger: HTMLButtonElement, open: boolean) {
  const panel = document.getElementById(
    trigger.getAttribute("aria-controls") ?? "",
  );
  trigger.setAttribute("aria-expanded", String(open));
  trigger.closest(".track")?.classList.toggle("is-open", open);
  const icon = trigger.querySelector(".track-icon");
  if (icon) icon.textContent = open ? "−" : "+";
  if (panel) panel.hidden = !open;
}
tracks.forEach((trigger, index) => {
  // Leave the content visible in the HTML for visitors without JavaScript.
  setTrack(trigger, index === 0);
  trigger.addEventListener("click", () => {
    const wasOpen = trigger.getAttribute("aria-expanded") === "true";
    tracks.forEach((other) => setTrack(other, other === trigger && !wasOpen));
  });
});

document
  .querySelectorAll<HTMLButtonElement>("[data-copy-target]")
  .forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.getElementById(button.dataset.copyTarget ?? "");
      if (!target) return;
      const originalLabel = button.textContent;
      try {
        await navigator.clipboard.writeText(target.textContent?.trim() ?? "");
        button.textContent = "Copied";
      } catch {
        button.textContent = "Select & copy";
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(target);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      window.setTimeout(() => {
        button.textContent = originalLabel;
      }, 1800);
    });
  });

document.documentElement.classList.add("js");
