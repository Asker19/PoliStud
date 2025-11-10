// const userButton = document.getElementById("userButton");
// const aiAssistantbutton = document.getElementById("asAssistantButton");
// const aboutUsButton = document.getElementById("aboutUsButton");
// const aboutStudyButton = document.getElementById("aboutStudyButton");

const toMainButton = document.getElementById("mainbutton");
const backButton = document.getElementById("backbtn");

const graphTheoryButton = document.getElementById("graphbtn");
/* const mathLogicsButton = document.getElementById("mathlogicsbtn"); */
const combinatoricsButton = document.getElementById("combinatoricsbtn");
const setTheoryButton = document.getElementById("setsbtn");



toMainButton.addEventListener("click", () => {
  window.location.href = '../pages/main.html'
});

backButton.addEventListener("click", () => { 
  window.history.back();
});



graphTheoryButton.addEventListener("click", () => {
  window.location.href = '../pages/graphs.html'
});

/*

mathLogicsButton.addEventListener("click", () => {
  window.location.href = '../pages/mathlogics.html'
});

*/

combinatoricsButton.addEventListener("click", () => {
  window.location.href = '../pages/combinatorics.html'
});

setTheoryButton.addEventListener("click", () => {
  window.location.href = '../pages/sets.html'
});
