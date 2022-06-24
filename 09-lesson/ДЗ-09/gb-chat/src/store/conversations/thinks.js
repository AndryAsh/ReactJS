import {
    getConversationsStart,
    getConversationsSuccess,
    getConversationsError,

    createConversationStart,
    createConversationSuccess,
    createConversationError,

    deleteConversationStart,
    deleteConversationSuccess,
    deleteConversationError,
} from './actions';
import { createID } from '../../api/create_id'

export const getConversations = () => async (dispatch, _, api) => {
    const conversations = {};

    try {
        dispatch(getConversationsStart());

        const snapshot = await api.getConversationsAPI();

        snapshot.forEach(snap => {
            conversations[snap.key] = snap.val();
        });

        dispatch(getConversationsSuccess(conversations));
    } catch (e) {
        dispatch(getConversationsError(e));
    }
}

export const createConversation = (conversation) => async (dispatch, _, api) => {
    const id = createID();
    try {
        dispatch(createConversationStart());

        await api.createConversationAPI(conversation, id);

        dispatch(createConversationSuccess(conversation, id));
    } catch (e) {
        dispatch(createConversationError(e));
    }
}

export const deleteConversation = (conversation, id) => async (dispatch, _, api) => {
    try {
        dispatch(deleteConversationStart());

        await api.deleteConversationAPI(conversation, id);

        dispatch(deleteConversationSuccess(conversation, id));
    } catch (e) {
        dispatch(deleteConversationError(e));
    }
}


