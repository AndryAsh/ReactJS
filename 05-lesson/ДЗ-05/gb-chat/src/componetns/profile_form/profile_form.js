import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { updateProfile } from '../../store/profile';
import styles from './profile_form.module.scss';

export function InputForm({ firstName, lastName }) {
    const [form, setForm] = useState(
        {
            firstName,
            lastName,
        }
    );

    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (event.target.id === 'firstName') {
            setForm((state) => ({
                ...state,
                [event.target.id]: event.target.value
            }))
        }
        if (event.target.id === 'lastName') {
            setForm((state) => ({
                ...state,
                [event.target.id]: event.target.value
            }))
        }
    }

    return (
        <div className={styles.profile_item}>
            <FormControl sx={{ m: 1, width: '100%', margin: '1rem 0 0 0' }} variant="outlined">
                <InputLabel htmlFor='firstName'>Имя</InputLabel>
                <OutlinedInput
                    id='firstName'
                    type="text"
                    fullWidth={true}
                    value={form.firstName}
                    onChange={handleChange}
                    label='Имя'
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '100%', margin: '1rem 0 1rem 0' }} variant="outlined">
                <InputLabel htmlFor='lastName'>Фамилия</InputLabel>
                <OutlinedInput
                    id='lastName'
                    type="text"
                    fullWidth={true}
                    value={form.lastName}
                    onChange={handleChange}
                    label='Фамилия'
                />
            </FormControl>
            <Button variant="contained" onClick={() => dispatch(updateProfile(form))} >сохранить</Button>
        </div>
    )
}