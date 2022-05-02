import React from "react";
import styles from "./app.module.scss";
import logo from "./chat-logo.svg"
import { Message } from "../message/message.js";

export function App() {
    const nameApp = 'gb-chat';
    const msg = 'Добро пожаловать в gb-chat!';

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.header__wrap_logo}>
                    <img src={logo} className={styles.header__logo} alt="logo" />
                </div>
                <h1 className={styles.header__name}>{nameApp}</h1>
            </div>
            <Message
                message={msg}
            />
        </div>
    )
}