import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getGists, getGistsByName } from '../store/gists';
import styles from '../componetns/profile_form/profile_form.module.scss';
import debounce from "lodash.debounce";

const searchGistsDebounced = debounce((query, dispatch) => {
    dispatch(getGistsByName(query));
}, 1000);

export const GistPage = () => {
    const [value, setValue] = useState('');

    // Неправильный варант создания запроса к API сервера
    /*     const [gists, setGists] = useState([]);
        const [error, setError] = useState(null);
        const [isLoading, setIsLoading] = useState(false);
    
        useEffect(() => {
            const getGist = async () => {
                try {
                    setIsLoading(true);
                    const result = await fetch(URL);
                    const data = await result.json();
    
                    if (result.status === 200) {
                        setGists(data);
                    } else {
                        setError(data);
                    }
                } catch (e) {
                    setError(e);
                } finally {
                    setIsLoading(false);
                }
            }
            getGist();
        }, []); */

    const {
        gists, error, pending,
        gistsByName, errorByName, pendingByName,
    } = useSelector((state) => state.gists)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGists());
        /* dispatch(getGistsByName()); */
    }, [dispatch]);

    useEffect(() => {
        if (!!value) {
            searchGistsDebounced(value, dispatch);
        }
    }, [dispatch, value])

    if (error || errorByName) {
        return (
            <div>
                <h1>
                    ERROR !!!
                </h1>
            </div>
        )
    }

    return (
        <div>
            <h1>
                Gist Page
            </h1>
            <div className={styles.profile_wrapper}>
                <div className={styles.item}>
                    {pending ? (
                        <h1>Loading ...</h1>
                    ) : (
                        <div>
                            {
                                Array.from({ length: 10 })
                                    .map((_, index) => index + 1)
                                    .map((item) => (
                                        <button
                                            onClick={() => dispatch(getGists(item))}
                                            key={item}>{item}
                                        </button>
                                    ))
                            }
                            {
                                gists.map((gist, index) => (
                                    <div key={index}>
                                        <h5>
                                            {gist.description || (
                                                <span style={{ fontWeight: "bold" }}>no descriotion</span>
                                            )}
                                        </h5>
                                        <hr />
                                    </div>)
                                )
                            }
                        </div>
                    )}
                </div>
                <div className={styles.item}>
                    <input
                        placeholder="search"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    {pendingByName ? (
                        <h1>Loading ...</h1>
                    ) : (
                        <div>
                            {
                                gistsByName.map((gist, index) => (
                                    <div key={index}>
                                        <h5>
                                            {gist.description || (
                                                <span style={{ fontWeight: "bold" }}>no descriotion</span>
                                            )}
                                        </h5>
                                        <hr />
                                    </div>)
                                )
                            }
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}