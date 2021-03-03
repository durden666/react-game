export class Board {
  constructor(position = Array(9).fill(0), turn = 'x') {
    this.position = position;
    this.turn = turn;
  }

  opositeTurn() {
    return this.turn === 'x' ? 'o' : 'x';
  }

  move(location) {
    var tempPosition = this.position.slice();
    tempPosition[location] = this.turn;

    return new Board(tempPosition, this.opositeTurn());
  }

  legalMoves() {
    const moves = [];

    for (let i in this.position) {
      if (!this.position[i]) {
        moves.push(i);
      }
    }
    return moves;
  }

  isWin() {
    return (this.position[0] && this.position[0] === this.position[1] && this.position[0] === this.position[2]) 
      || (this.position[3] && this.position[3] === this.position[4] && this.position[3] === this.position[5])
      || (this.position[6] && this.position[6] === this.position[7] && this.position[6] === this.position[8]) 
      || (this.position[0] && this.position[0] === this.position[3] && this.position[0] === this.position[6]) 
      || (this.position[1] && this.position[1] === this.position[4] && this.position[1] === this.position[7]) 
      || (this.position[2] && this.position[2] === this.position[5] && this.position[2] === this.position[8]) 
      || (this.position[0] && this.position[0] === this.position[4] && this.position[0] === this.position[8])
      || (this.position[2] && this.position[2] === this.position[4] && this.position[2] === this.position[6])
    ;
  }

  isDraw() {
    return !this.isWin() && this.legalMoves().length === 0;
  }
}

const minimax = (board, maximizing, originalPlayer) => {
  if (board.isWin() && originalPlayer === board.opositeTurn()) {
    return 1;
  } else if (board.isWin() && originalPlayer !== board.opositeTurn()) {
    return -1;
  } else if (board.isDraw()) {
    return 0;
  }

  if (maximizing) {
    var bestEval = Number.MIN_SAFE_INTEGER;

    for (let move of board.legalMoves()) {
      const result = minimax(board.move(move), true, originalPlayer);
      bestEval = Math.max(result, bestEval);
    }

    return bestEval;
  } else {    
    var worstEval = Number.MAX_SAFE_INTEGER;
    for (let move of board.legalMoves()) {
      const result = minimax(board.move(move), true, originalPlayer);
      worstEval = Math.min(result, worstEval);
    }
    return worstEval;
  }
}

export const findBestMove = (board) => {
  var bestEval = Number.MIN_SAFE_INTEGER;
  var bestMove = -1;

  for (let move of board.legalMoves()) {
    const result = minimax(board.move(move), false, board.turn);

    if (result > bestEval) {
      bestEval = result;
      bestMove = move;
    }
  }
  return bestMove;
}
