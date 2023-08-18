function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    updateList(key.innerHTML)
    displayKey(key)
    updateScoreboard(pressedKeysList);

}
window.addEventListener('keydown', playSound);


const pressedKeysList = []
function updateList(key){
    pressedKeysList.push(key)
    console.log(pressedKeysList)
    const buttonList = document.getElementById('lista');
    buttonList.textContent = pressedKeysList.join(', ');
}


window.addEventListener('keyup', function(e) { //Remove playing tag
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (key !== null) {
        key.classList.remove('playing');
    }
});


function displayKey(key){
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


function updateScoreboard(pressedKeysList) {
    const output = document.getElementById('scoreboardKeys');
    const outputSum = document.getElementById('scoreboardSummary');
    const outputFav = document.getElementById('scoreboardFavorite');

    const uniqueKeys = [...new Set(pressedKeysList)]; // Usunięcie duplikatów
    const keyCounts = {};
    for (const key of uniqueKeys) {
      keyCounts[key] = pressedKeysList.filter(k => k === key).length;
    }
    let outputHTML = '';
    let maxCount = 0; 
    let favKey = '';

    for (const key in keyCounts) {
      outputHTML += `${key}: ${keyCounts[key]}<br>`;
      if (keyCounts[key] > maxCount) {
        maxCount = keyCounts[key];
        favKey = key;
      }
    }

    output.innerHTML = outputHTML;
    outputSum.innerHTML = 'Summary: '+ pressedKeysList.length;
    outputFav.innerHTML = 'Favorite: '+ favKey;
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