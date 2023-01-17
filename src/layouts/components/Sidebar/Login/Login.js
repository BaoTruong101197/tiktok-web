import classNames from 'classnames/bind'
import Button from '~/components/Button'
import styles from './Login.module.scss'
import SeparateLine from '~/components/SeparateLine'
import { actions } from '~/store'
import { useContextProvider } from '~/hooks'

const cx = classNames.bind(styles)

function Login() {
    const [, dispatch] = useContextProvider()

    return (
        <div className={cx('wrapper')}>
            <SeparateLine />
            <p className={cx('login-title')}>Log in to follow creators, like videos, and view comments.</p>
            <Button
                primary
                outline
                type="large"
                className={cx('login-btn')}
                onClick={() => dispatch(actions.setShowModal(true))}
            >
                Log in
            </Button>
        </div>
    )
}

export default Login
