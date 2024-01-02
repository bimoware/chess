class ChessGame {
    /**
     * @param {string} fen
     */
  constructor(fen) {
    this.startPos = fen || "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
  }
  /**
   * @returns {string[][]}
   */
  get matrix() {
    return this.startPos.split("/").map((lign) => {
      let newLine = [];
      for (let elem of lign.split("")) {
        if(Number(elem)) newLine.push(...(new Array(Number(elem))))
        else newLine.push(elem)
      }
      return newLine
    });
  }
}

const game = new ChessGame();
