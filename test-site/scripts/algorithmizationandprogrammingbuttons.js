// const userButton = document.getElementById("userButton");
// const aiAssistantbutton = document.getElementById("asAssistantButton");
// const aboutUsButton = document.getElementById("aboutUsButton");
// const aboutStudyButton = document.getElementById("aboutStudyButton");

const toMainButton = document.getElementById("mainbutton");

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
  window.location.href = '../index.html'
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

charactersandcharacterstrings.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algorithmizationandprogramming/charactersandcharacterstrings.html';
});

functionsinc.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algorithmizationandprogramming/functionsinc.html';
});

workingwithfiles.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algorithmizationandprogramming/workingwithfilestheconceptofstreams.html';
});

structuresandassociacions.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algorithmizationandprogramming/structuresandassociations.html';
});

classesandobjects.addEventListener("click", () => {
  window.location.href = '../pages/subjects/algorithmizationandprogramming/classesandobjects.html';
});



import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "AIzaSyAQUp-uSSMKYKLTITKpHJgMWp2_O7i7qVE";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');
const inputBox = document.getElementById('msg');
const chatMessages = document.getElementById('chat-messages');
const placeholder = document.getElementById('chat-placeholder');

let generating = false;
let history = [];

function showPlaceholder() {
  if (!placeholder) return;

  const empty = history.length === 0;

  if (empty) {
    placeholder.style.display = "block";
  } else {
    placeholder.style.display = "none";
  }
}

function hidePlaceholder() {
  if (placeholder) placeholder.style.display = "none";
}

window.addEventListener("load", () => {
  const saved = localStorage.getItem('chatHistory');

  if (saved) {
    history = JSON.parse(saved);

    history.forEach(msg => {
      const el = createMsg(msg.text, msg.type);
      chatMessages.appendChild(el);
    });

    hidePlaceholder();

  } else {
    
    showPlaceholder();
  
  }
});

async function sendMessage(prompt) {
  if (!prompt || generating) return;
  generating = true;

  hidePlaceholder();

  const userMsg = createMsg(prompt, 'user');
  chatMessages.appendChild(userMsg);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  history.push({ text: prompt, type: "user" });
  saveHistory();

  inputBox.value = '';

  try {
    const result = await model.generateContent(prompt);
    const botText = result.response.text();

    const botMsg = createMsg(botText, 'bot');
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    history.push({ text: botText, type: "bot" });
    saveHistory();

  } catch (err) {
    console.error(err);
  }

  generating = false;
}

function saveHistory() {
  localStorage.setItem("chatHistory", JSON.stringify(history));
}

function createMsg(text, type) {
  const msg = document.createElement('div');
  msg.classList.add('msg', type);
  msg.textContent = text;

  msg.offsetWidth;
  msg.style.animation = 'fadeIn 0.3s forwards';

  return msg;
}

sendBtn.addEventListener('click', () => sendMessage(inputBox.value));

inputBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage(inputBox.value);
});

clearBtn.addEventListener('click', () => {
  chatMessages.innerHTML = '';
  history = [];
  localStorage.removeItem('chatHistory');

  chatMessages.appendChild(placeholder);

  showPlaceholder();
});