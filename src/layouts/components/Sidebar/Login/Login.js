import classNames from 'classnames/bind'
import Button from '~/components/Button';
import styles from './Login.module.scss'

const cx = classNames.bind(styles)

function Login() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('login-title')}>Log in to follow creators, like videos, and view comments.</p>
            <Button primary outline type="large" className={cx('login-btn')}>Log in</Button>
        </div>
    );
}

export default Login;