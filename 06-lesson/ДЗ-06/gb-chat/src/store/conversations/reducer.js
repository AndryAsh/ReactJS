/* import { CREATE_CONVERSATION, DELETE_CONVERSATION } from './types'; */
import { CREATE_CONVERSATION } from './types';
import { DELETE_CONVERSATION } from '../types'

const createID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : ((r && 0x3) || 0x8);
        return v.toString(16);
    });
}

const defaultRooms = () => {
    const obj = {};
    for (let i = 1; i <= 3; i++) {
        obj[createID()] = `room${i}`;
    }
    return obj;
}

const initialState = { conversations: defaultRooms() };

export const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CONVERSATION:
            return {
                ...state,
                conversations: { ...state.conversations, [createID()]: action.payload }
            };
        case DELETE_CONVERSATION:
            delete state.conversations[action.payload.conversationId];
            return state;
        default:
            return state;
    }
}