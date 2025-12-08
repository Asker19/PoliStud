const toMainButton = document.getElementById("mainbutton");

let player;

const initialVideoId = 'SYX7QHfwhDs';
const initialThemeId = 'theme1';

window.onYouTubeIframeAPIReady = () => {
  player = new YT.Player('player', {
    height: '467',
    width: '830',
    videoId: 'SYX7QHfwhDs',
    events: {
      onReady: onPlayerReady
    }
  });
};

const ytScript = document.createElement("script");
ytScript.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(ytScript);

toMainButton.addEventListener("click", () => {
  window.location.href = '../../../pages/main.html';
});

const conspectBtn = document.getElementById("genconspectbutton");
const pdf = document.getElementById("pdf");

conspectBtn.addEventListener("click", () => {
  pdf.style.display = "block";  
  conspectBtn.style.display = "none"; 
});

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

        img.src = `https://img.youtube.com/vi/${currentVideoId}/hqdefault.jpg`;
        span.textContent = currentVideoTitle;

        document.querySelectorAll(".theme").forEach(t => t.style.display = "none");

        let themeId = btn.dataset.theme;
        if (newVideoId === initialVideoId) themeId = initialThemeId;

        if (themeId) {
            const theme = document.getElementById(themeId);
            if (theme) theme.style.display = "block";
        }
    });
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