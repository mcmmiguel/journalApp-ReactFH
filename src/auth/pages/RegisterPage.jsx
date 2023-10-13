import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

const formData = {
    email: 'fernando@google.com',
    password: '124556',
    displayName: 'Miguel',
};

const formValidations = {
    email: [(value) => value.includes('@'), 'Invalid email address.'],
    password: [(value) => value.length >= 6, 'The password must have more than 6 characters.'],
    displayName: [(value) => value.length >= 1, 'Name is required'],
};

export const RegisterPage = () => {

    const {
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid, } = useForm(formData);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <AuthLayout title='Register'>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Full name"
                            type="text"
                            placeholder="Miguel Cobian"
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={!displayNameValid}
                            helperText={displayNameValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="emial"
                            placeholder="correo@gmail.com"
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="Password"
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth type='submit'>
                                Create account
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            Sign in
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    )
}
