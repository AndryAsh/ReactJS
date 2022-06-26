import { useSelector, useDispatch } from 'react-redux';
import { toggleVisibleProfile } from '../store/profile';
import { InputForm } from '../componetns/profile_form';
import styles from '../componetns/profile_form/profile_form.module.scss';

export const ProfilePage = () => {
    const profile = useSelector((state) => state.profile);

    const dispatch = useDispatch();

    return (
        <div className={styles.profile_wrapper}>
            <div className={styles.profile_item}>
                <h1>Profile page</h1>
                <button onClick={() => dispatch(toggleVisibleProfile())}>ToggleVisibleProfile</button>
                {profile.isVisibleProfile && (
                    <>
                        <h3>{profile.firstName}</h3>
                        <h3>{profile.lastName}</h3>
                    </>
                )}
            </div>
            <InputForm firstName={profile.firstName} lastName={profile.lastName} />
        </div>
    )
}