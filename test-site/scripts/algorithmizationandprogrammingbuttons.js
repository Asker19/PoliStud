// const userButton = document.getElementById("userButton");
// const aiAssistantbutton = document.getElementById("asAssistantButton");
// const aboutUsButton = document.getElementById("aboutUsButton");
// const aboutStudyButton = document.getElementById("aboutStudyButton");

const toMainButton = document.getElementById("mainbutton");
const backButton = document.getElementById("backbtn");

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
// const b4 = document.getElementById("b4");



toMainButton.addEventListener("click", () => {
  window.location.href = '../pages/main.html'
});

backButton.addEventListener("click", () => { 
  window.history.back();
});



b1.addEventListener("click", () => {
  window.location.href = '../pages/.html'
});

b2.addEventListener("click", () => {
  window.location.href = '../pages/.html'
});

b3.addEventListener("click", () => {
  window.location.href = '../pages/.html'
});

/* b4.addEventListener("click", () => {
  window.location.href = '../pages/.html'
}); */
