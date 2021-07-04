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

    // all edge vertices should be 1 unit away from
    // adjacent vertices
    for(let i=0; i<6; i++){
        expect(
            MathUtils.floatsEqual(
                verts[i].distanceFromPoint(verts[(i+1)%6]),
                1
            )
        ).toBe(true);
    }

    // all edge vertices should be one unit away from center
    for(let i=0; i<6; i++){
        expect(
            MathUtils.floatsEqual(
                verts[i].distanceFromPoint(tile.center),
                1
            )
        ).toBe(true);
    }
});

test('Tiles at positions other than (0,0) have correct verts', () => {
    let tile = new Tile(1, 1);
    let center = new Tile(0, 0);
    let verts = tile.vertices;
    let centerVerts = center.vertices;

    for(let i=0; i<6; i++){
        expect(
            Math.abs(verts[i].x - centerVerts[i].x)
        ).toBe(1);

        expect(
            Math.abs(verts[i].y - centerVerts[i].y)
        ).toBe(1);
    }
});

test('Can set size', () => {
    let tile = new Tile(0,0);
    expect(tile.size).toBe(1);
    tile.setSize(2);
    expect(tile.size).toBe(2);
});

test('Setting size scales vertices', () => {
    let tile = new Tile(0,0);
    let verts = tile.vertices;

    tile.setSize(2);

    let scaledVerts = tile.vertices;

    for(let i=0; i<6; i++){            

        expect(
            MathUtils.floatsEqual(
                verts[i].distanceFromPoint(scaledVerts[i]),
                1.0
            )
        ).toBe(true);

    }
});