import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Tests in 09-promesas', () => {
    test('test in method getHeroeByIdAsync', (done) => {        
        
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual(heroes[0]);
                done();
            });
    });

    test('test in method getHeroeByIdAsync getting error', (done) => {        
        
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(err => {
                expect(err).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
    
})