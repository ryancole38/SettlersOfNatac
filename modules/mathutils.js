
class MathUtils{

    static floatsEqual(float1, float2){
        let difference = Math.abs(float1 - float2);
        let maximumVariation = 0.06;
        return difference < maximumVariation;
    }
}

export { MathUtils };