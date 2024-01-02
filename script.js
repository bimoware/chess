class ChessGame {
    constructor(fenPos){
        this.startPos = fenPos || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'

    }
    get matrix(){
        return fenPos.split('/').map(lign => lign.split(''))
    }
}

const game = new ChessGame()