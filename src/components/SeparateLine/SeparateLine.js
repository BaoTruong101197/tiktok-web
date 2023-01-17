import { memo } from 'react';
import classNames from 'classnames/bind'
import styles from './SeparateLine.module.scss'

const cx = classNames.bind(styles)

function SeparateLine() {
    return <div className={cx('separate-line')}></div>
}

export default memo(SeparateLine)
