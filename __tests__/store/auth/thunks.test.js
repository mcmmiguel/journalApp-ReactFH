import { signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startGoogleSignIn } from "../../../src/store/auth/thunks";
import { testUser } from "../../fixtures/authFixtures";

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

});