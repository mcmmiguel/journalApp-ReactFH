import { Grid, Typography } from '@mui/material'
import { StarOutline } from '@mui/icons-material'
export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column" //Use flexbox implicitly
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 100px )', backgroundColor: 'primary.main' }}
        >

            <Grid item xs={12}>
                <StarOutline sx={{ fontSize: 100, color: 'white' }} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5' color='white'>Select or create a note</Typography>
            </Grid>



        </Grid>
    )
}
