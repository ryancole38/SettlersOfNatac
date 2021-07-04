import { MathUtils } from '../mathutils'
import { Tile } from "../tile.js"

test('Can access center coordinates', () =>{
    let tile = new Tile(0, 0);
    expect(tile.center.x).toBe(0);
});

test('Can access vertices', () => {
    let tile = new Tile(0, 0);
    expect(tile.vertices.length).toBe(6)
})

test('Adjacent vertices are one unit apart', () => {
    let tile = new Tile(0, 0);
    let verts = tile.vertices;
    for(let i=0; i<6; i++){
        expect(
            MathUtils.floatsEqual(
                verts[i].distanceFromPoint(verts[(i+1)%6]),
                1
            )
        ).toBe(true);
    }
    for(let i=0; i<6; i++){
        expect(
            MathUtils.floatsEqual(
                verts[i].distanceFromPoint(tile.center),
                1
            )
        ).toBe(true);
    }
});

