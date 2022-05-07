import { retornaArreglo } from "../../base/07-deses-arr";

describe('Tests in 07-deses-arr', () => {
    test('test in method retornaArreglo', () => {        
        const [letters, number] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(typeof letters).toBe('string');

        expect(number).toBe(123);
        expect(typeof number).toBe('number');
    });
    
})