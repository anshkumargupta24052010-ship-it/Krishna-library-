function scrollToSection() {
  document.getElementById("fees").scrollIntoView({ behavior: "smooth" });
}

// selectable cards
function selectCard(card) {
  document.querySelectorAll(".card").forEach(c => c.classList.remove("highlight"));
  card.classList.add("highlight");
}
