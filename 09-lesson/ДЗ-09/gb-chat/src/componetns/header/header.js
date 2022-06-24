import { NavLink } from "react-router-dom";
import { auth } from "../../api/firebase";
import { signOut } from "firebase/auth";
import logo from "./chat-logo.svg"
import styles from './header.module.scss';

const menuWithSession = [
    { title: 'Chat', to: '/chat' },
    { title: 'Profile', to: '/profile' },
    { title: 'Gists', to: '/gists' },
];

const menuWithoutSession = [
    { title: 'Home', to: '/' },
    { title: 'SignUp', to: '/sign-up' },
    { title: 'Login', to: '/login' },
];

export function Header({ session }) {
    const nameApp = 'gb-chat';

    return <div className={styles.header}>
        <div className={styles.header__wrap_logo}>
            <img src={logo} className={styles.header__logo} alt="logo" />
        </div>
        <h1 className={styles.header__name}>{nameApp}</h1>
        {!!session &&
            <ul className={styles.header__menu}>
                {
                    menuWithSession.map((item) => <li key={item.title}><NavLink to={item.to}>{item.title}</NavLink></li>)
                }
            </ul>
        }

        {!session &&
            <ul className={styles.header__menu}>
                {
                    menuWithoutSession.map((item) => <li key={item.title}><NavLink to={item.to}>{item.title}</NavLink></li>)
                }
            </ul>
        }

        {!!session && (
            <button
                onClick={() => signOut(auth)}
            >
                out
            </button>
        )}
    </div>
}