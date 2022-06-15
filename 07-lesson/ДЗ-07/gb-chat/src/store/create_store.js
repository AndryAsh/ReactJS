import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { profileReducer } from './profile';
import { conversationsReducer } from './conversations';
import { messagesReducer } from './messages';
import { botMessage, logger, timeSheduler, crashReporter, think } from './middlewares'

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
            think,
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