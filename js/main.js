document.getElementById('mainTitle').innerText = "Point and click adventure";
document.getElementById('tilemapImg').setAttribute('draggable', false);
document.getElementById('playerImg').setAttribute('draggable', false);

const player = document.getElementById('player');
const gameWindow = document.getElementById('gameWindow');

const playerOffset = 8;

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; // mouse x
    var y = e.clientY - rect.top;  // mouse y
    player.style.left = x - playerOffset + "px";
    player.style.top = y - playerOffset + "px";

    // console.log(e.target.id);

    switch (e.target.id) {
        case "door1":
            console.log("*garbled nonsense*");
            break;
        case "door2":
            console.log("DON'T come in. PRIVATE property!");
            break;
        default:
            console.log("Nothing important");
            break;
    }
    // console.log(x);
}