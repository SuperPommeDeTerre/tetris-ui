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
                    [ 1, 1 ],
                    [ 1, 1 ],
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

TETROMINOS.TO.states.start.prev = TETROMINOS.TO.states.start;
TETROMINOS.TO.states.start.next = TETROMINOS.TO.states.start;

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

export default TETROMINOS;