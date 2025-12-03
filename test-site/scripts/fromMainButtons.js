// const userButton = document.getElementById("userButton");
// const aiAssistantbutton = document.getElementById("asAssistantButton");
// const aboutUsButton = document.getElementById("aboutUsButton");
// const aboutStudyButton = document.getElementById("aboutStudyButton");

const toMainButton = document.getElementById("mainbutton");

const algebraAndGeometry = document.getElementById("algebraButton");
const algorithmizationButton = document.getElementById("algorithmizationButton");
const discreteMathButton = document.getElementById("discreteMathButton");



toMainButton.addEventListener("click", () => {
  window.location.href = '../pages/main.html'
});



algebraAndGeometry.addEventListener("click", () => {
  window.location.href = '../pages/algebraandgeometry.html'
});

algorithmizationButton.addEventListener("click", () => {
  window.location.href = '../pages/algorithmizationandprogramming.html'
});

discreteMathButton.addEventListener("click", () => {
  window.location.href = '../pages/discretemathematics.html'
});
