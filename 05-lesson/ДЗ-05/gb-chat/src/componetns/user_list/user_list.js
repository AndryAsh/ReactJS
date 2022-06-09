import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { User } from "./user/user";
import styles from './user_list.module.scss';

export function UserList() {
    const [userList, setUser] = useState([]);

    const { userId } = useParams();

    useEffect(() => {
        const list = [];
        for (let i = 1; i <= 3; i++) {
            list.push(
                {
                    id: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        let r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r && 0x3) || 0x8);
                        return v.toString(16);
                    }),
                    name: `room${i}`,
                }
            );
        }
        setUser(list);
    }, [])

    const getUserName = (id) => {
        const user = userList.find(user => id === user.id);
        console.log(user.name)
        return user.name
    }

    return (
        <List component="nav" className={styles.user_list}>
            {userList.map((user) => (
                <Link key={user.id} to={`/chat/${getUserName(user.id)}`}>
                    <User
                        className={styles.user_list__item}
                        user={user}
                        selected={userId === user.name}
                    />
                </Link>
            ))}
        </List>
    );

    /* return (
        <List component="nav" className={styles.user_list}>
            {userList.map((user) => (
                <User
                    key={user.id}
                    className={styles.user_list__item}
                    user={user}
                    selected={selectedId === user.id}
                    handleListItemClick={() => setSelectedId(user.id)}
                />
            ))}
        </List>
    ); */

}
