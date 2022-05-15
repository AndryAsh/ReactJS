import React from "react";
import styles from "./message_list.module.scss";

export function MessageList(props) {
    return (
        <div className={styles.msg_lst}>
            {
                props.messages.map(message => (
                    <div className={message.author !== 'bot' ? styles.left : styles.right}>
                        <span className={styles.msg_lst__item__author}>{message.author}</span>
                        <span className={styles.msg_lst__item__txt}>{message.text}</span>
                    </div>
                ))
            }
        </div >
    )
}