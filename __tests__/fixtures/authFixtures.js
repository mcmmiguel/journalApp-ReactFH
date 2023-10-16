export const initialState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const authenticatedState = {
    status: 'authenticated',
    uid: '1234asdf',
    email: 'test@test.com',
    displayName: 'testUser',
    photoURL: 'https://imagetest.jpg',
    errorMessage: null,
};

export const notAuthenticatedState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null || undefined,
};

export const testUser = {
    uid: '1234asdf',
    email: 'test@test.com',
    displayName: 'testUser',
    photoURL: 'https://imagetest.jpg',
}