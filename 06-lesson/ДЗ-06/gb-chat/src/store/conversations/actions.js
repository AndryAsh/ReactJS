/* import { CREATE_CONVERSATION, DELETE_CONVERSATION } from './types'; */
import { CREATE_CONVERSATION } from './types';
import { DELETE_CONVERSATION } from '../types'
export const createConversation = (conversation) => ({
    type: CREATE_CONVERSATION,
    payload: conversation,
});

export const deleteConversation = (conversation, conversationId) => ({
    type: DELETE_CONVERSATION,
    payload: { conversation, conversationId },
});
