import { Routes, Route } from "react-router-dom";
import { App, /* Header, */ MessageList, UserList } from '../componetns';
import { getConversations } from '../store/conversations';
import { getMessages } from '../store/messages';
import styles from '../componetns/app/app.module.scss';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

export const ChatPage = () => {
    const dispatch = useDispatch();

    const conversations = useSelector((state) => state.conversations.conversations);
    const messages = useSelector((state) => state.messages.messages);

    useEffect(() => {
        if (!Object.keys(conversations).length) {
            dispatch(getConversations());
        }
    }, [dispatch, conversations]);

    useEffect(() => {
        if (!Object.keys(messages).length) {
            dispatch(getMessages());
        }
    }, [dispatch, messages])


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