import { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Menu.module.scss'
import Button from '~/components/Button'
import SwitchButton from '~/components/SwitchButton'

const cx = classNames.bind(styles)

function MenuItem({ data, level, onClick }) {
    let Icon = Fragment
    if (data.icon) {
        Icon = data.icon
    } 

    return (
        <Button
            LeftIcon={<Icon />}
            className={cx('menu-item', {
                'menu-switch': data.toggle
            })}
            to={data.to}
            separate={data.separate}
            onClick={onClick}
        >
            <span className={cx('menu-name')} style={level > 1 ? { fontWeight: '400' } : { fontWeight: '600' }}>
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

MenuItem.prototype = {
    data: PropTypes.object.isRequired,
    level: PropTypes.number,
    onClick: PropTypes.func
}

export default MenuItem
