import { SEND_MESSAGE, sendMessage } from "../messages";

export const botMessage = (store) => (next) => (action) => {
    if (action.type === SEND_MESSAGE && action.payload.message.author !== 'bot') {
        setTimeout(() => {
            store.dispatch(
                sendMessage(
                    action.payload.userId,
                    {
                        author: 'bot',
                        text: 'Привет! Вам отвечает робот! (middleware)',
                    })
            );
        }, 2000);
    }
    return next(action);
};