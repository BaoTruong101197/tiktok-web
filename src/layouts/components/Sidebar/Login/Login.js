import classNames from 'classnames/bind'
import Button from '~/components/Button'
import styles from './Login.module.scss'
import { useContextProvider } from '~/hooks'
import { setUserSignIn } from '~/store/actions'

const cx = classNames.bind(styles)

function Login() {
    const [, dispatch] = useContextProvider()

    return (
        <div className={cx('wrapper')}>
            <p className={cx('login-title')}>Log in to follow creators, like videos, and view comments.</p>
            <Button
                primary
                outline
                type="large"
                className={cx('login-btn')}
                onClick={() => dispatch(setUserSignIn(true))}
            >
                Log in
            </Button>
        </div>
    )
}

export default Login
