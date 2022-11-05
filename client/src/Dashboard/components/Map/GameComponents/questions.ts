import { TILE_SIZE } from "./constants";

export interface IQuestionGameMap {
    [key: string]: IQuestionGame;
 }

export interface IQuestionGame {
    mapLevels: number[][][];
    finalLocation: {x: number, y: number}
    dimensions: {
        columns: number
        rows: number
        width: number
        height: number
    }
}

export const questionsMap: IQuestionGameMap = {
    question1:{
        mapLevels:     
        [
            [   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2,],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2,],
            ],
            [
                [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0,],
                [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,],
                [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0,],
            ]
        ],
        finalLocation:{x:11, y: 1},
        dimensions: {
            columns: 12,
            rows:4,
            width: 12 * TILE_SIZE,
            height: 4 * TILE_SIZE
        }
    },
    question2:{
        mapLevels:     [
            [   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
            ],
            [
                [4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 5,],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
                [4, 4, 4, 5, 4, 4, 4, 4, 4, 4, 0, 4,],
                [4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4,],
                [5, 0, 6, 4, 4, 4, 4, 4, 0, 6, 0, 4,],
                [4, 0, 4, 0, 0, 0, 5, 4, 0, 4, 0, 5,],
                [4, 0, 4, 0, 4, 7, 0, 4, 0, 4, 0, 4,],
                [4, 0, 5, 0, 4, 4, 4, 4, 0, 4, 0, 4,],
                [4, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 4,],
                [4, 0, 4, 4, 4, 6, 4, 4, 4, 4, 0, 4,],
                [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
                [4, 4, 5, 4, 4, 5, 4, 4, 4, 5, 4, 4,],
            ]
        ],
        finalLocation:{x:5, y: 6},
        dimensions: {
            columns: 12,
            rows:12,
            width: 12 * TILE_SIZE,
            height: 12 * TILE_SIZE
        }
    },
    question3:{
        mapLevels:     [
            [   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
            ],
            [
                [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 7,],
            ]
        ],
        finalLocation:{x:5, y: 6},
        dimensions: {
            columns: 12,
            rows:11,
            width: 12 * TILE_SIZE,
            height: 11 * TILE_SIZE
        }
    },
    test:{
        mapLevels:     [
            [   
                [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
                [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,],
                [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,],
                [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,],
                [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,],
                [3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3,],
                [3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,],
                [3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,],
                [3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3,],
                [3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,],
                [3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,],
                [3, 3, 3, 1, 1, 2, 3, 3, 3, 3, 3, 3,],
            ],
            [
                [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,],
                [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
                [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
                [4, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 4,],
                [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
                [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
                [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
                [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
                [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
                [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
                [4, 4, 4, 0, 5, 6, 4, 4, 4, 4, 4, 4,],
                [4, 4, 4, 0, 0, 6, 4, 4, 4, 4, 4, 4,],
            ]
        ],
        finalLocation:{x:4, y: 0},
        dimensions: {
            columns: 12,
            rows:12,
            width: 12 * TILE_SIZE,
            height: 12 * TILE_SIZE
        }
    }
}