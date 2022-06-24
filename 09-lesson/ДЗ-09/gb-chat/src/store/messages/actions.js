import { SEND_MESSAGE, /* DELETE_MESSAGE */ } from './types';
import {
    GET_MESSAGES_START,
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_ERROR,

    CREATE_MESSAGE_START,
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_ERROR,

    DELETE_MESSAGE_START,
    DELETE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_ERROR,
} from './types';

export const sendMessage = (userId, message) => ({
    type: SEND_MESSAGE,
    payload: { userId, message },
});

/* export const deleteMessage = (userId, messageId) => ({
    type: DELETE_MESSAGE,
    payload: { userId, messageId },
}); */

export const getMessagesStart = () => ({
    type: GET_MESSAGES_START,
});

export const getMessagesSuccess = (messages) => ({
    type: GET_MESSAGES_SUCCESS,
    payload: messages,
});

export const getMessagesError = (error) => ({
    type: GET_MESSAGES_ERROR,
    payload: error,
});

export const createMessageStart = () => ({
    type: CREATE_MESSAGE_START,
});

export const createMessageSuccess = (message, userId) => ({
    type: CREATE_MESSAGE_SUCCESS,
    payload: { message, userId },
});

export const createMessageError = (error) => ({
    type: CREATE_MESSAGE_ERROR,
    payload: error,
});

export const deleteMessageStart = () => ({
    type: DELETE_MESSAGE_START,
});

export const deleteMessageSuccess = (userId, messageID) => ({
    type: DELETE_MESSAGE_SUCCESS,
    payload: { userId, messageID },
});

export const deleteMessageError = (error) => ({
    type: DELETE_MESSAGE_ERROR,
    payload: error,
});