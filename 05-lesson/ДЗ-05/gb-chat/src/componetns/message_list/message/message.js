import styles from './message.module.scss';

export function Message({ message }) {

    const formatDateTime = (data) => {
        return `${data.toLocaleString('ru-RU')}`;
    }

    return (
        <div className={message.author !== 'bot' ? styles.left : styles.right}>
            <div className={styles.msg_lst__wrap}>
                <span className={styles.msg_lst__item__author}>{message.author}</span>
                <span className={styles.msg_lst__item__date}>{formatDateTime(message.date)}</span>
            </div>
            <span className={styles.msg_lst__item__txt}>{message.text}</span>
        </div>
    )
} 