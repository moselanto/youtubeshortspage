// ────────── Search Bar (mobile toggle) ──────────
const searchBar = document.querySelector(".search");
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", (e) => {
  if (window.innerWidth <= 480) {
    e.preventDefault();
    searchInput.classList.toggle("active");
    if (searchInput.classList.contains("active")) searchInput.focus();
  }
});

document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 480 &&
    !searchBar.contains(e.target) &&
    searchInput.classList.contains("active")
  ) {
    searchInput.classList.remove("active");
  }
});

searchBar.addEventListener("click", (e) => {
  if (window.innerWidth <= 480) e.stopPropagation();
});

// ────────── Create Dropdown ──────────
const createBtn = document.getElementById("createBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

createBtn.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".create-dropdown")) dropdownMenu.style.display = "none";
});

// ────────── Highlight Active Chip ──────────
const chips = document.querySelectorAll(".chip");
chips.forEach((chip) =>
  chip.addEventListener("click", () => {
    document.querySelector(".chip.active")?.classList.remove("active");
    chip.classList.add("active");
  })
);

// ────────── Sidebar Drawer Toggle ──────────
const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const content = document.querySelector(".content");

menuBtn.addEventListener("click", () => {
  drawer.classList.toggle("active");
  content.classList.toggle("shifted");
});

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
      </div>`;
    commentsBody.prepend(div);
    commentInput.value = "";
  }
}

commentInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addComment();
});
