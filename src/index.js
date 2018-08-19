import { GameState, getWinner, turn } from './game-state.js';
import { setupCanvas } from './canvas-setup.js';
import { draw } from './renderer.js';

function* gameLoop(gameState) {
    let winner = -1;

    while (winner < 0) {
        const [rowIndex, colIndex] = yield;
        turn(gameState, rowIndex, colIndex);

        winner = getWinner(gameState);
    }
}

const game = gameLoop(GameState);
game.next();

const { canvas, ctx } = setupCanvas();

turn(GameState, 0, 1);
turn(GameState, 1, 1);
turn(GameState, 2, 0);

draw(canvas, ctx, GameState);
