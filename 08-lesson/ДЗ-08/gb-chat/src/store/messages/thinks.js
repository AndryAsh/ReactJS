import { sendMessage } from './actions';

export const sendMessageWithBot = (userId, message) => (dispatch, getState) => {
    dispatch(sendMessage(userId, message));

    if (message.author !== 'bot') {
        setTimeout(() => {
            dispatch(sendMessage(userId, {
                author: 'bot',
                text: 'Привет! Вам отвечает робот! (think)'
            }));
        }, 2000);
    }
}