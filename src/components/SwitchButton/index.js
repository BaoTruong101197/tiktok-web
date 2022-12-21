import { useRef, useState } from 'react'
import styles from './SwitchButton.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function SwitchButton({ className }) {
    const [lightTheme, setLightTheme] = useState(true)
    const wrapperRef = useRef()
    const iconRef = useRef()

    const onSwitch = () => {
        if (!lightTheme) {
            iconRef.current.style.left = '2px'
            wrapperRef.current.style.backgroundColor = '#1618231f'
        } else {
            iconRef.current.style.left = '22px'
            wrapperRef.current.style.backgroundColor = '#0be09b'
        }
        setLightTheme(!lightTheme)
    }

    return (
        <div className={cx('wrapper', className)} ref={wrapperRef} onClick={onSwitch}>
            <span className={cx('icon')} ref={iconRef}></span>
        </div>
    )
}

export default SwitchButton
