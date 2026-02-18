// Simple animation for timeline items
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline li");
  items.forEach((item, index) => {
    item.style.opacity = 0;
    setTimeout(() => {
      item.style.transition = "opacity 0.8s ease-in";
      item.style.opacity = 1;
    }, index * 400);
  });
});
