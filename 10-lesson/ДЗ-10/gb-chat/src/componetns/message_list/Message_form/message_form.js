import React, { useEffect, useRef, useState } from "react";
import { InputAdornment, IconButton, FormControl, InputLabel } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { Send } from "@mui/icons-material";
import styled from "@emotion/styled";

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

    const IconStyles = styled(Send)`
        color: #7a6e67;
    `;

    return (
        <FormControl sx={{ m: 1, width: '100%', margin: 0 }} variant="outlined">
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
                            {msg && <IconStyles color="primary" />}
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