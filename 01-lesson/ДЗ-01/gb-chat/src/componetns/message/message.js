import styles from "./message.module.scss";

export function Message({ message }) {
    return (
        <h1 className={styles.msg}>
            {message}
        </h1>
    )
}