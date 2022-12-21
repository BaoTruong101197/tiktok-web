import { useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import { Popper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem'
import Header from './Header'

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }])
    const currentTab = history[history.length - 1]

    console.log(currentTab);

    const renderItem = () => {
        return currentTab.data.map((item, index) => {
            const isChildren = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if (isChildren) {
                    setHistory([...history, item.children]);
                }
            }} />
        })
    }

    const onBack = () => {

    }

    return (
        <Tippy
            visible={true}
            interactive={true}
            offset={[13, 8]}
            placement="bottom-end"
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>
                        <Header onBack={onBack} title="Language" />
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu
