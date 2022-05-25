import React from "react";
import { Message } from './message';
import styles from "./message_list.module.scss";

export function MessageList({ messages }) {
    return (
        <div className={styles.msg_lst}>
            {
                messages.map((message, index) => (
                    <Message message={message} key={message?.date ?? index} />
                ))
            }
        </div >
    )
}