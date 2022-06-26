import {
    /* CREATE_CONVERSATION, */
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

const initialState = {
    conversations: {},
    pending: false,
    error: null,

    pendingCreate: false,
    errorCreate: null,

    pendingDelete: false,
    errorDelete: null,
};

export const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONVERSATIONS_START:
            return {
                ...state,
                pending: true,
                error: null,
            }
        case GET_CONVERSATIONS_SUCCESS:
            return {
                ...state,
                pending: false,
                conversations: action.payload,
            }
        case GET_CONVERSATIONS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload,
            }

        case CREATE_CONVERSATION_START:
            return {
                ...state,
                pendingCreate: true,
                errorCreate: null,
            }
        case CREATE_CONVERSATION_SUCCESS:
            return {
                ...state,
                pendingCreate: false,
                conversations: { ...state.conversations, [action.payload.id]: action.payload.conversation },
            }
        case CREATE_CONVERSATION_ERROR:
            return {
                ...state,
                pendingCreate: false,
                errorCreate: action.payload,
            }

        case DELETE_CONVERSATION_START:
            return {
                ...state,
                pendingDelete: true,
                errorDelete: null,
            }
        case DELETE_CONVERSATION_SUCCESS:
            delete state.conversations[action.payload.id];
            return {
                state,
                pendingDelete: false,
                conversations: state.conversations,
            }
        case DELETE_CONVERSATION_ERROR:
            return {
                ...state,
                pendingDelete: false,
                errorDelete: action.payload,
            }
        default:
            return state;
    }
}