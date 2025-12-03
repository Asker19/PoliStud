// const userButton = document.getElementById("userButton");
// const aiAssistantbutton = document.getElementById("asAssistantButton");
// const aboutUsButton = document.getElementById("aboutUsButton");
// const aboutStudyButton = document.getElementById("aboutStudyButton");

const toMainButton = document.getElementById("mainbutton");
 
const graphTheoryButton = document.getElementById("graphbtn");
const mathLogicsButton = document.getElementById("mathlogicsbtn");
const combinatoricsButton = document.getElementById("combinatoricsbtn");
const setTheoryButton = document.getElementById("setsbtn");



toMainButton.addEventListener("click", () => {
  window.location.href = '../pages/main.html'
});



graphTheoryButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/discretemathematics/graphs.html'
});

mathLogicsButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/discretemathematics/mathlogics.html'
});

combinatoricsButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/discretemathematics/combinatorics.html'
});

setTheoryButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/discretemathematics/sets.html'
});
