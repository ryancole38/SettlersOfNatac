import { Point } from "./point.js"

class Tile{
    constructor(x, y){
        this.center = new Point(x, y);
        this.size = 1;
    }

    setSize = (size) => {
        this.size = size;
    }

    get vertices(){
        return [
            new Point(this.center.x + this.size * 0.5, this.center.y + this.size * Math.sqrt(3)/2),
            new Point(this.center.x + this.size * 1, this.center.y + this.size * 0),
            new Point(this.center.x + this.size * 0.5, this.center.y + this.size * -Math.sqrt(3)/2),
            new Point(this.center.x + this.size * -0.5, this.center.y + this.size * -Math.sqrt(3)/2),
            new Point(this.center.x + this.size * -1, this.center.y + this.size * 0),
            new Point(this.center.x + this.size * -0.5, this.center.y + this.size * Math.sqrt(3)/2)
        ];
    }
}

export { Tile };