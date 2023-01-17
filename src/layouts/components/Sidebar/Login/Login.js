import { useState } from 'react'
import classNames from 'classnames/bind'
import Button from '~/components/Button'
import styles from './Login.module.scss'
import SeparateLine from '~/components/SeparateLine'
import LoginForm from '~/components/LoginForm'
import ModalOverlay from '~/components/Modal'

const cx = classNames.bind(styles)

function Login() {
    const [showModal, setShowModal] = useState(false)
    const handleCloseOverlay = () => {
        setShowModal(false)
    }

    return (
        <div className={cx('wrapper')}>
            <SeparateLine />
            <p className={cx('login-title')}>Log in to follow creators, like videos, and view comments.</p>
            <Button
                primary
                outline
                type="large"
                className={cx('login-btn')}
                onClick={() => setShowModal(true)}
            >
                Log in
            </Button>
            <ModalOverlay showModal={showModal} className={cx('modal')}>
                <LoginForm handleCloseOverlay={handleCloseOverlay} />
            </ModalOverlay>
        </div>
    )
}

export default Login
