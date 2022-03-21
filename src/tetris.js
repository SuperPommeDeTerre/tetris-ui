import i18next from 'i18next';
import { v4 as uuidv4 } from 'uuid';
import TETROMINOS from './tetrominos';
import RandomGenerator from './randomgenerator';

const GAMEFIELD_WIDTH = 10;
const GAMEFIELD_HEIGHT = 20;
const GAMEFIELD_STEP = 30;
const GAMEFIELD_GRIDTHICKNESS = 1;

var keyDownHandler = null;
var tickHandler = null;

/**
 * Main game class
 */
class TetrisGame {
    #gameHeight = (GAMEFIELD_HEIGHT * GAMEFIELD_STEP) + GAMEFIELD_GRIDTHICKNESS;
    #gameWidth = (GAMEFIELD_WIDTH * GAMEFIELD_STEP) + GAMEFIELD_GRIDTHICKNESS;

    // Define game speed depending on level (from https://tetris.fandom.com/wiki/Tetris_Worlds#Gravity)
    #SPEED_LEVELS = [
        1.0,
        .793,
        .6178,
        .47273,
        .3552,
        .262,
        .18968,
        .13473,
        .09388,
        .06415,
        .04298,
        .02822,
        .01815,
        .01144,
        .00706,
        .00426,
        .00252,
        .00146,
        .00082,
        .00046,
    ];

    #gameState = {
        piece: {
            type: null,
            state: null,
            offsetX: 0,
            offsetY: 0
        },
        board: null,
        level: 0,
    };
    #currentInterval = null;

    #currentRandomGenerator = new RandomGenerator();

    /**
     * Game drawing canvas
     */
    #gameContainer = null;

    /**
     * Music of the game
     */
    #gameMusic = null;

    /**
     * Canvas used
     */
    #gameBackgroundCanvas = null;
    #gameGridCanvas = null;
    #gameMovingPieceCanvas = null;
    #offScreenCanvas = null;

    /**
     * Unique ID for the game
     */
    #uuid = null;

    /**
     * 
     * @param {HTMLElement} gameContainer The container inside which display the game 
     */
    constructor(gameContainer) {
        this.#gameContainer = gameContainer;
        // Empty container
        this.#gameContainer.innerHTML = '';
        // Generate a new UUID for this game
        this.#uuid = uuidv4();
        // Generate canvas
        this.#gameBackgroundCanvas = document.createElement('canvas');
        this.#gameBackgroundCanvas.id = this.#uuid + '-gameBackground';
        this.#gameBackgroundCanvas.width = this.#gameWidth;
        this.#gameBackgroundCanvas.height = this.#gameHeight;
        this.#gameBackgroundCanvas.style['position'] = 'absolute';
        this.#gameBackgroundCanvas.style['z-index'] = 1;
        this.#gameGridCanvas = document.createElement('canvas');
        this.#gameGridCanvas.id = this.#uuid + '-gameGrid';
        this.#gameGridCanvas.width = this.#gameWidth;
        this.#gameGridCanvas.height = this.#gameHeight;
        this.#gameGridCanvas.style['position'] = 'absolute';
        this.#gameGridCanvas.style['z-index'] = 2;
        this.#gameMovingPieceCanvas = document.createElement('canvas');
        this.#gameMovingPieceCanvas.id = this.#uuid + '-gameMovingPiece';
        this.#gameMovingPieceCanvas.width = this.#gameWidth;
        this.#gameMovingPieceCanvas.height = this.#gameHeight;
        this.#gameMovingPieceCanvas.style['position'] = 'absolute';
        this.#gameMovingPieceCanvas.style['z-index'] = 3;
        this.#offScreenCanvas = document.createElement('canvas');
        this.#offScreenCanvas.id = this.#uuid + '-offscreen';
        this.#offScreenCanvas.width = this.#gameWidth;
        this.#offScreenCanvas.height = this.#gameHeight;
        // Append canvas to container
        this.#gameContainer.appendChild(this.#gameBackgroundCanvas);
        this.#gameContainer.appendChild(this.#gameGridCanvas);
        this.#gameContainer.appendChild(this.#gameMovingPieceCanvas);
        // Draw background
        this.#drawBackground();
    }

    /**
     * Draw a part of a Tetromino
     */
    #drawPiecePart(destinationCanvasContext, color, offsetX, offsetY) {
        var pieceGradient = destinationCanvasContext.createLinearGradient(offsetX, offsetY, offsetX + GAMEFIELD_STEP, offsetY + GAMEFIELD_STEP);
        pieceGradient.addColorStop(0, color);
        pieceGradient.addColorStop(1, 'grey');
        destinationCanvasContext.fillStyle = pieceGradient;
        destinationCanvasContext.fillRect(offsetX, offsetY, GAMEFIELD_STEP, GAMEFIELD_STEP);
    }

    /**
     * Draw a piece
     * 
     * @param {HTMLCanvas} destinationCanvas The canvas on which draw the piece.
     * @param {object} piece The piece to draw
     */
    #drawPiece(destinationCanvas, piece) {
        var drawingMovingPieceContext = destinationCanvas.getContext('2d');
        // Clear the canvas
        drawingMovingPieceContext.clearRect(0, 0, destinationCanvas.width, destinationCanvas.height);
        var currentOffsetX = piece.offsetX;
        var currentOffsetY = piece.offsetY;
        // Draw individual parts of the piece
        for (let pieceLine of piece.state.geometry) {
            for (let piecePart of pieceLine) {
                if (piecePart == 1) {
                    this.#drawPiecePart(drawingMovingPieceContext, piece.type.color, currentOffsetX, currentOffsetY);
                }
                currentOffsetX += GAMEFIELD_STEP;
            }
            currentOffsetY += GAMEFIELD_STEP;            
            // Reset the Y offset as we start a new line
            currentOffsetX = piece.offsetX;
        }
    }

    /**
     * Draw game background (done one time at initialization)
     */
    #drawBackground() {
        let ctxBackground = this.#gameBackgroundCanvas.getContext('2d');
        for (let x = 0; x <= this.#gameWidth; x += GAMEFIELD_STEP) {
            ctxBackground.moveTo(0.5 + x, 0);
            ctxBackground.lineTo(0.5 + x, this.#gameHeight);
        }
        for (let x = 0; x <= this.#gameHeight; x += GAMEFIELD_STEP) {
            ctxBackground.moveTo(0, 0.5 + x);
            ctxBackground.lineTo(this.#gameWidth, 0.5 + x);
        }
        ctxBackground.strokeStyle = 'grey';
        ctxBackground.stroke();
    }

    #performInitialCountdown() {
        console.log('Initial countdown...');
    }

    #moveLeft() {
        console.log('moveLeft');
        if (this.#gameState.piece.offsetX > -(GAMEFIELD_STEP * this.#gameState.piece.state.offsetX)) {
            this.#gameState.piece.offsetX -= GAMEFIELD_STEP;
            this.#drawPiece(this.#gameMovingPieceCanvas, this.#gameState.piece);
        }

    }

    #moveRight() {
        console.log('moveRight');
        if (this.#gameState.piece.offsetX < ((GAMEFIELD_WIDTH - this.#gameState.piece.state.width - this.#gameState.piece.state.offsetX) * GAMEFIELD_STEP)) {
            this.#gameState.piece.offsetX += GAMEFIELD_STEP;
            this.#drawPiece(this.#gameMovingPieceCanvas, this.#gameState.piece);
        }
    }

    #rotateClockwise() {
        console.log('rotateClockwise');
        this.#gameState.piece.state = this.#gameState.piece.state.next;
        this.#drawPiece(this.#gameMovingPieceCanvas, this.#gameState.piece);
    }

    #rotateAntiClockwise() {
        console.log('rotateAntiClockwise');
        this.#gameState.piece.state = this.#gameState.piece.state.prev;
        this.#drawPiece(this.#gameMovingPieceCanvas, this.#gameState.piece);
    }

    /**
     * Performs a hard drop (Drop directly the piece to the bottom)
     */
    #hardDrop() {
        console.log('hardDrop');
        this.#gameState.piece.type = this.#currentRandomGenerator.getPiece();
        this.#gameState.piece.state = this.#gameState.piece.type.states.start;
        this.#gameState.piece.offsetX = 0;
        this.#gameState.piece.offsetY = 0;
        this.#drawPiece(this.#gameMovingPieceCanvas, this.#gameState.piece);
    }

    #softDrop() {
        console.log('softDrop');
    }

    #hold() {
        console.log('hold');
    }

    static #handleKeyEvent(myKeyEvent) {
        let handled = false;
        switch (myKeyEvent.code) {
            case 'Space':
                this.#hardDrop();
                handled = true;
                break;
            case 'KeyX':
            case 'ArrowUp':
                this.#rotateClockwise();
                handled = true;
                break;
            case 'KeyZ':
                this.#rotateAntiClockwise();
                handled = true;
                break;
            case 'ArrowDown':
                this.#softDrop();
                handled = true;
                break;
            case 'ArrowLeft':
                this.#moveLeft();
                handled = true;
                break;
            case 'ArrowRight':
                this.#moveRight();
                handled = true;
                break;
            case 'KeyC':
                this.#hold();
                handled = true;
                break;
        }
        if (handled) {
            myKeyEvent.preventDefault();
        }
    }

    static #tick() {
        this.#gameState.piece.offsetY += GAMEFIELD_STEP;
        this.#drawPiece(this.#gameMovingPieceCanvas, this.#gameState.piece);
    }

    /**
     * Start a new game
     */
    start() {
        // Initialize context
        this.#gameState.board = new Array(GAMEFIELD_WIDTH);
        this.#gameState.board.fill((new Array(GAMEFIELD_HEIGHT)).fill(0));

        // Bind keys
        keyDownHandler = TetrisGame.#handleKeyEvent.bind(this);
        document.body.addEventListener('keydown', keyDownHandler);

        // Start the game
        this.#performInitialCountdown();

        // Sets the tick...
        tickHandler = TetrisGame.#tick.bind(this);
        this.#currentInterval = window.setInterval(tickHandler, this.#SPEED_LEVELS[this.#gameState.level] * 1000);

        // Play music...
        this.#gameMusic = new Audio('music/Korobeïniki.ogg');
        this.#gameMusic.loop = true;
        this.#gameMusic.play();

        this.#gameState.piece.type = this.#currentRandomGenerator.getPiece();
        this.#gameState.piece.state = this.#gameState.piece.type.states.start;
        this.#gameState.piece.offsetX = 0;
        this.#gameState.piece.offsetY = 0;
        this.#drawPiece(this.#gameMovingPieceCanvas, this.#gameState.piece, 0, 0);
    }

    /**
     * Stop (end) the game
     */
    stop() {
        document.body.removeEventListener('keydown', keyDownHandler);
        this.#gameMusic.pause();
        window.clearInterval(this.#currentInterval);
    }

    /**
     * Pause the game
     */
    pause() {

    }
}

/**
 * Handle i18n update
 * 
 * @param lng Langage code
 */
i18next.on('languageChanged', (lng) => {
});

export default TetrisGame;