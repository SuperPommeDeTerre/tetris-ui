import i18next from 'i18next';

class TetrisGame {
    
    #gameHeight = 500;
    #gameWidth = 150;

    /**
     * Game drawing canvas
     */
    #drawingCanvas = null;

    /**
     * 
     * @param {HTMLCanvasElement} drawingCanvas The canvas 
     */
    constructor(drawingCanvas) {
        this.drawingCanvas = drawingCanvas;
    }
    
    /**
     * Gets the current drawing canvas
     */
    get drawingCanvas() {
        return this.drawingCanvas;
    }

    /**
     * Start a new game
     */
    start() {

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