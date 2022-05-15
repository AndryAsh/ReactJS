import React, { useEffect, useState } from "react";
import styles from "./app.module.scss";
import logo from "./chat-logo.svg"
import { MessageGreeting } from "../message_greeting/message_greeting";
import { MessageForm } from "../Message_form/message_form";
import { MessageList } from "../message_list/message_list";

export function App() {
    const nameApp = 'gb-chat';
    const msg = 'Добро пожаловать в gb-chat!';
    const [messageList, setMessage] = useState([]);

    const addMessage = (message) => {
        setMessage([...messageList, { author: 'user', text: message }]);
    }

    useEffect(() => {
        setTimeout(() => {
            if (messageList.length > 0) {
                if (messageList[messageList.length - 1].author === 'user') {
                    setMessage([...messageList, { author: 'bot', text: 'Вам отвечает робот!' }]);
                }
            }
        }, 1500)
    }, [messageList])

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.header__wrap_logo}>
                    <img src={logo} className={styles.header__logo} alt="logo" />
                </div>
                <h1 className={styles.header__name}>{nameApp}</h1>
            </div>
            <MessageGreeting
                message={msg}
            />
            <div className={styles.msg_wrapper}>
                <MessageForm getMessage={addMessage} />
                <MessageList messages={messageList} />
            </div>
        </div>
    )
}