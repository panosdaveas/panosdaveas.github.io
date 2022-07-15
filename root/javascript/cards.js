const panels = document.querySelectorAll(".panel");
const frames = document.querySelectorAll(".terminal-windows section.terminal iframe")

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
    frame = panel.querySelector(".terminal-windows section.terminal iframe");
    frame.classList.add("visible");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
  frames.forEach((frame) => {
    frame.classList.remove("visible");
  });
};

