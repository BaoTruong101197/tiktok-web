import { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './LoginForm.module.scss'
import Button from '~/components/Button'
import { ClearFormIcon, BackButtonIcon, LoadingIcon } from '~/components/Icons'
import * as authService from '~/services'

const cx = classNames.bind(styles)

function LoginForm({ handleCloseOverlay }) {
    const [nameValue, setNameValue] = useState('')
    const [pwValue, setPwValue] = useState('')
    const [readyLogin, setReadyLogin] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const [hasAccount, setHasAccount] = useState(true)

    useEffect(() => {
        if (!nameValue || !pwValue) {
            setReadyLogin(false)
            return
        }
        setReadyLogin(true)
    }, [nameValue, pwValue])

    const handleLogin = useCallback(() => {
        setLoading(true)
        const data = { email: nameValue, password: pwValue }

        const fetchApi = async () => {
            let result
            if (hasAccount) {
                result = await authService.login(data)
            } else {
                data.type = 'email'
                result = await authService.register(data)
            }
            if (result) {
                setLoginError(false)
                const userData = {
                    signIn: true,
                    id: result.data.id,
                    nickname: result.data.nickname,
                    token: result.meta.token
                }
                localStorage.setItem('user-sign-in', JSON.stringify(userData))
                window.location.reload()
            } else {
                setLoginError(true)
            }

            setLoading(false)
        }

        fetchApi()
    }, [nameValue, pwValue, hasAccount])

    const handleKeyPass = e => {
        if (e.keyCode === 13) {
            handleLogin()
        }
    }

    const changeToSignUp = e => {
        e.preventDefault()
        setHasAccount(false)
        setLoginError(false)
    }

    console.log(hasAccount)

    return (
        <div className={cx('login-form')}>
            <div className={cx('login-content')}>
                <h2 className={cx('login-title')}>{hasAccount ? 'Log in' : 'Sign up'}</h2>
                <div className={cx('login-desc')}>
                    <p className={cx('email-username')}>Email or username</p>
                    {hasAccount && (
                        <a href="#!" className={cx('login-link')}>
                            Log in with phone
                        </a>
                    )}
                </div>
                <input
                    className={cx('login-input')}
                    placeholder="Email or username"
                    value={nameValue}
                    onKeyDown={handleKeyPass}
                    onChange={e => setNameValue(e.target.value)}
                />
                <input
                    type="password"
                    className={cx('login-input')}
                    placeholder="Password"
                    value={pwValue}
                    onKeyDown={handleKeyPass}
                    onChange={e => setPwValue(e.target.value)}
                />
                {hasAccount && (
                    <a href="#!" className={cx('login-link')}>
                        Forgot password
                    </a>
                )}
                {loginError ? (
                    <p className={cx('error-text')}>The username or password you entered is incorrect</p>
                ) : (
                    <div style={{ height: '23px' }}></div>
                )}

                <Button
                    className={cx('login-btn', { 'active-btn': readyLogin })}
                    disabled={!readyLogin}
                    type="large"
                    onClick={handleLogin}
                >
                    {loading ? <LoadingIcon className={cx('loading')} /> : hasAccount ? 'Log in' : 'Sign up'}
                </Button>
            </div>
            {hasAccount && (
                <div className={cx('login-footer')}>
                    <p className="login-sign-up">
                        Don’t have an account?{' '}
                        <span onClick={changeToSignUp} className={cx('sign-up')}>
                            Sign up
                        </span>
                    </p>
                </div>
            )}
            <div className={cx('back-btn-login')} onClick={() => setHasAccount(true)}>
                <BackButtonIcon width="24px" height="24px" />
            </div>
            <div className={cx('clear-login')} onClick={handleCloseOverlay}>
                <ClearFormIcon />
            </div>
        </div>
    )
}

LoginForm.propTypes = {
    handleCloseOverlay: PropTypes.func.isRequired
}

export default LoginForm
