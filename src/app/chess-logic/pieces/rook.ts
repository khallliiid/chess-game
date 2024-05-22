import { FENChar, Coords, Color } from "../model";
import { Piece } from "./piece";

export class Rook extends Piece {
    private _hasMoved: boolean = false 
    protected override _FENChar: FENChar;
    protected override _directions: Coords[] = [
        {x: 1, y: 0},
        {x: -1, y: 0},
        {x: 0, y: 1},
        {x: 0, y: -1},
    ];

    constructor(private pieceColor: Color){
        super(pieceColor);
        this._FENChar = pieceColor === Color.White? FENChar.WhiteBishop : FENChar.BlackBishop;
    }

    public get hasMoved(): boolean {
        return this.hasMoved
    }
    public set hasMoved(_) {
        this.hasMoved = true
    }
}