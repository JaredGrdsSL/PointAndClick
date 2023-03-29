document.getElementById('mainTitle').innerText = "Haunt 'em John!";

document.getElementById('tilemapImg').draggable = false;
document.getElementById('playerImg').draggable = false;


const player = document.getElementById('player');
const gameWindow = document.getElementById('gameWindow');
const door1Audio = document.getElementById('door1Audio');
const door2Audio = document.getElementById('door2Audio');
const dialogueBox = document.getElementById('dialogueBox');
const playerOffset = 8;

let door3locked = true;
let door3count = 0; // count how many times door 3 has been clicked


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
            showSpeech("<You hear garbled nonsense>")
            break;
        case "door2":
            dialogueBox.classList.remove("disabled");
            dialogueBox.classList.add("typed");
            door2Audio.play();
            showSpeech("<You feel an overbearing presence telling you not to go in>")
            break;
        case "door3":
            if (door3locked == true) {
                dialogueBox.classList.remove("disabled");
                dialogueBox.classList.add("typed");
                showSpeech("<The door is locked>");
            }
            break;
        case "treePrank":
            dialogueBox.classList.remove("disabled");
            dialogueBox.classList.add("typed");
            door2Audio.play();
            showSpeech("<Some teenager thought it would be a funny prank to plant\r\nsome trees in the middle of the road>")
            break;
        default:
            dialogueBox.classList.add("disabled");
            break;
    }
}

function showSpeech(dialogue) {
    dialogueBox.innerText = dialogue;
}