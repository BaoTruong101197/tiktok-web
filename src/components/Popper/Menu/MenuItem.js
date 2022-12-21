import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import Button from '~/components/Button'
import SwitchButton from '~/components/SwitchButton'
import { useEffect, useRef } from 'react'

const cx = classNames.bind(styles)

function MenuItem({ data, level, onClick }) {
    const nameRef = useRef()

    useEffect(() => {
        if (level > 1) {
            nameRef.current.style.fontWeight = '400'
        } else {
            nameRef.current.style.fontWeight = '600'
        }
    }, [level])

    return (
        <Button
            leftIcon={data.icon}
            className={cx('menu-item')}
            to={data.to}
            separate={data.separate}
            onClick={onClick}
        >
            <span className={cx('menu-name')} ref={nameRef}>
                {data.name}
            </span>
            {data.toggle && (
                <span className={cx('switch-button')}>
                    <SwitchButton />
                </span>
            )}
        </Button>
    )
}

export default MenuItem
