const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
let btncontainer = document.getElementById("buttons");
let currentAudio = null;


sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds(); // stop any playing sound
    const audio = new Audio(`sounds/${sound}.mp3`);
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
