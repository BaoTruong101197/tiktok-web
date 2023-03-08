import { memo } from 'react'
import classNames from 'classnames/bind'

import styles from './Upload.module.scss'
import { CheckIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function AllowUser({ allowValue, allowString, handleAllowUsers }) {
    return (
        <div className={cx('allow-wrap')}>
            <label className={cx('allow-label')}>Allow users to:</label>
            <div className={cx('allow-content')}>
                {allowString.map((item, index) => {
                    return (
                        <div className={cx('allow-option')} key={index} onClick={() => handleAllowUsers(index)}>
                            <div
                                className={cx('custom-checkbox', {
                                    'checkbox-checked': allowValue.includes(index)
                                })}
                            >
                                {allowValue.includes(index) && <CheckIcon />}
                            </div>
                            <span className={cx('allow-text')}>{item}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default memo(AllowUser)
