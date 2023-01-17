import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
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

ModalOverlay.propTypes = {
    showModal: PropTypes.bool.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}


export default ModalOverlay
