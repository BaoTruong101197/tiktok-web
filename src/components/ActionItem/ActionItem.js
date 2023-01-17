import { forwardRef } from 'react'
import classNames from 'classnames/bind'
import styles from './ActionItem.module.scss'

const cx = classNames.bind(styles)

function ActionItem({ icon, number, onClick }, ref) {
    return (
        <div className={cx('action')} ref={ref} onClick={onClick}>
            <button className={cx('btn')}>{icon}</button>
            <strong className={cx('number')}>{number}</strong>
        </div>
    )
}


export default forwardRef(ActionItem)
