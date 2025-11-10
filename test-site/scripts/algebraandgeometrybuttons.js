// const userButton = document.getElementById("userButton");
// const aiAssistantbutton = document.getElementById("asAssistantButton");
// const aboutUsButton = document.getElementById("aboutUsButton");
// const aboutStudyButton = document.getElementById("aboutStudyButton");
const toMainButton = document.getElementById("mainbutton");
const backButton = document.getElementById("backbtn");

const determinatorsButton = document.getElementById("b1");
const matrixesButton = document.getElementById("b2");
const slarButton = document.getElementById("b3");
// const vectorAlgebraButton = document.getElementById("b4");
// const linearSpaceButton = document.getElementById("b5");
// const lineOnAPlaneButton = document.getElementById("b6");
// const secondGradeLinesOnPlaneButton = document.getElementById("b7");
// const lineAndPlaneInSpaceButton = document.getElementById("b8");
// const secondGradePlanesInSpaceButton = document.getElementById("b9");



toMainButton.addEventListener("click", () => {
  window.location.href = '../pages/main.html'
});

backButton.addEventListener("click", () => { 
  window.history.back();
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
