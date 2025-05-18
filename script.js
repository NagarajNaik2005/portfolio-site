window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

function toggleTheme() {
  document.body.classList.toggle("bg-gray-900");
  document.body.classList.toggle("bg-white");
  document.body.classList.toggle("text-white");
  document.body.classList.toggle("text-black");
}

const typingText = document.getElementById("typing-text");
const phrases = ["Front-End Developer", "CSE Student", "Web Enthusiast"];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  let current = phrases[i];
  if (!isDeleting) {
    typingText.textContent = current.slice(0, ++j);
    if (j === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingText.textContent = current.slice(0, --j);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();