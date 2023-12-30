class ChessGame {
    constructor(fenPos){
        /*
        r = rook
        n = knight
        b = bishop
        q = queen
        k = king
        
        uppercase = black
        lowercase = white*/
        this.startPos = fenPos || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
    }
}