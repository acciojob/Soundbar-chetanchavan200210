const sounds= ["applause","boo","gasp","tada","victory","wrong"];
let btncontainer=document.getElementById("buttons")
let currentAudio=null;
sounds.forEach("sound" =>{
	const btn = document.createElement("button");
	btn.classList.add("btn");
	btn.innerText=sound;

	btn.addEventListener("click",()=>{
stopSounds();
		const audio = new Audio(`sounds/${sound}.mp3`);
		audio.play();
		currentAudio =audio;
	}
	});

btncontainer.appendChild(btn);
});

const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText="stop";


stopBtn.addEventListener("click",()=> {
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime=0;
	}
	
});
buttonsContainer.appendChild(stopBtn);

    // Stop any playing sound before starting a new one
    function stopSounds() {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }