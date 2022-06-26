import {
    GET_CONVERSATIONS_START,
    GET_CONVERSATIONS_SUCCESS,
    GET_CONVERSATIONS_ERROR,

    CREATE_CONVERSATION_START,
    CREATE_CONVERSATION_SUCCESS,
    CREATE_CONVERSATION_ERROR,
} from './types';
import {
    DELETE_CONVERSATION_START,
    DELETE_CONVERSATION_SUCCESS,
    DELETE_CONVERSATION_ERROR,
} from '../types';

export const getConversationsStart = () => ({
    type: GET_CONVERSATIONS_START,
});

export const getConversationsSuccess = (conversations) => ({
    type: GET_CONVERSATIONS_SUCCESS,
    payload: conversations,
});

export const getConversationsError = (error) => ({
    type: GET_CONVERSATIONS_ERROR,
    payload: error,
});

export const createConversationStart = () => ({
    type: CREATE_CONVERSATION_START,
});

export const createConversationSuccess = (conversation, id) => ({
    type: CREATE_CONVERSATION_SUCCESS,
    payload: { conversation, id },
});

export const createConversationError = (error) => ({
    type: CREATE_CONVERSATION_ERROR,
    payload: error,
});

export const deleteConversationStart = () => ({
    type: DELETE_CONVERSATION_START,
});

export const deleteConversationSuccess = (conversation, id) => ({
    type: DELETE_CONVERSATION_SUCCESS,
    payload: { conversation, id },
});

export const deleteConversationError = (error) => ({
    type: DELETE_CONVERSATION_ERROR,
    payload: error,
});


