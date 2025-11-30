const toMainButton = document.getElementById("mainbutton");
const backButton = document.getElementById("backbtn");

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

toMainButton.addEventListener("click", () => {
  window.location.href = '../../../pages/main.html';
});

backButton.addEventListener("click", () => { 
  window.history.back();
});

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '467',
    width: '830',
    videoId: '8s5OEx9xJBo',
    events: {
      'onReady': onPlayerReady
    }
  });
}

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

const API_KEY = "AIzaSyADuFw-qNX7O0Ev2aWlS0Fk9-TFfCf_oY4";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');
const inputBox = document.getElementById('msg');
const chatMessages = document.getElementById('chat-messages');

let generating = false;

window.addEventListener("load", () => {
  const history = localStorage.getItem('chatHistory');
  if (history) chatMessages.innerHTML = history;
});

sendBtn.addEventListener('click', async () => {
  if (generating) return;
  const prompt = inputBox.value;
  if (!prompt) return;

  generating = true;

  const userMsg = document.createElement('div');
  userMsg.classList.add('msg', 'user');
  userMsg.textContent = prompt;
  chatMessages.appendChild(userMsg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  inputBox.value = '';

  try {
    const result = await model.generateContent(prompt);

    const botMsg = document.createElement('div');
    botMsg.classList.add('msg');
    botMsg.textContent = result.response.text();
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    localStorage.setItem('chatHistory', chatMessages.innerHTML);
  } catch (err) {}

  generating = false;
});

inputBox.addEventListener('keydown', async (e) => {
  if (e.key !== 'Enter' || generating) return;

  const prompt = inputBox.value;
  if (!prompt) return;

  generating = true;

  const userMsg = document.createElement('div');
  userMsg.classList.add('msg', 'user');
  userMsg.textContent = prompt;
  chatMessages.appendChild(userMsg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  inputBox.value = '';

  try {
    const result = await model.generateContent(prompt);

    const botMsg = document.createElement('div');
    botMsg.classList.add('msg');
    botMsg.textContent = result.response.text();
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    localStorage.setItem('chatHistory', chatMessages.innerHTML);
  } catch (err) {}

  generating = false;
});

clearBtn.addEventListener('click', () => {
  chatMessages.innerHTML = '';
  localStorage.removeItem('chatHistory');
});

const botMsg = document.createElement('div');
botMsg.classList.add('msg');
botMsg.textContent = 'Я - вбудований чат-помічник, чим я можу допомогти?';
chatMessages.appendChild(botMsg);
chatMessages.scrollTop = chatMessages.scrollHeight;
