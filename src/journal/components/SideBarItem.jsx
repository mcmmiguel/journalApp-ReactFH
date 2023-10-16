import { useMemo } from 'react'
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItemText, ListItem, ListItemButton, ListItemIcon } from '@mui/material'

export const SideBarItem = ({ title = '', body, id }) => {

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title;
    }, [title])

    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
