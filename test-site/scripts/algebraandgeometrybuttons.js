// const userButton = document.getElementById("userButton");
// const aiAssistantbutton = document.getElementById("asAssistantButton");
// const aboutUsButton = document.getElementById("aboutUsButton");
// const aboutStudyButton = document.getElementById("aboutStudyButton");
const toMainButton = document.getElementById("mainbutton");
const determinatorsButton = document.getElementById("b1");
const matrixesButton = document.getElementById("b2");
const slarButton = document.getElementById("b3");

toMainButton.addEventListener("click", () => {
  window.location.href = '../pages/main.html'
});

determinatorsButton.addEventListener("click", () => {
  window.location.href = '../pages/determinators.html'
});

matrixesButton.addEventListener("click", () => {
  window.location.href = '../pages/matrixes.html'
});

slarButton.addEventListener("click", () => {
  window.location.href = '../pages/slar.html'
});
