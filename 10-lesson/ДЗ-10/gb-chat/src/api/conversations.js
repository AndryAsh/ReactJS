import { get, set, child, ref, remove } from 'firebase/database';
import { database } from './firebase';

export const createConversationAPI = (title, id) => {
    return set(
        child(ref(database), `conversations/${id}`),
        title)
}

export const getConversationsAPI = () => {
    return get(child(ref(database), 'conversations'))
}

export const deleteConversationAPI = (title, id) => {
    return (
        remove(
            child(ref(database), `conversations/${id}`)
        ),
        remove(
            child(ref(database), `messages/${title}`)
        )
    )
}
/*
export const getConversationsAPI = async () => {
    const data = await get(child(ref(database), 'conversations'));
    console.log('data conversations (firebase) >>> ', data);
    const conversations = {};

    data.forEach(snap => {
        //console.log('snap.key >>> ', snap.key);
        //console.log('snap.val >>> ', snap.val());
conversations[snap.key] = snap.val();
    });

console.log('conversations >>> ', conversations);
}
*/