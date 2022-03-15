import i18next from 'i18next';
import { v4 as uuidv4 } from 'uuid';

/**
 * Tetrominos list
 */
const TETROMINOS = {
    'TI': {
        color: 'rgb(0,255,255)',
        states: {
            start: {
                geometry: [
                    [ 0, 0, 0, 0 ],
                    [ 1, 1, 1, 1 ],
                    [ 0, 0, 0, 0 ],
                    [ 0, 0, 0, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate90: {
                geometry: [
                    [ 0, 0, 1, 0 ],
                    [ 0, 0, 1, 0 ],
                    [ 0, 0, 1, 0 ],
                    [ 0, 0, 1, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate180: {
                geometry: [
                    [ 0, 0, 0, 0 ],
                    [ 0, 0, 0, 0 ],
                    [ 1, 1, 1, 1 ],
                    [ 0, 0, 0, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate270: {
                geometry: [
                    [ 0, 1, 0, 0 ],
                    [ 0, 1, 0, 0 ],
                    [ 0, 1, 0, 0 ],
                    [ 0, 1, 0, 0 ],
                ],
                next: null,
                prev: null,
            },
        },
    },
    'TO': {
        color: 'rgb(255,255,0)',
        states: {
            start: {
                geometry: [
                    [ 0, 1, 1, 0 ],
                    [ 0, 1, 1, 0 ],
                    [ 0, 0, 0, 0 ],
                    [ 0, 0, 0, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate90: {
                geometry: [
                    [ 0, 1, 1, 0 ],
                    [ 0, 1, 1, 0 ],
                    [ 0, 0, 0, 0 ],
                    [ 0, 0, 0, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate180: {
                geometry: [
                    [ 0, 1, 1, 0 ],
                    [ 0, 1, 1, 0 ],
                    [ 0, 0, 0, 0 ],
                    [ 0, 0, 0, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate270: {
                geometry: [
                    [ 0, 1, 1, 0 ],
                    [ 0, 1, 1, 0 ],
                    [ 0, 0, 0, 0 ],
                    [ 0, 0, 0, 0 ],
                ],
                next: null,
                prev: null,
            },
        },
    },
    'TT': {
        color: 'rgb(128,0,128)',
        states: {
            start: {
                geometry: [
                    [ 0, 1, 0 ],
                    [ 1, 1, 1 ],
                    [ 0, 0, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate90: {
                geometry: [
                    [ 0, 1, 0 ],
                    [ 0, 1, 1 ],
                    [ 0, 1, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate180: {
                geometry: [
                    [ 0, 0, 0 ],
                    [ 1, 1, 1 ],
                    [ 0, 1, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate270: {
                geometry: [
                    [ 0, 1, 0 ],
                    [ 1, 1, 0 ],
                    [ 0, 1, 0 ],
                ],
                next: null,
                prev: null,
            },
        },
    },
    'TL': {
        color: 'rgb(255,127,0)',
        states: {
            start: {
                geometry: [
                    [ 0, 0, 1 ],
                    [ 1, 1, 1 ],
                    [ 0, 0, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate90: {
                geometry: [
                    [ 0, 1, 0 ],
                    [ 0, 1, 0 ],
                    [ 0, 1, 1 ],
                ],
                next: null,
                prev: null,
            },
            rotate180: {
                geometry: [
                    [ 0, 0, 0 ],
                    [ 1, 1, 1 ],
                    [ 1, 0, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate270: {
                geometry: [
                    [ 1, 1, 0 ],
                    [ 0, 1, 0 ],
                    [ 0, 1, 0 ],
                ],
                next: null,
                prev: null,
            },
        },
    },
    'TJ': {
        color: 'rgb(0,0,255)',
        states: {
            start: {
                geometry: [
                    [ 1, 0, 0 ],
                    [ 1, 1, 1 ],
                    [ 0, 0, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate90: {
                geometry: [
                    [ 0, 1, 1 ],
                    [ 0, 1, 0 ],
                    [ 0, 1, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate180: {
                geometry: [
                    [ 0, 0, 0 ],
                    [ 1, 1, 1 ],
                    [ 0, 0, 1 ],
                ],
                next: null,
                prev: null,
            },
            rotate270: {
                geometry: [
                    [ 0, 1, 0 ],
                    [ 0, 1, 0 ],
                    [ 1, 1, 0 ],
                ],
                next: null,
                prev: null,
            },
        },
    },
    'TZ': {
        color: 'rgb(255,0,0)',
        states: {
            start: {
                geometry: [
                    [ 1, 1, 0 ],
                    [ 0, 1, 1 ],
                    [ 0, 0, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate90: {
                geometry: [
                    [ 0, 0, 1 ],
                    [ 0, 1, 1 ],
                    [ 0, 1, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate180: {
                geometry: [
                    [ 0, 0, 0 ],
                    [ 1, 1, 0 ],
                    [ 0, 1, 1 ],
                ],
                next: null,
                prev: null,
            },
            rotate270: {
                geometry: [
                    [ 0, 1, 0 ],
                    [ 1, 1, 0 ],
                    [ 1, 0, 0 ],
                ],
                next: null,
                prev: null,
            },
        },
    },
    'TS': {
        color: 'rgb(0,255,0)',
        states: {
            start: {
                geometry: [
                    [ 0, 1, 1 ],
                    [ 1, 1, 0 ],
                    [ 0, 0, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate90: {
                geometry: [
                    [ 0, 1, 0 ],
                    [ 0, 1, 1 ],
                    [ 0, 0, 1 ],
                ],
                next: null,
                prev: null,
            },
            rotate180: {
                geometry: [
                    [ 0, 0, 0 ],
                    [ 0, 1, 1 ],
                    [ 1, 1, 0 ],
                ],
                next: null,
                prev: null,
            },
            rotate270: {
                geometry: [
                    [ 1, 0, 0 ],
                    [ 1, 1, 0 ],
                    [ 0, 1, 0 ],
                ],
                next: null,
                prev: null,
            },
        },
    },
};
TETROMINOS.TI.states.start.prev = TETROMINOS.TI.states.rotate270;
TETROMINOS.TI.states.start.next = TETROMINOS.TI.states.rotate90;
TETROMINOS.TI.states.rotate90.prev = TETROMINOS.TI.states.start;
TETROMINOS.TI.states.rotate90.next = TETROMINOS.TI.states.rotate180;
TETROMINOS.TI.states.rotate180.prev = TETROMINOS.TI.states.rotate90;
TETROMINOS.TI.states.rotate180.next = TETROMINOS.TI.states.rotate270;
TETROMINOS.TI.states.rotate270.prev = TETROMINOS.TI.states.rotate180;
TETROMINOS.TI.states.rotate270.next = TETROMINOS.TI.states.start;

TETROMINOS.TO.states.start.prev = TETROMINOS.TO.states.rotate270;
TETROMINOS.TO.states.start.next = TETROMINOS.TO.states.rotate90;
TETROMINOS.TO.states.rotate90.prev = TETROMINOS.TO.states.start;
TETROMINOS.TO.states.rotate90.next = TETROMINOS.TO.states.rotate180;
TETROMINOS.TO.states.rotate180.prev = TETROMINOS.TO.states.rotate90;
TETROMINOS.TO.states.rotate180.next = TETROMINOS.TO.states.rotate270;
TETROMINOS.TO.states.rotate270.prev = TETROMINOS.TO.states.rotate180;
TETROMINOS.TO.states.rotate270.next = TETROMINOS.TO.states.start;

TETROMINOS.TT.states.start.prev = TETROMINOS.TT.states.rotate270;
TETROMINOS.TT.states.start.next = TETROMINOS.TT.states.rotate90;
TETROMINOS.TT.states.rotate90.prev = TETROMINOS.TT.states.start;
TETROMINOS.TT.states.rotate90.next = TETROMINOS.TT.states.rotate180;
TETROMINOS.TT.states.rotate180.prev = TETROMINOS.TT.states.rotate90;
TETROMINOS.TT.states.rotate180.next = TETROMINOS.TT.states.rotate270;
TETROMINOS.TT.states.rotate270.prev = TETROMINOS.TT.states.rotate180;
TETROMINOS.TT.states.rotate270.next = TETROMINOS.TT.states.start;

TETROMINOS.TL.states.start.prev = TETROMINOS.TL.states.rotate270;
TETROMINOS.TL.states.start.next = TETROMINOS.TL.states.rotate90;
TETROMINOS.TL.states.rotate90.prev = TETROMINOS.TL.states.start;
TETROMINOS.TL.states.rotate90.next = TETROMINOS.TL.states.rotate180;
TETROMINOS.TL.states.rotate180.prev = TETROMINOS.TL.states.rotate90;
TETROMINOS.TL.states.rotate180.next = TETROMINOS.TL.states.rotate270;
TETROMINOS.TL.states.rotate270.prev = TETROMINOS.TL.states.rotate180;
TETROMINOS.TL.states.rotate270.next = TETROMINOS.TL.states.start;

TETROMINOS.TJ.states.start.prev = TETROMINOS.TJ.states.rotate270;
TETROMINOS.TJ.states.start.next = TETROMINOS.TJ.states.rotate90;
TETROMINOS.TJ.states.rotate90.prev = TETROMINOS.TJ.states.start;
TETROMINOS.TJ.states.rotate90.next = TETROMINOS.TJ.states.rotate180;
TETROMINOS.TJ.states.rotate180.prev = TETROMINOS.TJ.states.rotate90;
TETROMINOS.TJ.states.rotate180.next = TETROMINOS.TJ.states.rotate270;
TETROMINOS.TJ.states.rotate270.prev = TETROMINOS.TJ.states.rotate180;
TETROMINOS.TJ.states.rotate270.next = TETROMINOS.TJ.states.start;

TETROMINOS.TZ.states.start.prev = TETROMINOS.TZ.states.rotate270;
TETROMINOS.TZ.states.start.next = TETROMINOS.TZ.states.rotate90;
TETROMINOS.TZ.states.rotate90.prev = TETROMINOS.TZ.states.start;
TETROMINOS.TZ.states.rotate90.next = TETROMINOS.TZ.states.rotate180;
TETROMINOS.TZ.states.rotate180.prev = TETROMINOS.TZ.states.rotate90;
TETROMINOS.TZ.states.rotate180.next = TETROMINOS.TZ.states.rotate270;
TETROMINOS.TZ.states.rotate270.prev = TETROMINOS.TZ.states.rotate180;
TETROMINOS.TZ.states.rotate270.next = TETROMINOS.TZ.states.start;

TETROMINOS.TS.states.start.prev = TETROMINOS.TS.states.rotate270;
TETROMINOS.TS.states.start.next = TETROMINOS.TS.states.rotate90;
TETROMINOS.TS.states.rotate90.prev = TETROMINOS.TS.states.start;
TETROMINOS.TS.states.rotate90.next = TETROMINOS.TS.states.rotate180;
TETROMINOS.TS.states.rotate180.prev = TETROMINOS.TS.states.rotate90;
TETROMINOS.TS.states.rotate180.next = TETROMINOS.TS.states.rotate270;
TETROMINOS.TS.states.rotate270.prev = TETROMINOS.TS.states.rotate180;
TETROMINOS.TS.states.rotate270.next = TETROMINOS.TS.states.start;

const GAMEFIELD_WIDTH = 10;
const GAMEFIELD_HEIGHT = 20;
const GAMEFIELD_STEP = 30;
const GAMEFIELD_GRIDTHICKNESS = 1;

var keyDownHandler = null;

/**
 * Random generator of pieces.
 * This generator follows the Tetris guidelines of the 7-bag random generator (cf. https://tetris.fandom.com/wiki/Random_Generator)
 */
class RandomGenerator {
    #currentBag = [];
    #baseBag = [
        TETROMINOS.TI,
        TETROMINOS.TO,
        TETROMINOS.TJ,
        TETROMINOS.TL,
        TETROMINOS.TS,
        TETROMINOS.TT,
        TETROMINOS.TZ,
    ];

    /**
     * Default constructor. It only generates the first bag.
     */
    constructor() {
        // Generate a new shuffled bag
        this.#generateBag();
    }

    #generateBag() {
        // Copy base bag...
        this.#currentBag = [...this.#baseBag];
        // ... And shuffle it !
        this.#shuffleBag();
    }

    /**
     * Randomize array in-place using Durstenfeld shuffle algorithm
     */
    #shuffleBag() {
        for (let i = this.#currentBag.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.#currentBag[i];
            this.#currentBag[i] = this.#currentBag[j];
            this.#currentBag[j] = temp;
        }
    }

    /**
     * Get a piece from the bag and remove it.
     * If the bag is empty, generates a new one.
     */
    getPiece() {
        // If the bag is empty, then generate a new bag
        if (this.#currentBag.length == 0) {
            // Generate a new shuffled bag
            this.#generateBag();
        }
        return this.#currentBag.pop();
    }
}

class TetrisGame {
    #gameHeight = (GAMEFIELD_HEIGHT * GAMEFIELD_STEP) + GAMEFIELD_GRIDTHICKNESS;
    #gameWidth = (GAMEFIELD_WIDTH * GAMEFIELD_STEP) + GAMEFIELD_GRIDTHICKNESS;

    #gameState = null;

    #currentRandowGenerator = new RandomGenerator();

    /**
     * Game drawing canvas
     */
    #gameContainer = null;

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

    #moveLeft() {
        console.log('moveLeft');
    }

    #moveRight() {
        console.log('moveRight');
    }

    #rotateClockwise() {
        console.log('rotateClockwise');
    }

    #rotateAntiClockwise() {
        console.log('rotateAntiClockwise');
    }

    #drop() {
        console.log('drop');
    }

    #fastFall() {
        console.log('fastFall');
    }

    #hold() {
        console.log('hold');
    }

    static #handleKeyEvent(myKeyEvent) {
        let handled = false;
        switch (myKeyEvent.code) {
            case 'Space':
                this.#drop();
                handled = true;
                break;
            case 'ArrowUp':
                this.#rotateClockwise();
                handled = true;
                break;
            case 'ArrowDown':
                this.#fastFall();
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
            case 'KeyV':
                this.#hold();
                handled = true;
                break;
        }
        if (handled) {
            myKeyEvent.preventDefault();
        }
    }

    /**
     * Start a new game
     */
    start() {
        // Initialize context
        this.#gameState = new Array(GAMEFIELD_WIDTH);
        this.#gameState.fill((new Array(GAMEFIELD_HEIGHT)).fill(0));

        // Bind keys
        keyDownHandler = TetrisGame.#handleKeyEvent.bind(this);
        document.body.addEventListener('keydown', keyDownHandler);

        // Start the game
    }

    /**
     * Stop (end) the game
     */
    stop() {
        document.body.removeEventListener('keydown', keyDownHandler);
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