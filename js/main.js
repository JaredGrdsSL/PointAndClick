document.getElementById('mainTitle').innerText = "Haunt 'em John!";
document.getElementById('tilemapImg').setAttribute('draggable', false);
document.getElementById('playerImg').setAttribute('draggable', false);

const player = document.getElementById('player');
const gameWindow = document.getElementById('gameWindow');
const door1Audio = document.getElementById('door1Audio');
const door2Audio = document.getElementById('door2Audio');
const dialogueBox = document.getElementById('dialogueBox');
const playerOffset = 8;

dialogueBox.classList.add("disabled");

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; // mouse x
    var y = e.clientY - rect.top;  // mouse y
    player.style.left = x - playerOffset + "px";
    player.style.top = y - playerOffset + "px";
    dialogueBox.classList.remove("typed");

    switch (e.target.id) {
        case "door1":
            dialogueBox.classList.remove("disabled");
            dialogueBox.classList.add("typed");
            door1Audio.play();
            showSpeech("(You hear garbled nonsense)")
            break;
        case "door2":
            dialogueBox.classList.remove("disabled");
            dialogueBox.classList.add("typed");
            door2Audio.play();
            showSpeech("(You feel an overbearing presence telling you not to go in.)")
            break;
        default:
            dialogueBox.classList.add("disabled");
            break;
    }
}

function showSpeech(dialogue){
    dialogueBox.innerText = dialogue;
}