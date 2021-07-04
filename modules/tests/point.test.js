import { MathUtils } from '../mathutils'
import { Point } from '../point.js'

test('Can instantiate point', () => {
    let point = new Point(0,0);
    expect(point.x).toBe(0);
});

test('Calculate distance between two points easy', () => {
    let point1 = new Point(0, 0);
    let point2 = new Point(0, 1);
    expect(
        MathUtils.floatsEqual(
            point1.distanceFromPoint(point2),
            1
        )
    ).toBe(true);
});

test('Calculate distance between two points medium', () => {
    let point1 = new Point(0, 0);
    let point2 = new Point(1, 1);
    expect(
        MathUtils.floatsEqual(
            point1.distanceFromPoint(point2),
            Math.sqrt(2)
    )).toBe(true);
});

test('distanceFromPoint with non-Point returns Nan', () => {
    let point1 = new Point(0, 0);
    expect(point1.distanceFromPoint(1)).toBe(NaN);
});
