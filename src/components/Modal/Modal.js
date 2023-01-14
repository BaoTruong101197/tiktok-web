import classNames from 'classnames/bind'
import styles from './Modal.module.scss'
const cx = classNames.bind(styles)

function ModalOverlay({ showModal, className, children }) {

    return (
        <div className={cx('modal', { 'show-modal': showModal })}>
            <div className={cx('overlay')}></div>
            <div className={cx('content', { [className]: className })}>{children}</div>
        </div >
    )
}

export default ModalOverlay
