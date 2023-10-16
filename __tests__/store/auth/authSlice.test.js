import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, initialState, notAuthenticatedState, testUser } from "../../fixtures/authFixtures";


describe('Pruebas en authSlice', () => {

    test('Debe de regresar el estado inicial y llamarse "auth"', () => {

        const state = authSlice.reducer(initialState, {})

        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);

    });

    test('Debe de realizar la autenticación', () => {

        const state = authSlice.reducer(initialState, login(testUser));

        expect(state).toEqual(authenticatedState);

    });

    test('Debe de realizar el logout sin argumentos', () => {

        const state = authSlice.reducer(authenticatedState, logout());
        expect(state).toEqual(notAuthenticatedState);

    });

    test('Debe de realizar el logout y mostrar un errorMessage', () => {

        const errorMessage = 'Las credenciales no son válidas';

        const state = authSlice.reducer(authenticatedState, logout({ errorMessage }));
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage,
        });

    });

    test('Debe de cambiar el estado a Checking', () => {

        const state = authSlice.reducer(authenticatedState, checkingCredentials());

        expect(state.status).toBe('checking');

    });

});