const STATE_WIN_X = 'STATE_WIN_X';
const STATE_WIN_O = 'STATE_WIN_O';
const STATE_DRAW = 'STATE_DRAW';
const MAKE_MOVE = 'MAKE_MOVE';
const NEW_GAME = 'NEW_GAME';
const RESET_GAME = 'RESET_GAME';
const SET_WHO_MOVE_FIRST = 'SET_WHO_MOVE_FIRST';
const AI_MOVE = 'AI_MOVE';
const TOTAL_MOVE = 'TOTAL_MOVE'

let initialState = {
  isGameEnd: false,
  xWinCounter: 0,
  oWinCounter: 0,
  drawCounter: 0,
  totalMove: 0,
  squares: Array(9).fill(null),
  isTurnX: true,
  player: null,
  isTurnAI: false,
  winner: false
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATE_WIN_X:
      return {
        ...state,
        xWinCounter: state.xWinCounter + 1,
        isGameEnd: true,
        isTurnX: false,
        isTurnAI: state.player === 'x',
        winner: 'x',
      };
      
    case STATE_WIN_O:
      return {
        ...state,
        oWinCounter: state.oWinCounter + 1,
        isGameEnd: true,
        isTurnX: true,
        isTurnAI: state.player === 'o',
        winner: 'o',
      };

    case STATE_DRAW:
      return {
        ...state,
        drawCounter: state.drawCounter + 1,
        isGameEnd: true,
        isTurnAI: !state.isTurnX && state.player === 'x',
        winner: false,
      };

    case NEW_GAME:
      return {
        ...state,
        squares: Array(9).fill(null),
        isGameEnd: false,
        player: (state.isTurnX && !state.isTurnAI) || (!state.isTurnX && state.isTurnAI) ? 'x' : 'o',
        totalMove: 0
      };

    case RESET_GAME:
       return {
        ...initialState
      };

    case SET_WHO_MOVE_FIRST:
      return {
        ...state,
        isTurnX: action.isXMoveFirst,
        isGameEnd: false,
        player: (state.isTurnX && !state.isTurnAI) || (!state.isTurnX && state.isTurnAI) ? 'x' : 'o',
      }

    case MAKE_MOVE:
      return {
        ...state,
        squares: action.squares,
        isTurnX: !state.isTurnX,
      }

    case AI_MOVE:
      return {
        ...state,
        isTurnAI: action.isTurnAI
      }

    case TOTAL_MOVE: 
      return {
        ...state,
        totalMove: state.totalMove + 1
      }
    default:
      return state;
  }
}

export const resetGame = () => ({ type: RESET_GAME });
export const totalMove = () => ({ type: TOTAL_MOVE});
export const createNewGame = () => ({ type: NEW_GAME });
export const makeMove = (squares) => ({ type: MAKE_MOVE, squares});
export const setAITurn = (isTurnAI) => ({ type: AI_MOVE, isTurnAI })
export const setXWin = () => ({ type: STATE_WIN_X })
export const setOWin = () => ({ type: STATE_WIN_O })
export const setDraw = () => ({ type: STATE_DRAW })
export const setWhoMoveFirst = (isXMoveFirst) => ({ type: SET_WHO_MOVE_FIRST, isXMoveFirst });

export const setWinner = (winner) => (dispatch) => {
  if (winner === 'x') {
    dispatch(setXWin());
  } else if (winner === 'o') {
    dispatch(setOWin());  
  } else {
    dispatch(setDraw())
  }
}

export default gameReducer;