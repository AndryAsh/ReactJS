import {
    getGists,
    getGistsStart,
    getGistsSuccess,
    getGistsError,
    getGistsByName,
    getGistsByNameStart,
    getGistsByNameSuccess,
    getGistsByNameError,
} from '../../gists';

describe("get gists thunk", () => {
    it("success", async () => {
        const PAGE = 2;
        const DATA = "ok";

        const dispatch = jest.fn();
        const getPublicGistAPI = jest.fn().mockResolvedValue({ data: DATA });

        const thunk = getGists(PAGE);

        await thunk(dispatch, null, { getPublicGistAPI });

        expect(getPublicGistAPI).toBeCalledWith(PAGE);
        expect(getPublicGistAPI).toBeCalledTimes(1);

        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
        expect(dispatch).toHaveBeenNthCalledWith(2, getGistsSuccess(DATA));
    });

    it("error", async () => {
        const PAGE = 2;
        const ERROR = { error: "error" };

        const dispatch = jest.fn();
        const getPublicGistAPI = jest.fn().mockRejectedValue(ERROR);

        const thunk = getGists(PAGE);

        await thunk(dispatch, null, { getPublicGistAPI });

        expect(getPublicGistAPI).toBeCalledWith(PAGE);
        expect(getPublicGistAPI).toBeCalledTimes(1);

        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
        expect(dispatch).toHaveBeenNthCalledWith(2, getGistsError(ERROR));
    });
});

describe('get gists by name think', () => {
    it("success", async () => {
        const NAME = 'bogdanq';
        const DATA = 'bogdanq';

        const dispatch = jest.fn();
        const getGistsByNameAPI = jest.fn().mockResolvedValue({ data: DATA });

        const thunk = getGistsByName(NAME);

        await thunk(dispatch, null, { getGistsByNameAPI });

        expect(getGistsByNameAPI).toBeCalledWith(NAME);
        expect(getGistsByNameAPI).toBeCalledTimes(1);

        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, getGistsByNameStart());
        expect(dispatch).toHaveBeenNthCalledWith(2, getGistsByNameSuccess(NAME));
    });

    it("error", async () => {
        const NAME = 'bogdanq';
        const ERROR = { error: 'error' };

        const dispatch = jest.fn();
        const getGistsByNameAPI = jest.fn().mockRejectedValue(ERROR);

        const thunk = getGistsByName(NAME);

        await thunk(dispatch, null, { getGistsByNameAPI });

        expect(getGistsByNameAPI).toBeCalledWith(NAME);
        expect(getGistsByNameAPI).toBeCalledTimes(1);

        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, getGistsByNameStart());
        expect(dispatch).toHaveBeenNthCalledWith(2, getGistsByNameError(ERROR));
    });
});