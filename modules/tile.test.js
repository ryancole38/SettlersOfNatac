import { Tile } from "./tile.js"

test('Can access center coordinates', () =>{
    let tile = new Tile(0, 0);
    expect(tile.center.x).toBe(0);
});