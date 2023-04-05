document.getElementById('mainTitle').innerText = "Haunt 'em John!";

document.getElementById('overworldImg').draggable = false;
document.getElementById('playerImg').draggable = false;

const player = document.getElementById('player');
const gameWindow = document.getElementById('gameWindow');
const door1Audio = document.getElementById('door1Audio');
const door2Audio = document.getElementById('door2Audio');
const dialogueBox = document.getElementById('dialogueBox');
const playerOffset = 8;

const fridge = document.getElementById('fridge');
const exit = document.getElementById('exit');

let door3locked = true;
let inDoor3 = false;

let door3count = 0; // count how many times door 3 has been clicked




gameWindow.onclick = function (e) {
    if (!inDoor3) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; // mouse x
        var y = e.clientY - rect.top;  // mouse y
        player.style.left = x - playerOffset + "px";
        player.style.top = y - playerOffset + "px";
        dialogueBox.classList.remove("typed");

        document.getElementById('smallHouseImg').classList.add('disabled');

        exit.classList.remove('foreground');
        fridge.classList.remove('foreground');
        exit.classList.add('disabled');
        fridge.classList.add('disabled');

        switch (e.target.id) {
            case "door1":
                dialogueBox.classList.remove("disabled");
                dialogueBox.classList.add("typed");
                door1Audio.play();
                showSpeech("<You hear garbled nonsense>");
                break;
            case "door2":
                dialogueBox.classList.remove("disabled");
                dialogueBox.classList.add("typed");
                door2Audio.play();
                showSpeech("<You feel an overbearing presence telling you not to go in>");
                break;
            case "door3":
                door3count++;

                if (door3locked) {
                    dialogueBox.classList.remove("disabled");
                    dialogueBox.classList.add("typed");
                    showSpeech("<The door is locked>\r\n<Perhaps you can phase through?>");
                } else if (!door3locked) {
                    inDoor3 = true;
                    dialogueBox.classList.remove("disabled");
                    dialogueBox.classList.add("typed");
                    showSpeech("<Enter? (click again)>");
                }

                if (door3count > 0 && door3locked) {
                    door3locked = false;
                    inDoor3 = true;
                }
                break;
            case "treePrank":
                dialogueBox.classList.remove("disabled");
                dialogueBox.classList.add("typed");
                door2Audio.play();
                showSpeech("<Some teenager thought it would be a funny prank to plant\r\nsome trees in the middle of the road>");
                break;
            default:
                door3count = 0;
                inDoor3 = false;
                dialogueBox.classList.add("disabled");
                break;
        }
    } else if (inDoor3) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; // mouse x
        var y = e.clientY - rect.top;  // mouse y
        player.style.left = x - playerOffset + "px";
        player.style.top = y - playerOffset + "px";
        dialogueBox.classList.remove("typed");
        document.getElementById('smallHouseImg').classList.remove('disabled');

        exit.classList.remove('disabled');
        fridge.classList.remove('disabled');
        exit.classList.add('foreground');
        fridge.classList.add('foreground');

        player.style.top = 312 + "px";
        player.style.left = 390 + "px";



        switch (e.target.id) {
            case "exit":
                door3locked == true;
                inDoor3 = false;
                dialogueBox.classList.remove("disabled");
                dialogueBox.classList.add("typed");
                showSpeech("<Ready to leave? (click again)>");
                break;
            case "fridge":
                dialogueBox.classList.remove("disabled");
                dialogueBox.classList.add("typed");
                showSpeech("<It's filled with eggs, nothing else...>");
                break;
            default:
                door3count = 0;
                inDoor3 = true;
                dialogueBox.classList.add("disabled");
                break;
        }
    }
}

function showSpeech(dialogue) {
    dialogueBox.innerText = dialogue;
}