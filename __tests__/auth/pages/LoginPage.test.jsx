import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { MemoryRouter } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { authSlice } from '../../../src/store/auth';
import { startGoogleSignIn } from '../../../src/store/auth/thunks';
import { notAuthenticatedState } from '../../fixtures/authFixtures';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState,
    }
})

const mockStartGoogleSignIn = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn
}));

describe('Pruebas en <LoginPage />', () => {

    test('Debe de mostrar el componente correctamente', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        // screen.debug();

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);

    });

    test('Botón de Google debe de llamar startGoogleSignIn', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);

        expect(mockStartGoogleSignIn).toHaveBeenCalled();

    });

});