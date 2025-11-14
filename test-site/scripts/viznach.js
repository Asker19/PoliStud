const toMainButton = document.getElementById("mainbutton");
const backButton = document.getElementById("backbtn");

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

toMainButton.addEventListener("click", () => {
  window.location.href = '../pages/main.html'
});

backButton.addEventListener("click", () => { 
  window.history.back();
});

// Ця функція викликається API, коли він готовий
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

// Функція, яка спрацьовує коли плеєр готовий

function onPlayerReady(event) {
  event.target.pauseVideo();
  event.target.setVolume(30);
}

document.querySelectorAll(".video-btn").forEach(btn => {
  const id = btn.dataset.video;
  const img = document.createElement("img");
  const title = btn.dataset.title;
  
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
    
  });
});
