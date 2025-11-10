// const userButton = document.getElementById("userButton");
// const aiAssistantbutton = document.getElementById("asAssistantButton");
// const aboutUsButton = document.getElementById("aboutUsButton");
// const aboutStudyButton = document.getElementById("aboutStudyButton");
const toMainButton = document.getElementById("mainbutton");
const backButton = document.getElementById("backbtn");
const graphTheoryButton = document.getElementById("graphbtn");
const mathLogicsButton = document.getElementById("mathlogicsbtn");
const combinatoricsButton = document.getElementById("combinatoricsbtn");

toMainButton.addEventListener("click", () => {
  window.location.href = '../pages/main.html'
});

backButton.addEventListener("click", () => { 
  window.history.back();
});

/*
determinatorsButton.addEventListener("click", () => {
  window.location.href = '../pages/determinators.html'
});

matrixesButton.addEventListener("click", () => {
  window.location.href = '../pages/matrixes.html'
});

slarButton.addEventListener("click", () => {
  window.location.href = '../pages/slar.html'
});
*/
