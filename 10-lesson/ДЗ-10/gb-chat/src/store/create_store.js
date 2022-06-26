import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import think from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { getPublicGistAPI, getGistsByNameAPI } from '../api/gist'
import { profileReducer } from './profile';
import { conversationsReducer } from './conversations';
import { messagesReducer } from './messages';
import { gistsReducer } from './gists';
import { botMessage, logger, timeSheduler, crashReporter/* , think */ } from './middlewares';
import { getConversationsAPI, createConversationAPI, deleteConversationAPI } from '../api/conversations';
import { getMessagesAPI, createMessageAPI, deleteMessageAPI } from '../api/messages';

const api = {
    getPublicGistAPI,
    getGistsByNameAPI,
    getConversationsAPI,
    createConversationAPI,
    deleteConversationAPI,
    getMessagesAPI,
    createMessageAPI,
    deleteMessageAPI,
};

// Проверка работы функции создания сообщения в firebase
/* setTimeout(() => {
    const date = new Date().toLocaleString('ru-RU');
    createMessageAPI(
        { text: 'fff', author: 'user', id: 'V-9gV-ptT5A0lxNwOx8nV', date: date },
        'room1'
    )
}, 500); */

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['messages'],
    whitelist: ['profile'],
};

const rootReducer = combineReducers({
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
    gists: gistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    /* combineReducers({
        profile: profileReducer,
        conversations: conversationsReducer,
        messages: messagesReducer,
    }), */
    compose(
        applyMiddleware(
            /* thunk, */
            think.withExtraArgument(api),
            logger,
            timeSheduler,
            botMessage,
            crashReporter,
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (args) => args
    )
);

export const persistor = persistStore(store);