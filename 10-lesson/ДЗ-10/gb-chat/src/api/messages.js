import { get, set, child, ref, /* push, */ remove, } from 'firebase/database';
import { database } from './firebase';

export const createMessageAPI = (message, roomID) => {
    return set(
        child(ref(database), `messages/${roomID}/${message.id}`),
        message)
}

export const getMessagesAPI = () => {
    return get(child(ref(database), 'messages'))
}

export const deleteMessageAPI = (roomId, messageID) => {
    return remove(
        child(ref(database), `messages/${roomId}/${messageID}`)
    )
}
