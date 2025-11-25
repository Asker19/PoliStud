// ------------------- YouTube -------------------
const toMainButton = document.getElementById("mainbutton");

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

toMainButton.addEventListener("click", () => {
  window.location.href = '../../../pages/main.html';
});

// робимо глобальною
window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player('player', {
    height: '467',
    width: '830',
    videoId: '8s5OEx9xJBo', // початкове відео
    events: {
      'onReady': onPlayerReady
    }
  });
}

// теж можна глобально, але не обов'язково
function onPlayerReady(event) {
  event.target.pauseVideo();
  event.target.setVolume(30);
}

document.querySelectorAll(".video-btn").forEach(btn => {
  const id = btn.dataset.video;
  const title = btn.dataset.title;

  const img = document.createElement("img");
  img.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  const span = document.createElement("span");
  span.textContent = title;

  btn.appendChild(img);
  btn.appendChild(span);

  btn.addEventListener("click", () => {
    const currentVideoId = player.getVideoData().video_id;
    const currentVideoTitle = player.getVideoData().title || "Error: failed loading title";

    const newVideoId = btn.dataset.video;

    player.loadVideoById(newVideoId);

    btn.dataset.video = currentVideoId;
    btn.dataset.title = currentVideoTitle;

    const img = btn.querySelector("img");
    img.src = `https://img.youtube.com/vi/${currentVideoId}/hqdefault.jpg`;

    const span = btn.querySelector("span");
    span.textContent = currentVideoTitle;
  });
});



import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// ------------------- Gemini Chat -------------------
const API_KEY = "AIzaSyADuFw-qNX7O0Ev2aWlS0Fk9-TFfCf_oY4";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');
const inputBox = document.getElementById('msg');
const chatMessages = document.getElementById('chat-messages');

let generating = false;

// ------------------- ІСТОРІЯ ЧАТУ (JSON) -------------------
let history = [];

// Завантаження
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

// ------------------- Відправка -------------------
async function sendMessage(prompt) {
  if (!prompt || generating) return;
  generating = true;

  // юзер повідомлення
  const userMsg = createMsg(prompt, 'user');
  chatMessages.appendChild(userMsg);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  history.push({ text: prompt, type: "user" });
  saveHistory();

  inputBox.value = '';

  try {
    const result = await model.generateContent(prompt);
    const botText = result.response.text();

    // бот повідомлення
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

// ------------------- Збереження -------------------
function saveHistory() {
  localStorage.setItem("chatHistory", JSON.stringify(history));
}

// ------------------- Створення елементів -------------------
function createMsg(text, type) {
  const msg = document.createElement('div');
  msg.classList.add('msg', type);
  msg.textContent = text;

  msg.offsetWidth;
  msg.style.animation = 'fadeIn 0.3s forwards';

  return msg;
}

// ------------------- Події -------------------
sendBtn.addEventListener('click', () => sendMessage(inputBox.value));

inputBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage(inputBox.value);
});

clearBtn.addEventListener('click', () => {
  chatMessages.innerHTML = '';
  history = [];
  localStorage.removeItem('chatHistory');
});
