import React, { useEffect, useRef, useState } from "react";
// import styles from "./message_form.module.scss";
import { /* Button, Input, */ InputAdornment, IconButton, FormControl, InputLabel } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { Send } from "@mui/icons-material";

export function MessageForm({ getMessage }) {
    const [msg, setMsg] = useState('');
    const inputRef = useRef();

    const handleChange = (event) => {
        setMsg(event.target.value);
    }

    const sendMessage = () => {
        getMessage(msg);
        setMsg('');
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handlePressInput = ({ code }) => {
        if (code === 'Enter') {
            sendMessage();
        }
    }
    return (
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-msg">Введите текст сообщения ...</InputLabel>
            <OutlinedInput
                id="outlined-adornment-msg"
                type="text"
                inputRef={inputRef}
                inputProps={{
                    "data-test": "test",
                }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={sendMessage}>
                            {msg && <Send color="primary" />}
                        </IconButton>
                    </InputAdornment>
                }
                onKeyDown={handlePressInput}
                fullWidth={true}
                value={msg}
                onChange={handleChange}
                label="Введите текст сообщения ..."
            />
        </FormControl>
    )
}

/*
            <form className={styles.msg_form} action="#">

                    <InputAdornment position="end">
                        {msg && <Send onClick={sendMessage} color="primary" />}
                    </InputAdornment>

            <input ref={inputRef}
                className={styles.msg_form__inp}
                type="text" value={msg}
                onChange={handleChange}
                placeholder="Введите текст сообщения ..."
            />

            <button className={styles.msg_form__btn} type="reset" onClick={sendMessage}>
                Отправить сообщение
            </button>
*/