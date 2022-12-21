import styles from './Popper.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Popper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>
}

export default Popper
