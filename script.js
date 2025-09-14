const searchBar = document.querySelector(".search");
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// Toggle search input on mobile
searchBtn.addEventListener("click", (e) => {
  if (window.innerWidth <= 480) {
    e.preventDefault();
    searchInput.classList.toggle("active");
    if (searchInput.classList.contains("active")) {
      searchInput.focus();
    }
  }
});

// Hide input if click outside on mobile
document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 480 &&
    !searchBar.contains(e.target) &&
    searchInput.classList.contains("active")
  ) {
    searchInput.classList.remove("active");
  }
});

// Prevent propagation when clicking inside search
searchBar.addEventListener("click", (e) => {
  if (window.innerWidth <= 480) {
    e.stopPropagation();
  }
});


// Hide input if click outside on mobile
document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 480 &&
    !searchBar.contains(e.target) &&
    searchInput.classList.contains("active")
  ) {
    searchInput.classList.remove("active");
  }
});

// ➕ Create Dropdown Toggle
const createBtn = document.getElementById("createBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
createBtn.addEventListener("click", () => {
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});
window.addEventListener("click", (e) => {
  if (!e.target.closest(".create-dropdown")) {
    dropdownMenu.style.display = "none";
  }
});

// Highlight clicked category
const chips = document.querySelectorAll(".chip");
chips.forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelector(".chip.active")?.classList.remove("active");
    chip.classList.add("active");
  });
});

const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const content = document.querySelector(".content");

menuBtn.addEventListener("click", () => {
  drawer.classList.toggle("active");
  content.classList.toggle("shifted");
});


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

// Toggle Description
function toggleDesc(el) {
  el.previousElementSibling.classList.toggle('expanded');
  el.innerText = el.innerText === '...more' ? 'Show less' : '...more';
}

// Comments
const overlay = document.getElementById('overlay');
const commentsBody = document.getElementById('commentsBody');
const commentInput = document.getElementById('commentInput');
const commentBtns = document.querySelectorAll('.action-btn.comment');

commentBtns.forEach((btn) => btn.addEventListener('click', () => {
  overlay.style.display = 'flex';
}));

function closeComments() {
  overlay.style.display = 'none';
}

function addComment() {
  if (commentInput.value.trim() !== '') {
    const div = document.createElement('div');
    div.className = 'comment';
    div.innerHTML = `<img src="https://via.placeholder.com/30"><div class="comment-content"><div class="comment-user">You</div><div class="comment-text">${commentInput.value}</div><div class="comment-emojis"><span>👍</span><span>❤️</span><span>😂</span></div></div>`;
    commentsBody.prepend(div);
    commentInput.value = '';
  }
}

commentInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addComment();
  }
});
