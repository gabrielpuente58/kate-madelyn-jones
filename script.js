const correctPassword = "05/10/2025";
const modal = document.getElementById("passwordModal");
const scrapbook = document.getElementById("scrapbook");
const music = document.getElementById("background-music");

function unlockScrapbook() {
  const input = document.getElementById("passwordInput").value;
  if (input === correctPassword) {
    modal.style.display = "none";
    scrapbook.style.display = "block";
    music.play();
  } else {
    alert("Incorrect passcode. Please try again.");
  }
}
