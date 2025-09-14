// ────────── Scroll-Snap Slider Logic (disabled) ──────────
// Commented out outdated slider control to prevent competing logic
/*
const slider = document.getElementById('shortsSlider');
const arrowUp = document.getElementById('arrowUp');
const arrowDown = document.getElementById('arrowDown');
const cards = document.querySelectorAll('.shorts-card');
let index = 0;

function updateSlider() {
  slider.style.transform = `translateY(${-index * (cards[0].offsetHeight + 40)}px)`;
}

arrowDown.addEventListener('click', () => {
  if (index < cards.length - 1) {
    index++;
    updateSlider();
  }
});
arrowUp.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' && index < cards.length - 1) {
    index++;
    updateSlider();
  } else if (e.key === 'ArrowUp' && index > 0) {
    index--;
    updateSlider();
  }
});
document.addEventListener('wheel', (e) => {
  if (e.deltaY > 0 && index < cards.length - 1) {
    index++;
    updateSlider();
  } else if (e.deltaY < 0 && index > 0) {
    index--;
    updateSlider();
  }
});
*/

// ────────── Description Toggle ──────────
function toggleDesc(el) {
  el.previousElementSibling.classList.toggle("expanded");
  el.innerText = el.innerText === "...more" ? "Show less" : "...more";
}

// ────────── Comments Panel ──────────
const overlay = document.getElementById("overlay");
const commentsBody = document.getElementById("commentsBody");
const commentInput = document.getElementById("commentInput");
const commentBtns = document.querySelectorAll(".action-btn.comment");

commentBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    overlay.style.display = "flex";
  })
);

function closeComments() {
  overlay.style.display = "none";
}

function addComment() {
  if (commentInput.value.trim() !== "") {
    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = `
      <img src="https://via.placeholder.com/30">
      <div class="comment-content">
        <div class="comment-user">You</div>
        <div class="comment-text">${commentInput.value}</div>
        <div class="comment-emojis">
          <span>👍</span><span>❤️</span><span>😂</span>
        </div>
      </div>`;
    commentsBody.prepend(div);
    commentInput.value = "";
  }
}

commentInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addComment();
});



  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var players = {}; // Store YT.Player instances by iframe/container id

  // 2. Function called by YouTube API when ready
  function onYouTubeIframeAPIReady() {
    // Assuming your video containers have class 'yt-player'
    document.querySelectorAll('.yt-player').forEach(function(container) {
      var videoId = container.getAttribute('data-video-id');
      var playerId = container.id;

      players[playerId] = new YT.Player(playerId, {
        videoId: videoId,
        playerVars: {
          'autoplay': 1,
          'mute': 1,
          'controls': 0,
          'loop': 1,
          'playlist': videoId, // loop requires playlist param same as videoId
          'modestbranding': 1,
          'rel': 0,
          'playsinline': 1
        },
        events: {
          'onReady': function(event) {
            event.target.playVideo();
          },
          'onStateChange': function(event) {
            if (event.data === YT.PlayerState.ENDED) {
              event.target.playVideo(); // Loop the video manually
            }
          }
        }
      });
    });
  }


