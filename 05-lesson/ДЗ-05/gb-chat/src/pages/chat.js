import { Routes, Route } from "react-router-dom";
import { App, /* Header, */ MessageList, UserList } from '../componetns';
import styles from '../componetns/app/app.module.scss';

export const ChatPage = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <App
                        messages={<h3 className={styles.choice_text}>Выберите чат ...</h3>}
                        users={<UserList />}
                    />
                }
            />
            <Route
                path=":userId"
                element={
                    <App
                        messages={<MessageList />}
                        users={<UserList />}
                    />
                } />
        </Routes>
    )
}

/* 

<App
        messages={<MessageList />}
        users={<UserList />}
    />

app_header={<Header />}
*/