export const crashReporter = (store) => (next) => (action) => {
    try {
        next(action);
    } catch (e) {
        console.log('ERROR >>> ', e);
    }
};