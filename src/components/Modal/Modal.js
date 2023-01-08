import Modal from 'react-overlays/Modal'
import classNames from 'classnames/bind'
import styles from './Modal.module.scss'
const cx = classNames.bind(styles)

function ModalOverlay({ showModal, className, children }) {
    const renderBackdrop = props => <div className={cx('backdrop')} {...props} />

    return (
        <div>
            <Modal className={cx('modal', { [className]: className })} show={showModal} renderBackdrop={renderBackdrop}>
                {children}
            </Modal>
        </div>
    )
}

export default ModalOverlay
