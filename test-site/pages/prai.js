import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// Твій ключ і модель
const API_KEY = "AIzaSyADuFw-qNX7O0Ev2aWlS0Fk9-TFfCf_oY4";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Прив'язка кнопок
const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');
const inputBox = document.getElementById('msg');
const chatMessages = document.getElementById('chat-messages');

sendBtn.addEventListener('click', () => sendMessage(inputBox.value));
inputBox.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(inputBox.value); });
clearBtn.addEventListener('click', clearChat);

// Основна функція надсилання повідомлення
async function sendMessage(prompt) {
  if (!prompt) return;

  // Повідомлення користувача
  const userMsg = document.createElement('div');
  userMsg.classList.add('msg', 'user');
  userMsg.textContent = prompt;
  chatMessages.appendChild(userMsg);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  try {
    const result = await model.generateContent(prompt);
    const botMsg = document.createElement('div');
    botMsg.classList.add('msg');
    botMsg.textContent = result.response.text();
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    saveChat();
  } catch (err) {
    console.error("Gemini API error:", err);
  }

  inputBox.value = '';
}

// Збереження і завантаження історії
function saveChat() {
  localStorage.setItem('chatHistory', chatMessages.innerHTML);
}

function loadChat() {
  const history = localStorage.getItem('chatHistory');
  if (history) chatMessages.innerHTML = history;
}

function clearChat() {
  chatMessages.innerHTML = '';
  localStorage.removeItem('chatHistory');
}

window.onload = loadChat;
