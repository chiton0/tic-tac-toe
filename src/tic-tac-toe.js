class TicTacToe {
    constructor() {
      this.field = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
      this.playerSign = 'x';
    }

    getCurrentPlayerSymbol() {
      return this.playerSign;
    }

    nextTurn(rowIndex, columnIndex) {
      if(this.field[rowIndex][columnIndex] === null) {
        this.field[rowIndex][columnIndex] = this.playerSign;
        this.playerSign = this.playerSign === 'x' ? 'o' : 'x';
      }
      return this.playerSign;
    }

    isFinished() {
      return this.isDraw() || this.getWinner() !== null;
    }

    getWinner() {
      let res = isEqual([this.field[0][0], this.field[1][1], this.field[2][2]]);
      if(res) return res;
      res = isEqual([this.field[0][2], this.field[1][1], this.field[2][0]]);
      if(res) return res;

      for(let row of this.field) {
        res = isEqual(row)
        if(res) return res;
      }

      for(let i = 0; i < 3; i++) {
        res = isEqual([this.field[0][i], this.field[1][i], this.field[2][i]]);
        if (res) return res;
      }

      function isEqual(line) {
        // console.log('isEqual ' + line + ' ' + (line[0] === line[1] &&
        //   line[0] === line[2] &&
        //   line[0] !== null ? line[0] : null));
        return line[0] === line[1] &&
          line[0] === line[2] &&
          line[0] !== null ? line[0] : null;
      }
      return null;
    }

    noMoreTurns() {
      for(let row of this.field) {
        for(let cell of row) {
          if (cell === null) {
            return false;
          }
        }
      }
      return true;
    }

    isDraw() {
      let hasTurn = false;
      for (let row of this.field) {
        if (row.includes(null)) {
          hasTurn = true;
          break;
        }
      }
      if (this.getWinner() === null && !hasTurn) return true;
      return false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
