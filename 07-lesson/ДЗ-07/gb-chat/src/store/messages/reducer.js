import { nanoid } from 'nanoid';
import { SEND_MESSAGE, DELETE_MESSAGE } from './types';
import { DELETE_CONVERSATION } from '../types';

const initialState = {
    messages: {}
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.userId]: [
                        ...(state.messages[action.payload.userId]) ?? [],
                        { ...action.payload.message, id: nanoid(), date: new Date() }
                    ]
                }
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.userId]: state.messages[action.payload.userId].filter(
                        (message) => message.id !== action.payload.messageId
                    )
                }
            }
        case DELETE_CONVERSATION:
            delete state.messages[action.payload.conversation];
            return state;
        default:
            return state;
    }
}