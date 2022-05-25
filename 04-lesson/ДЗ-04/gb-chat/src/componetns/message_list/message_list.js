import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Message } from './message';
import { MessageForm } from './Message_form';
import styles from "./message_list.module.scss";

export function MessageList() {

    const [messageList, setMessage] = useState({});

    const ref = useRef();

    const { userId } = useParams();

    const messages = messageList[userId] ?? [];

    const addMessage = useCallback(
        (message, author = 'user') => {
            if (message) {
                setMessage((state) => ({
                    ...state,
                    [userId]: [
                        ...(state[userId] ?? []), { author: author, text: message, date: new Date() }
                    ]
                }));
            }
        },
        [userId]
    )

    useEffect(() => {
        let timerId = null;
        const messages = messageList[userId] ?? [];
        const lastMessage = messages[messages.length - 1];

        timerId = setTimeout(() => {
            if (messages.length > 0 && lastMessage?.author !== 'bot') {
                addMessage('Вам отвечает робот!', 'bot');
            }
        }, 1500);

        return () => {
            clearInterval(timerId);
        }
    }, [addMessage, messageList, userId])

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo(0, ref.current.scrollHeight);
        }
    }, [messageList]);

    return (
        <>
            <div ref={ref} className={styles.msg_lst}>
                {
                    messages.map((message, index) => (
                        <Message message={message} key={message?.date ?? index} />
                    ))
                }
            </div >
            <div>
                <MessageForm getMessage={addMessage} />
            </div>
        </>
    )
}
