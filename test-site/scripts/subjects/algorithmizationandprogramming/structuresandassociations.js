
const toMainButton = document.getElementById("mainbutton");
const backButton = document.getElementById("backbtn");

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

toMainButton.addEventListener("click", () => {
  window.location.href = '../../../pages/main.html'
});

backButton.addEventListener("click", () => { 
  window.history.back();
});

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '467',
    width: '830',
    videoId: 'dB2V9f0R9uk',
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
    const currentVideoTitle = player.getVideoData().title;

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

const genBtn = document.getElementById("genconspectbutton");
const conspect = document.getElementById("conspect");
const API_KEY = "AIzaSyAj5Ti6jeCDYTDKZldn0dRCKJBVtxv1r20";

genBtn.addEventListener("click", async () => {
  if (!player) {
    conspect.textContent = "Плеєр ще не готовий!";
    return;
  }

  const currentVideoId = player.getVideoData().video_id;
  const videoUrl = `https://www.youtube.com/watch?v=${currentVideoId}`;

  conspect.textContent = "Генерація конспекту...";

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({contents: [{parts: [{text: `Проаналізуй це відео: ${videoUrl}\nЗроби детальний конспект українською мовою з пунктами та поясненнями.`}]}]})
      }
    );

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Помилка: пустий результат";

    conspect.innerHTML = text.replace(/\n/g, "<br>");
  } catch (err) {
    conspect.textContent = "Помилка під час генерації конспекту.";
    console.error(err);
  }
});

