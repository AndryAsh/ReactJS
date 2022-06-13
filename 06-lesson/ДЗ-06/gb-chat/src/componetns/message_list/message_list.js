import React, { useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Message } from './message';
import { MessageForm } from './Message_form';
import { sendMessage } from '../../store/messages';
import styles from "./message_list.module.scss";

export function MessageList() {
    const { userId } = useParams();

    const dispath = useDispatch();

    const messages = useSelector((state) => state.messages.messages[userId] ?? []);

    const ref = useRef();

    const addMessage = useCallback(
        (message, author = 'user') => {
            if (message) {
                dispath(sendMessage(userId, { text: message, author }))
            }
        },
        [userId]
    );

    useEffect(() => {
        let timerId = null;
        const lastMessage = messages[messages.length - 1];

        timerId = setTimeout(() => {
            if (messages.length > 0 && lastMessage?.author !== 'bot') {
                addMessage('Вам отвечает робот!', 'bot');
            }
        }, 1500);

        return () => {
            clearInterval(timerId);
        }
    }, [addMessage, messages, userId]);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo(0, ref.current.scrollHeight);
        }
    }, [messages]);

    return (
        <>
            <div ref={ref} className={styles.msg_lst}>
                {
                    messages.map((message) => (
                        <Message message={message} key={message.id} userId={userId} />
                    ))
                }
            </div >
            <div>
                <MessageForm getMessage={addMessage} />
            </div>
        </>
    )
}
