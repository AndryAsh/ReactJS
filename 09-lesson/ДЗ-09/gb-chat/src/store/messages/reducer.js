/* import { nanoid } from 'nanoid'; */
// import { /* SEND_MESSAGE, */ DELETE_MESSAGE } from './types';
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
import { DELETE_CONVERSATION_SUCCESS } from '../types';

const initialState = {
    messages: {},
    pending: false,
    error: null,

    pendingCreate: false,
    errorCreate: null,

    pendingDelete: false,
    errorDelete: null,
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        /* case SEND_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.userId]: [
                        ...(state.messages[action.payload.userId]) ?? [],
                        { ...action.payload.message, id: nanoid(), date: new Date() }
                    ]
                }
            } */
        /* case DELETE_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.userId]: state.messages[action.payload.userId].filter(
                        (message) => message.id !== action.payload.messageId
                    )
                }
            } */
        case GET_MESSAGES_START:
            return {
                ...state,
                pending: true,
                error: null,
            }
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                pending: false,
                messages: action.payload,
            }
        case GET_MESSAGES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload,
            }
        case CREATE_MESSAGE_START:
            return {
                ...state,
                pendingCreate: true,
                errorCreate: null,
            }
        case CREATE_MESSAGE_SUCCESS:
            return {
                ...state,
                pendingCreate: false,
                messages: {
                    ...state.messages,
                    [action.payload.userId]: [
                        ...(state.messages[action.payload.userId]) ?? [],
                        action.payload.message
                    ]
                }
            }
        case CREATE_MESSAGE_ERROR:
            return {
                ...state,
                pendingCreate: false,
                errorCreate: action.payload,
            }
        case DELETE_MESSAGE_START:
            return {
                ...state,
                pendingDelete: true,
                errorDelete: null,
            }
        case DELETE_MESSAGE_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                pendingDelete: false,
                messages: {
                    ...state.messages,
                    [action.payload.userId]: state.messages[action.payload.userId].filter(
                        (message) => message.id !== action.payload.messageID
                    )
                }
            }
        case DELETE_MESSAGE_ERROR:
            return {
                ...state,
                pendingDelete: false,
                errorDelete: action.payload,
            }
        case DELETE_CONVERSATION_SUCCESS:
            delete state.messages[action.payload.conversation];
            return state;
        default:
            return state;
    }
}