// const userButton = document.getElementById("userButton");
// const aiAssistantbutton = document.getElementById("asAssistantButton");
// const aboutUsButton = document.getElementById("aboutUsButton");
// const aboutStudyButton = document.getElementById("aboutStudyButton");

const toMainButton = document.getElementById("mainbutton");

const algebraAndGeometry = document.getElementById("algebraButton");
const algorithmizationButton = document.getElementById("algorithmizationButton");
const discreteMathButton = document.getElementById("discreteMathButton");



toMainButton.addEventListener("click", () => {
  window.location.href = '../pages/main.html'
});



algebraAndGeometry.addEventListener("click", () => {
  window.location.href = '../pages/algebraandgeometry.html'
});

algorithmizationButton.addEventListener("click", () => {
  window.location.href = '../pages/algorithmizationandprogramming.html'
});

discreteMathButton.addEventListener("click", () => {
  window.location.href = '../pages/discretemathematics.html'
});

import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "AIzaSyDXxL4d_VljcLA_SxyMb6j69gMDpsOjfUo";
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
  if (placeholder) placeholder.style.display = "block";
}

window.addEventListener("load", () => {
  const saved = localStorage.getItem('chatHistory');

  if (saved) {
    history = JSON.parse(saved);

    history.forEach(msg => {
      const el = createMsg(msg.text, msg.type);
      chatMessages.appendChild(el);
    });
  }
});

async function sendMessage(prompt) {
  if (!prompt || generating) return;
  generating = true;


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
  showPlaceholder();
});
