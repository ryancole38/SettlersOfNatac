import { Point } from "./point.js"

class Tile{
    constructor(x, y){
        this.center = new Point(x, y);
        this.vertices = this._getVertices()
    }

    _getVertices = () => {
        return [
            new Point(0.5, Math.sqrt(3)/2),
            new Point(1,0),
            new Point(0.5, -Math.sqrt(3)/2),
            new Point(-0.5, -Math.sqrt(3)/2),
            new Point(-1, 0),
            new Point(-0.5, Math.sqrt(3)/2)
        ];

    }
}

export { Tile };