// const userButton = document.getElementById("userButton");
// const aiAssistantbutton = document.getElementById("asAssistantButton");
// const aboutUsButton = document.getElementById("aboutUsButton");
// const aboutStudyButton = document.getElementById("aboutStudyButton");

const toMainButton = document.getElementById("mainbutton");
const backButton = document.getElementById("backbtn");

const numberLogicsButton = document.getElementById("numberlogicsbutton");
const algorithmStructuresButton = document.getElementById("algorithmstructuresbutton");
const CProgramming = document.getElementById("cprogramming");
// const b4 = document.getElementById("b4");



toMainButton.addEventListener("click", () => {
  window.location.href = '../pages/main.html'
});

backButton.addEventListener("click", () => { 
  window.history.back();
});



numberLogicsButton.addEventListener("click", () => {
  window.location.href = '../pages/numberlogicsbutton.html'
});

algorithmStructuresButton.addEventListener("click", () => {
  window.location.href = '../pages/algorithmstructuresbutton.html'
});

CProgramming.addEventListener("click", () => {
  window.location.href = '../pages/cprogramming.html'
});

/* b4.addEventListener("click", () => {
  window.location.href = '../pages/.html'
}); */
