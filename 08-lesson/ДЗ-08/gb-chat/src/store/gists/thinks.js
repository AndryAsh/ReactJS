import {
    getGistsStart, getGistsSuccess, getGistsError,
    getGistsByNameError, getGistsByNameStart, getGistsByNameSuccess,
} from './actions';
/* import { getPublicGistAPI } from '../../api/gist'; */

/* const URL = (page) => `https://api.github.com/gists/public?page=${page}`; */

export const getGists = (page = 1) => async (dispatch, _, api) => {
    try {
        dispatch(getGistsStart());

        /* const result = await fetch(URL(page));
        const data = await result.json(); */

        const { data } = await api.getPublicGistAPI(page);

        /* const { data } = await api.getGistsByName(); */

        dispatch(getGistsSuccess(data));

    } catch (e) {
        dispatch(getGistsError(e));
    }
}

export const getGistsByName = (name) => async (dispatch, _, api) => {
    try {
        dispatch(getGistsByNameStart());

        const { data } = await api.getGistsByNameAPI(name);

        dispatch(getGistsByNameSuccess(data));
    } catch (e) {
        dispatch(getGistsByNameError(e));
    }
};
