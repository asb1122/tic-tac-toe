class TicTacToe {

  constructor(currentPlayerSymbol) {
    this.currentPlayerSymbol = 'x';
    this.matrix = [[null, null ,null],[null, null ,null],[null, null ,null]];
    this.turns = 0;
    this.winner = null;
    this.isWinner = false;
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] == null){
    this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
    if (this.currentPlayerSymbol == 'o'){
      this.currentPlayerSymbol = 'x';
    } else if (this.currentPlayerSymbol == 'x'){
      this.currentPlayerSymbol = 'o';
    }
    this.turns++;
    this.isWinner = (this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][0] == this.matrix[0][2] && this.matrix[0][0] != null)
    || (this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][0] == this.matrix[1][2] && this.matrix[1][0] != null)
    || (this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][0] == this.matrix[2][2] && this.matrix[2][0] != null )
    || (this.matrix[0][0] == this.matrix[1][0] && this.matrix[0][0] == this.matrix[2][0] && this.matrix[0][0] != null )
    || (this.matrix[0][1] == this.matrix[1][1] && this.matrix[0][1] == this.matrix[2][1] && this.matrix[0][1] != null)
    || (this.matrix[0][2] == this.matrix[1][2] && this.matrix[0][2] == this.matrix[2][2] && this.matrix[0][2] != null)
    || (this.matrix[0][0] == this.matrix[1][1] && this.matrix[0][0] == this.matrix[2][2] && this.matrix[0][0] != null)
    || (this.matrix[0][2] == this.matrix[1][1] && this.matrix[0][2] == this.matrix[2][0] && this.matrix[0][2] != null);
    }
  }

  isFinished() {
    return this.isWinner == true || this.noMoreTurns();
  }

  getWinner() {
    if (this.isWinner == true){
      if (this.currentPlayerSymbol == 'x'){
        return 'o';
      } else {
        return 'x';
      }
    } else {
      return null;
    }
  }

  noMoreTurns() {
    if (this.turns >= 9){
      return true;
    } else {
      return false;
    }
  }

  isDraw() {
    if (this.isWinner == true || this.noMoreTurns() == false ||
        (this.isWinner == true && this.noMoreTurns() ==  true)){
      return false;
    } else {
      return true;
    }
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }

}

module.exports = TicTacToe;
