// const userButton = document.getElementById("userButton");
// const aiAssistantbutton = document.getElementById("asAssistantButton");
// const aboutUsButton = document.getElementById("aboutUsButton");
// const aboutStudyButton = document.getElementById("aboutStudyButton");
const toMainButton = document.getElementById("mainbutton");
const algebraAndGeometry = document.getElementById("algebraButton");
const matrixButton = document.getElementById("matrixButton");
const determinatorButton = document.getElementById("determinatorButton");

toMainButton.addEventListener("click", () => {
  window.location.href = '../pages/main.html'
});

algebraAndGeometry.addEventListener("click", () => {
  window.location.href = '../pages/algebraandgeometry.html'
});

matrixButton.addEventListener("click", () => {
  window.location.href = '../pages/matrixes.html'
});

determinatorButton.addEventListener("click", () => {
  window.location.href = '../pages/determinators.html'
});
