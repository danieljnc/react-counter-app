import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Test in 05-funciones', () => {
    test('getUser must return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(user).toEqual(userTest);
    });

    test('getUsuarioActivo must return an object', () => {
        const username = 'djnaranjo';
        const userTest = {
            uid: 'ABC567',
            username
        };

        const user = getUsuarioActivo(username);
        expect(user).toEqual(userTest);
        expect(username).toBe(userTest.username);
    });
})