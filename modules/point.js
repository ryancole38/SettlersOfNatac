class Point{
     
    constructor(x, y){
        this.x = x;
        this.y = y
    }

    distanceFromPoint = (otherPoint) => {
        if (!(otherPoint instanceof Point)){
            return NaN;
        }
        let deltaX = this.x - otherPoint.x;
        let deltaY = this.y - otherPoint.y;

        return Math.sqrt(deltaX**2 + deltaY**2);
    }
}

export { Point };