import PropTypes from 'prop-types'
import { memo, useState } from 'react'
import styles from './SwitchButton.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function SwitchButton({ className }) {
    const [lightTheme, setLightTheme] = useState(false)

    return (
        <div
            className={cx('wrapper', className)}
            onClick={() => setLightTheme(!lightTheme)}
            style={lightTheme ? { backgroundColor: '#0be09b' } : { backgroundColor: '#1618231f' }}
        >
            <span className={cx('icon')} style={lightTheme ? { left: '22px' } : { left: '2px' }}></span>
        </div>
    )
}

SwitchButton.prototype = {
    className: PropTypes.string
}

export default memo(SwitchButton)
