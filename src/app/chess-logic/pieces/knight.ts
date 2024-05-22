import { Color, Coords, FENChar } from "../model";
import { Piece } from "./piece";

export class knight extends Piece {
    protected override _FENChar: FENChar;
    protected override _directions: Coords[] =[
        {x: 1, y: 2},
        {x: 1, y: -2},
        {x: -1, y: 2},
        {x: -1, y: -2},
        {x: 2, y: 1},
        {x: 2, y: -1},
        {x: -2, y: 1},
        {x: -2, y: -1},
    ];

    constructor(private pieceColor: Color){
        super(pieceColor);
        this._FENChar = pieceColor === Color.White? FENChar.WhiteBishop : FENChar.BlackBishop;
    }
}