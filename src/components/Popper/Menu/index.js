import Tippy from '@tippyjs/react/headless'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import { Popper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem'

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />)
    }

    return (
        <Tippy
            visible={true}
            interactive={true}
            offset={[13, 14]}
            placement="bottom-end"
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>{renderItem()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu
