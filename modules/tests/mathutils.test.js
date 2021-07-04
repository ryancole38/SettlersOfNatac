import { MathUtils } from '../mathutils.js'

test('Float comparison works to tenths place precision', () =>{
    let num1 = 1;
    let num2 = 0.9;
    let num3 = 0.95;
    let num4 = 0.94;
    let num5 = 0.99;
    expect(MathUtils.floatsEqual(num1, num2)).toBe(false);
    expect(MathUtils.floatsEqual(num1, num3)).toBe(true);
    expect(MathUtils.floatsEqual(num1, num4)).toBe(false);
    expect(MathUtils.floatsEqual(num1, num5)).toBe(true);

});
