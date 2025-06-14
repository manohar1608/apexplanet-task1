function playSoundAndOpen(url) {
  const sound = document.getElementById('click-sound');
  sound.play();

  // Confetti burst 🎉
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    window.open(url, '_blank');
  }, 200);
}

// Show/hide back-to-top button
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// Alert button function
document.getElementById("alertBtn").addEventListener("click", function () {
  alert("searching for more movies");
});
