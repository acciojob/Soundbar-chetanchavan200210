const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
let btncontainer = document.getElementById("buttons");
let currentAudio = null;

// Create sound buttons + <audio> elements
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  // Create hidden <audio> element for Cypress test
  const audio = document.createElement("audio");
  audio.src = `sounds/${sound}.mp3`;
  audio.setAttribute("preload", "auto");
  audio.style.display = "none"; // invisible but in DOM
  btncontainer.appendChild(audio);

  btn.addEventListener("click", () => {
    stopSounds();
    audio.currentTime = 0;
    audio.play();
    currentAudio = audio;
  });

  btncontainer.appendChild(btn);
});

// Create Stop button separately
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});

btncontainer.appendChild(stopBtn);

// Function to stop currently playing sound
function stopSounds() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}
