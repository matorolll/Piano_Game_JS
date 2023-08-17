function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    UpdateList(key.innerHTML)
    DisplayKey(key)
}
window.addEventListener('keydown', playSound);


const pressedKeys = []
function UpdateList(key){
    pressedKeys.push(key)
    console.log(pressedKeys)
    const buttonList = document.getElementById('lista');
    buttonList.textContent = pressedKeys.join(', ');
}


window.addEventListener('keyup', function(e) { //Remove playing tag
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (key !== null) {
        key.classList.remove('playing');
    }
});


function DisplayKey(key){
    const textDiv = document.createElement('div');
    textDiv.classList.add('additional-text');
    textDiv.textContent = key.innerHTML;

    textDiv.style.position = 'relative';
    textDiv.style.top = '-100px';
    textDiv.style.textAlign = 'center';
    textDiv.style.fontSize = '16px';
    textDiv.style.fontWeight = 'bold';
    textDiv.style.color = 'white';

    const keyRect = key.getBoundingClientRect();
    textDiv.style.position = 'absolute';
    textDiv.style.top = `${keyRect.top - 30}px`;
    textDiv.style.left = `${keyRect.left + 15}px`;
    document.body.appendChild(textDiv);

    textDiv.offsetHeight;
    textDiv.style.transition = 'top 2s ease-out, opacity 1s ease-out';
    textDiv.style.top = `${keyRect.top - 100}px`;
    textDiv.style.opacity = '0';
    
    textDiv.addEventListener('transitionend', () => {
      document.body.removeChild(textDiv);
    });
}


function wypiszWLosowymMiejscu() {
    if (pressedKeys.length > 0) {
      const pierwszeSlowo = pressedKeys.shift();
      console.log("Co 2 sekund!");

      const div = document.createElement("div");
      div.textContent = pierwszeSlowo;
      div.style.position = "absolute";
      div.style.color = "#FFFFFF";
      div.style.left = Math.random() * (window.innerWidth - 100) + "px"; 
      div.style.top = Math.random() * (window.innerHeight - 50) + "px"; 
  
      document.body.appendChild(div);
    }
    setTimeout(wypiszWLosowymMiejscu, 10);
  }
  //wypiszWLosowymMiejscu();
  // .additional-text {
  //   position: relative;
  //   top: -100px;
  //   text-align: center;
  //   font-size: 16px;
  //   font-weight: bold;
  //   color:white;
  // }