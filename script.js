<script>
  const slider = document.getElementById("shortsSlider");
  const arrowUp = document.getElementById("arrowUp");
  const arrowDown = document.getElementById("arrowDown");
  const cards = document.querySelectorAll(".shorts-card");

  let index = 0;

  const updateSlider = () => {
    slider.style.transform = `translateY(${-(index * (cards[0].offsetHeight + 40))}px)`;
  };

  // Navigation
  arrowDown.addEventListener("click", () => {
    if (index < cards.length - 1) {
      index++;
      updateSlider();
    }
  });

  arrowUp.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" && index < cards.length - 1) {
      index++;
      updateSlider();
    } else if (e.key === "ArrowUp" && index > 0) {
      index--;
      updateSlider();
    }
  });

  document.addEventListener("wheel", (e) => {
    if (e.deltaY > 0 && index < cards.length - 1) {
      index++;
      updateSlider();
    } else if (e.deltaY < 0 && index > 0) {
      index--;
      updateSlider();
    }
  });

  // Toggle Description
  const toggleDesc = (el) => {
    el.previousElementSibling.classList.toggle("expanded");
    el.innerText = el.innerText === "...more" ? "Show less" : "...more";
  };

  // Comments
  const overlay = document.getElementById("overlay");
  const commentsBody = document.getElementById("commentsBody");
  const commentInput = document.getElementById("commentInput");
  const commentBtns = document.querySelectorAll(".action-btn.comment");

  commentBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      overlay.style.display = "flex";
    })
  );

  const closeComments = () => {
    overlay.style.display = "none";
  };

  const addComment = () => {
    const text = commentInput.value.trim();
    if (text !== "") {
      const div = document.createElement("div");
      div.className = "comment";
      div.innerHTML = `
        <img src="https://via.placeholder.com/30">
        <div class="comment-content">
          <div class="comment-user">You</div>
          <div class="comment-text">${text}</div>
          <div class="comment-emojis">
            <span>👍</span><span>❤️</span><span>😂</span>
          </div>
        </div>
      `;
      commentsBody.prepend(div);
      commentInput.value = "";
    }
  };

  commentInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addComment();
    }
  });
</script>
