import { useEffect, useMemo } from "react"

import { useSelector, useDispatch } from "react-redux"
import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

import { ImageGalery } from "../components/ImageGalery"
import { useForm } from "../../hooks/useForm"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote } from "../../store/journal/thunks"

export const NoteView = () => {

    const dispatch = useDispatch();

    const { active: activeNote, messageSaved, isSaving } = useSelector(state => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(activeNote);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Note updated', messageSaved, 'success');
        }

    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }


    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>

            <Grid item>
                <Button disabled={isSaving} color="primary" sx={{ padding: 2 }} onClick={onSaveNote}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Insert title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    minRows={5}
                    placeholder="What happened today?"
                    sx={{ border: 'none', mb: 1 }}
                    name='body'
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <ImageGalery />

        </Grid>
    )
}
