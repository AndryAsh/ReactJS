import { NavLink } from "react-router-dom";
import logo from "./chat-logo.svg"
import styles from './header.module.scss';

const menu = [
    { title: 'Home', to: '/' },
    { title: 'Chat', to: '/chat' },
    { title: 'Profile', to: '/profile' },
    { title: 'Gists', to: '/gists' },
];

export function Header() {
    const nameApp = 'gb-chat';

    return <div className={styles.header}>
        <div className={styles.header__wrap_logo}>
            <img src={logo} className={styles.header__logo} alt="logo" />
        </div>
        <h1 className={styles.header__name}>{nameApp}</h1>
        <ul className={styles.header__menu}>
            {
                menu.map((item) => <li key={item.title}><NavLink to={item.to}>{item.title}</NavLink></li>)
            }
        </ul>
    </div>
}