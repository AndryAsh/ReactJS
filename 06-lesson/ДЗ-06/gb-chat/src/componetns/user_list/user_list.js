import { useCallback } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { List, Button } from "@mui/material";
import { User } from "./user/user";
import { createConversation, deleteConversation } from '../../store/conversations';
import styles from './user_list.module.scss';

export function UserList() {
    const conversations = useSelector((state) => state.conversations.conversations);

    const dispatch = useDispatch();

    const { userId } = useParams();

    const navigate = useNavigate();

    const createConversationByName = () => {
        const name = prompt('Введите название комнаты');
        const isValidName = !(Object.values(conversations).includes(name));

        if (!!name && isValidName) {
            dispatch(createConversation(name));
        } else {
            alert('Не валидная комната!')
        }
    }

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    const deleteConversationByID = useCallback(
        (conversation, event) => {
            event.preventDefault();
            dispatch(deleteConversation(conversation, getKeyByValue(conversations, conversation)));
            navigate('/chat');
        },
        [dispatch, navigate]
    );

    return (
        <>
            <List component="nav" className={styles.user_list}>
                {Object.entries(conversations).map(([key, value]) => (
                    <Link key={key} to={`/chat/${value}`}>
                        <User
                            className={styles.user_list__item}
                            user={value}
                            selected={userId === value}
                            deleteConversationByID={deleteConversationByID}
                        />
                    </Link>
                ))}
            </List>
            <Button onClick={createConversationByName}>Создать комнату</Button>
        </>
    );
}
