import logo from "./chat-logo.svg"
import styles from './header.module.scss';

export function Header({ nameApp }) {

    return <div className={styles.header}>
        <div className={styles.header__wrap_logo}>
            <img src={logo} className={styles.header__logo} alt="logo" />
        </div>
        <h1 className={styles.header__name}>{nameApp}</h1>
    </div>
}