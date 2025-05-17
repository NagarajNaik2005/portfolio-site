
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
});

// Simple theme toggle
function toggleTheme() {
  document.body.classList.toggle("bg-white");
  document.body.classList.toggle("bg-gray-900");
  document.body.classList.toggle("text-black");
  document.body.classList.toggle("text-white");
}
