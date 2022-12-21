import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import Button from '~/components/Button'
import SwitchButton from '~/components/SwitchButton'

const cx = classNames.bind(styles)

function MenuItem({ data }) {
    return (
        <Button leftIcon={data.icon} className={cx('menu-item')} to={data.to}>
            {data.title}
            {data.toggle && (
                <span className={cx('switch-button')}>
                    <SwitchButton />
                </span>
            )}
        </Button>
    )
}

export default MenuItem
