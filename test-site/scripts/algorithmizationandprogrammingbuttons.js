// const userButton = document.getElementById("userButton");
// const aiAssistantbutton = document.getElementById("asAssistantButton");
// const aboutUsButton = document.getElementById("aboutUsButton");
// const aboutStudyButton = document.getElementById("aboutStudyButton");

const toMainButton = document.getElementById("mainbutton");
const backButton = document.getElementById("backbtn");

const numberLogicsButton = document.getElementById("b1");
const algorithmStructuresButton = document.getElementById("b2");
const CProgramming = document.getElementById("b3");
const managementoperators = document.getElementById("b4");
const processingonedimensionalarrays = document.getElementById("b5");
const processingtwodimensionalarrays = document.getElementById("b6");
const charactersandcharacterstrings = document.getElementById("b7");
const functionsinc = document.getElementById("b8");
const workingwithfiles = document.getElementById("b9");
const structuresandassociacions = document.getElementById("b10");
const classesandobjects = document.getElementById("b11");



toMainButton.addEventListener("click", () => {
  window.location.href = '../pages/main.html'
});

backButton.addEventListener("click", () => { 
  window.history.back();
});



numberLogicsButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algorithmizationandprogramming/numberlogics.html';
});

algorithmStructuresButton.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algorithmizationandprogramming/algorithmstructures.html';
});

CProgramming.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algorithmizationandprogramming/cprogramming.html';
});

managementoperators.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algorithmizationandprogramming/managementoperators.html';
}); 

processingonedimensionalarrays.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algorithmizationandprogramming/processingonedimensionalarrays.html';
}); 

processingtwodimensionalarrays.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algorithmizationandprogramming/processingtwodimensionalarrays.html';
});

b.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algorithmizationandprogramming/.html';
});