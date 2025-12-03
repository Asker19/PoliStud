// const userButton = document.getElementById("userButton");
// const aiAssistantbutton = document.getElementById("asAssistantButton");
// const aboutUsButton = document.getElementById("aboutUsButton");
// const aboutStudyButton = document.getElementById("aboutStudyButton");

const toMainButton = document.getElementById("mainbutton");

const determinatorsButton = document.getElementById("b1");
const matrixesButton = document.getElementById("b2");
const slarButton = document.getElementById("b3");
const vectorAlgebraButton = document.getElementById("b4");
const linearSpaceButton = document.getElementById("b5");
const lineOnAPlaneButton = document.getElementById("b6");
const secondGradeLinesOnPlaneButton = document.getElementById("b7");
const lineAndPlaneInSpaceButton = document.getElementById("b8");
const secondGradePlanesInSpaceButton = document.getElementById("b9");



toMainButton.addEventListener("click", () => {
  window.location.href = '../pages/main.html'
});



determinatorsButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algebraandgeometry/viznach.html'
});

matrixesButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algebraandgeometry/matrixes.html'
});

slarButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algebraandgeometry/slar.html'
});

vectorAlgebraButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algebraandgeometry/vectoralgebra.html'
});

linearSpaceButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algebraandgeometry/linearn-dimensionalspace.html'
});

lineOnAPlaneButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algebraandgeometry/straightlineonaplane.html'
});

secondGradeLinesOnPlaneButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algebraandgeometry/second-orderalgebraiclinesontheplane.html'
});

lineAndPlaneInSpaceButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algebraandgeometry/lineandplaneinspace.html'
});

secondGradePlanesInSpaceButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algebraandgeometry/second-orderalgebraicsurfacesinspace.html'
});