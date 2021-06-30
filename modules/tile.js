import { Point } from "./point.js"

class Tile{
    constructor(x, y){
        this.center = new Point(x, y);
    }
}

export { Tile };