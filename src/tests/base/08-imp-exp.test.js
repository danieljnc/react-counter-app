import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Tests in 08 import export', () => {
    test('test in method getHeroeById', () => {        
       const id = 1;
       const hero = getHeroeById(id);       
       const heroData = heroes.find(hero => hero.id === id);

       expect(heroData).toEqual(hero);
    });

    test('test in method getHeroeById should return undefined', () => {        
        const id = 10;
        const hero = getHeroeById(id);

        expect(hero).toBe(undefined);
     });

     test('test in method getHeroesByOwner should return DC', () => {        
        const owner = 'DC';
        const heroesTest = getHeroesByOwner(owner);       
        const heroesData = heroes.filter( (heroe) => heroe.owner === owner );
 
        expect(heroesData).toEqual(heroesTest);
     });
 
     test('test in method getHeroesByOwner should return Marvel', () => {        
        const owner = 'Marvel';
        const heroesTest = getHeroesByOwner(owner);       
        const heroesData = heroes.filter( (heroe) => heroe.owner === owner );
 
        expect(heroesData).toEqual(heroesTest);
      });
    
})