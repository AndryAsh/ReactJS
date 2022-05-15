import React from "react";
import styles from "./message_form.module.scss";

export function MessageForm(props) {
    let msg;
    const handleChange = (event) => {
        msg = event.target.value;
    }

    const sendMessage = () => {
        props.getMessage(msg);
    }

    return (
        <form className={styles.msg_form} action="#">
            <input className={styles.msg_form__inp} type="text" value={msg} onChange={handleChange} />
            <button className={styles.msg_form__btn} type="reset" onClick={sendMessage}>
                Отправить сообщение
            </button>
        </form>
    )
}