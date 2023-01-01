import classNames from 'classnames/bind'
import styles from './ActionItem.module.scss'

const cx = classNames.bind(styles)

function ActionItem({ icon, number }) {
    return (
        <div className={cx('action')}>
            <button className={cx('btn')}>{icon}</button>
            <strong className={cx('number')}>{number}</strong>
        </div>
    )
}

export default ActionItem
