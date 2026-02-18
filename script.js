// Simple fade-in animation for project cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = "opacity 0.8s ease-in";
      card.style.opacity = 1;
    }, index * 400);
  });
});
