import { SEND_MESSAGE, DELETE_MESSAGE } from './types';

export const sendMessage = (userId, message) => ({
    type: SEND_MESSAGE,
    payload: { userId, message },
});

export const deleteMessage = (userId, messageId) => ({
    type: DELETE_MESSAGE,
    payload: { userId, messageId },
});