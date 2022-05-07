import { getSaludo } from "../../base/02-template-string";

describe('Tests in 02-templates-string', () => {
    test('test in method getSaludo without parameters', () => {        
        const greet = getSaludo();

        expect(greet).toBe('Hola Daniel');
    });

    test('test in method getSaludo', () => {
        const name = 'Dany';
        const greet = getSaludo(name);

        expect(greet).toBe('Hola Dany');
    });
})