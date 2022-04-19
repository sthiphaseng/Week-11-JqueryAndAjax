class Player {
    constructor(name, XorO) {
        this.name = name;
        this.XorO = XorO.toUpperCase(); 
        this.currentMove = false;
    }
} 

class PlayGame {
    constructor(board) {
        this.players = [];
        this.currentMoveCount = 1;
        this.currentBoard = board;
    }
    startGame () {
        const p1 = new Player(prompt('Name of Player 1'), prompt('Please choose X or O'));
        const p2 = new Player(prompt('Name of Player 2'), prompt('Please choose X or O'));
        this.players.push(p1);
        this.players.push(p2);

        for ( let p of this.players ) {
            p.XorO === 'X' ? p.currentMove = true : p.currentMove = false;
            if ( p.currentMove === true ) {
                h2.innerText = `It is ${p.name}'s turn`
            }
        }
    }
    setPlayerTurn () {
        for ( let p of this.players ) {
            p.currentMove === false ? p.currentMove = true : p.currentMove = false;
            if ( p.currentMove === true ) {
                h2.innerText = `It is ${p.name}'s turn`
            }
        }
    }
}

const gameState = new Map([
    ['sq1', ''],
    ['sq2', ''],
    ['sq3', ''],
    ['sq4', ''],
    ['sq5', ''],
    ['sq6', ''],
    ['sq7', ''],
    ['sq8', ''],
    ['sq9', '']
])

const divContainer = document.getElementById("main");
const h2 = document.getElementById("player-turn");

const game = new PlayGame(gameState);
game.startGame();


divContainer.addEventListener('click', (evt) => {
    evt.target.innerText === '' ? markSpace (evt.target) : alert('Please Choose an Open Space');
})

function markSpace (e) {
    console.log(game.players);
    let idValue = e.getAttribute('id');
    let currentSquare = document.getElementById(idValue);
    game.players[0].currentMove === true
        ? currentSquare.innerText = game.players[0].XorO 
        : currentSquare.innerText = game.players[1].XorO 
    console.log(game.currentMoveCount);
    game.setPlayerTurn();
    updateGameState(idValue, currentSquare.innerText);
    console.log(gameState.values());
    if ( game.currentMoveCount >= 5) {
        if ( game.currentMoveCount == 9 ) {
            alert("The game is tied");
        }
    }

    game.currentMoveCount++;
}



function updateGameState(id, square) {
    gameState.forEach( (v, k) => {
        if ( k === id ) { gameState.set( k, square ) }
    })
}
