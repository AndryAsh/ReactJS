import {
    messagesReducer,
    getMessagesStart,
    getMessagesSuccess,
    getMessagesError,
    createMessageStart,
    createMessageSuccess,
    createMessageError,
    deleteMessageStart,
    deleteMessageSuccess,
    deleteMessageError
} from '../../messages';

describe('messages reducer', () => {
    describe('get messages types', () => {
        it("start", () => {
            const state = messagesReducer(
                { pending: false, error: "error" },
                getMessagesStart()
            );

            expect(state.pending).toBe(true);
            expect(state.error).toBe(null);
        });

        it("success", () => {
            const MESSAGES = "test messages";

            const state = messagesReducer(
                { pending: true, messages: {} },
                getMessagesSuccess(MESSAGES)
            );

            expect(state.pending).toBe(false);
            expect(state.messages).toBe(MESSAGES);
        });

        it("error", () => {
            const ERROR = "test error";

            const state = messagesReducer(
                { pending: true, error: null },
                getMessagesError(ERROR)
            );

            expect(state.pending).toBe(false);
            expect(state.error).toBe(ERROR);
        });
    });

    describe('create messages types', () => {
        it("start", () => {
            const state = messagesReducer(
                { pendingCreate: false, errorCreate: "error" },
                createMessageStart()
            );

            expect(state.pendingCreate).toBe(true);
            expect(state.errorCreate).toBe(null);
        });

        it("success", () => {
            const MESSAGE = { author: "user", text: "test message" };
            const USER_ID = 'room1';

            const state = messagesReducer(
                { pendingCreate: true, messages: {} },
                createMessageSuccess(MESSAGE, USER_ID)
            );

            expect(state.pendingCreate).toBe(false);
            expect(state.messages[USER_ID]).toBeDefined();
            expect(state.messages[USER_ID].length).toBe(1);
            expect(state.messages[USER_ID][0].author).toBe(MESSAGE.author);
            expect(state.messages[USER_ID][0].text).toBe(MESSAGE.text);
        });

        it("error", () => {
            const ERROR = "test error";

            const state = messagesReducer(
                { pendingCreate: true, errorCreate: null },
                createMessageError(ERROR)
            );

            expect(state.pendingCreate).toBe(false);
            expect(state.errorCreate).toBe(ERROR);
        });
    });

    describe('delete messages types', () => {
        it("start", () => {
            const state = messagesReducer(
                { pendingDelete: false, errorDelete: "error" },
                deleteMessageStart()
            );

            expect(state.pendingDelete).toBe(true);
            expect(state.errorDelete).toBe(null);
        });

        it("success", () => {
            const USER_ID = 'room1';
            const MESSAGE_ID = 'DBjD9MRQQmzHuuzK6ecp3';

            const state = messagesReducer(
                {
                    pendingDelete: true,
                    messages: {
                        room1: [
                            { author: 'user', date: '24.06.2022, 16:14:36', id: 'DBjD9MRQQmzHuuzK6ecp3', text: 'test 1' },
                            { author: 'bot', date: '24.06.2022, 16:14:37', id: 'DBjD9MRQQmzHuuzK6ecp2', text: 'test 2' }
                        ],
                    },
                },
                deleteMessageSuccess(USER_ID, MESSAGE_ID)
            );

            expect(state.messages[USER_ID].length).toBe(1);
            expect(state.messages[USER_ID].find((i) => i.id === MESSAGE_ID)).toBeUndefined();
            expect(state.messages[USER_ID].find((i) => i.author === 'bot')).toBeDefined();
            expect(state.pendingDelete).toBe(false);
        });

        it("error", () => {
            const ERROR = "test error";

            const state = messagesReducer(
                { pendingDelete: true, errorDelete: null },
                deleteMessageError(ERROR)
            );

            expect(state.pendingDelete).toBe(false);
            expect(state.errorDelete).toBe(ERROR);
        });
    });
})