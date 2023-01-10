import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './LoginForm.module.scss'
import Button from '~/components/Button'
import { ClearForm as ClearFormIcon, BackButton as BackButtonIcon } from '~/components/Icons'
import * as authService from '~/services'

const cx = classNames.bind(styles)

function LoginForm({ handleCloseOverlay }) {
    const [nameValue, setNameValue] = useState('')
    const [pwValue, setPwValue] = useState('')
    const [readyLogin, setReadyLogin] = useState(false)

    useEffect(() => {
        if (!nameValue || !pwValue) {
            setReadyLogin(false)
            return
        }
        setReadyLogin(true)
    }, [nameValue, pwValue])

    const handleLogin = () => {
        const data = { email: nameValue, password: pwValue }

        const fetchApi = async () => {
            const result = await authService.login(data)
            if (result) {
                console.log(result)
            } else {
                console.log('Fail')
            }
        }

        fetchApi()
    }

    return (
        <div className={cx('login-form')}>
            <div className={cx('login-content')}>
                <h2 className={cx('login-title')}>Log in</h2>
                <div className={cx('login-desc')}>
                    <p className={cx('email-username')}>Email or username</p>
                    <a href="#!" className={cx('login-link')}>
                        Log in with phone
                    </a>
                </div>
                <input
                    className={cx('login-input')}
                    placeholder="Email or username"
                    value={nameValue}
                    onChange={e => setNameValue(e.target.value)}
                />
                <input
                    type="password"
                    className={cx('login-input')}
                    placeholder="Password"
                    value={pwValue}
                    onChange={e => setPwValue(e.target.value)}
                />
                <a href="#!" className={cx('login-link')}>
                    Forgot password
                </a>
                <Button
                    className={cx('login-btn', { 'active-btn': readyLogin })}
                    disabled={!readyLogin}
                    type="large"
                    onClick={handleLogin}
                >
                    Log in
                </Button>
            </div>
            <div className={cx('login-footer')}>
                <p className="login-sign-up">
                    Don’t have an account?{' '}
                    <a href="#!" className={cx('sign-up')}>
                        Sign up
                    </a>
                </p>
            </div>
            <div className={cx('back-btn-login')}>
                <BackButtonIcon width="24px" height="24px" />
            </div>
            <div className={cx('clear-login')} onClick={handleCloseOverlay}>
                <ClearFormIcon />
            </div>
        </div>
    )
}

export default LoginForm
