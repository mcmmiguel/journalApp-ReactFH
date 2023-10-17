import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Google from "@mui/icons-material/Google"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Alert from "@mui/material/Alert"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

const formData = {
    email: '',
    password: '',
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm(formData);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();
        //! No es esta la accion
        dispatch(startLoginWithEmailPassword({ email, password }));
        console.log({ email, password });
    };

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
        console.log('onGoogleSignIn');
    }

    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="correo@gmail.com"
                            fullWidth
                            name="email"
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
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} display={errorMessage ? '' : 'none'}>
                            <Alert severity='error'>
                                {errorMessage}
                            </Alert>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button variant="contained" fullWidth type='submit' disabled={isAuthenticating}>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Button variant="contained" fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating}>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Create an account
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout >
    )
}
