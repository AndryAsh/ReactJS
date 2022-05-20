import React, { useEffect, useState } from "react";
import styles from "./app.module.scss";
import { Header, MessageGreeting, MessageForm, MessageList, UserList } from '../';

export function App() {
    const nameApp = 'gb-chat';
    const msg = 'Добро пожаловать в gb-chat!';
    const [messageList, setMessage] = useState([]);
    const [userList, setUser] = useState([]);

    const addMessage = (message) => {
        if (message) {
            setMessage([...messageList, { author: 'user', text: message, date: new Date() }]);
        }
    }

    /* const addUser = () => {
        const list = [];
        for (let i = 1; i <= 3; i++) {
            setUser(
                {
                    id: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    }),
                    name: `user + ${i}`,
                }
            );
        }
    } */

    useEffect(() => {
        let timerId = null;

        timerId = setTimeout(() => {
            if (messageList.length > 0) {
                if (messageList[messageList.length - 1].author === 'user') {
                    setMessage([...messageList, { author: 'bot', text: 'Вам отвечает робот!', date: new Date() }]);
                }
            }
        }, 1500);

        return () => {
            clearInterval(timerId);
        }
    }, [messageList])

    useEffect(() => {
        const list = [];
        for (let i = 1; i <= 3; i++) {
            list.push(
                {
                    id: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    }),
                    name: `user${i}`,
                }
            );
        }
        setUser(list);
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Header nameApp={nameApp} />
            </div>
            <MessageGreeting message={msg} />
            <div className={styles.content}>
                <div className={styles.content__chat_list}>
                    <UserList userList={userList} />
                </div>
                <div className={styles.content__msg_wrapper}>
                    <div className={styles.msg_list}>
                        <MessageList messages={messageList} />
                    </div>
                    <div className={styles.msg_form}>
                        <MessageForm getMessage={addMessage} />
                    </div>
                </div>
            </div>
        </div>
    )
}