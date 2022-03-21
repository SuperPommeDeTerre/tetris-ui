import TETROMINOS from './tetrominos';

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
export default RandomGenerator;