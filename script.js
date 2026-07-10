const timelineCards = document.querySelectorAll(".timeline-card");

function setHintState(card) {
  const hint = card.querySelector(".card-hint");
  if (!hint) return;
  hint.textContent = card.open ? "Tap or press Enter to collapse" : "Hover or tap for more";
}

timelineCards.forEach((card) => {
  setHintState(card);

  card.addEventListener("toggle", () => {
    setHintState(card);
  });

  const summary = card.querySelector("summary");
  if (!summary) return;

  summary.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
      card.open = !card.open;
    }
  });
});
