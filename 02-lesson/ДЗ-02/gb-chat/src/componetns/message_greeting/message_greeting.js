import styles from "./message_greeting.module.scss";

export function MessageGreeting({ message }) {
    return (
        // Заголовок-приветствие
        <h1 className={styles.msg}>
            {message}
        </h1>
    )
}