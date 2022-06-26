/* import { async } from '@firebase/util'; */
import { nanoid } from 'nanoid';
/* import { sendMessage } from './actions'; */
import {
    getMessagesStart,
    getMessagesSuccess,
    getMessagesError,

    createMessageStart,
    createMessageSuccess,
    createMessageError,

    deleteMessageStart,
    deleteMessageSuccess,
    deleteMessageError,
} from './actions';

/* export const sendMessageWithBot = (userId, message) => (dispatch, getState) => {
    dispatch(sendMessage(userId, message));

    if (message.author !== 'bot') {
        setTimeout(() => {
            dispatch(sendMessage(userId, {
                author: 'bot',
                text: 'Привет! Вам отвечает робот! (think)'
            }));
        }, 2000);
    }
} */

export const getMessages = () => async (dispatch, _, api) => {
    const messages = {};
    try {
        dispatch(getMessagesStart());

        const snapshot = await api.getMessagesAPI(messages);
        console.log('snapshot >>> ', snapshot);
        snapshot.forEach(snap => {
            messages[snap.key] = Object.values(snap.val());
        });

        dispatch(getMessagesSuccess(messages));
    } catch (e) {
        dispatch(getMessagesError(e));
    }
}

export const sendMessageWithBot = (userId, message) => async (dispatch, _, api) => {
    Object.assign(message, { id: nanoid(), date: new Date().toLocaleString('ru-RU') });

    try {
        dispatch(createMessageStart());

        await api.createMessageAPI(message, userId);

        dispatch(createMessageSuccess(message, userId));

        if (message.author !== 'bot') {
            setTimeout(() => {
                try {
                    dispatch(createMessageStart());
                    const messageBot = {
                        author: 'bot',
                        text: 'Привет! Вам отвечает робот! (think)',
                        id: nanoid(),
                        date: new Date().toLocaleString('ru-RU')
                    }
                    api.createMessageAPI(messageBot, userId);

                    dispatch(createMessageSuccess(messageBot, userId));
                } catch (e) {
                    dispatch(createMessageError(e));
                }
            }, 2000);
        }
    } catch (e) {
        dispatch(createMessageError(e));
    }
}

export const deleteMessage = (messageID, userId) => async (dispatch, _, api) => {
    try {
        dispatch(deleteMessageStart());

        await api.deleteMessageAPI(messageID, userId);

        dispatch(deleteMessageSuccess(messageID, userId));
    } catch (e) {
        dispatch(deleteMessageError(e));
    }
}
