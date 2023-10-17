import { signInWithEmailAndPassword } from "firebase/auth";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startCreatingUserWithEmailPassword, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks";
import { testUser } from "../../fixtures/authFixtures";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";

jest.mock('../../../src/firebase/providers');

describe('Pruebas en auth thunks', () => {

    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe de invocar el CheckingCredentials', async () => {

        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());

    });

    test('startGoogleSignIn debe llamar checkingCredentials y login - Exito', async () => {

        const loginData = { ok: true, ...testUser, };
        await signInWithGoogle.mockResolvedValue(loginData);

        // thunk
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    });

    test('startGoogleSignIn debe llamar checkingCredentials y logout - Mensaje de Error', async () => {

        const errorMessage = 'Error de Google'

        const loginData = { ok: false, errorMessage };
        await signInWithGoogle.mockResolvedValue(loginData);

        // thunk
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));

    });

    test('startLoginWithEmailAndPassword debe llamar a checkingCredentials y login - Exito', async () => {

        const loginData = { ok: true, ...testUser };
        const formData = { email: testUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));


    });

    test('startLoginWithEmailAndPassword debe llamar a checkingCredentials y logout - Mensaje de Error', async () => {

        const errorMessage = 'Error de Google';

        const loginData = { ok: false, errorMessage };
        const formData = { email: testUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData));

    });

    test('startCreatingUserWithEmailAndPassword debe llamar a checkingCredentials y Login - Exito', async () => {

        const loginData = { ok: true, ...testUser };
        const formData = { email: testUser.email, password: '123456', displayName: testUser.displayName };

        await registerUserWithEmailPassword.mockResolvedValue(loginData);
        await startCreatingUserWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(testUser));

    });

    test('startCreatingUserWithEmailAndPassword debe llamar a checkingCredentials y logout - Mensaje de Error', async () => {

        const errorMessage = 'Error de Google';

        const loginData = { ok: false, errorMessage };
        const formData = { email: testUser.email, password: '123456', displayName: testUser.displayName };

        await registerUserWithEmailPassword.mockResolvedValue(loginData);
        await startCreatingUserWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage }));

    });

    test('startLogout debe de llamar logoutFirebase, clearNotes y logout', async () => {

        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());

    });

});