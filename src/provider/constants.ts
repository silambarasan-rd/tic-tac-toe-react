export const GRID_SIZE = 3;
export const PLAYERS = ['X', 'O'];
export const DEFAULT_PLAYER = 0; // Index of the PLAYERS array - 0 => X and 1 => O
export const DEFAULT_COLS: any[] = [null, null, null, null, null, null, null, null, null];
export const findSpot = (rowIndex: number, colIndex: number) => (rowIndex * 3) + colIndex;

export const GAME_NOT_STARTED = 0;
export const GAME_IN_PROGRESS = 1;
export const GAME_COMPLETED = 2;
export const GAME_DRAW = 3;

export const WINNING_CONSTRAINT = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];