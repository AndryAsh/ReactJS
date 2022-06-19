import styles from "./app.module.scss";

export function App({ app_header, messages, users }) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                {app_header}
            </div>

            <div className={styles.content}>
                <div className={styles.content__chat_list}>
                    {users}
                </div>

                <div className={styles.content__msg_list}>
                    {messages}
                </div>
            </div>
        </div>
    )
}
