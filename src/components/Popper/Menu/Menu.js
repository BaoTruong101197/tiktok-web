import { useState } from 'react'
import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import styles from './Menu.module.scss'
import { Popper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem'
import Header from './Header'

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }])
    const currentTab = history[history.length - 1]

    const renderItem = () => {
        return currentTab.data.map((item, index) => {
            const isChildren = !!item.children
            return (
                <MenuItem
                    key={index}
                    data={item}
                    level={history.length}
                    onClick={() => {
                        if (isChildren) {
                            setHistory([...history, item.children])
                        }
                    }}
                />
            )
        })
    }

    const onBack = () => {
        setHistory(history.slice(0, history.length - 1))
    }

    return (
        <Tippy
            interactive
            offset={[13, 8]}
            placement="bottom-end"
            onHide={() => setHistory(history.slice(0, 1))}
            delay={[0, 800]}
            hideOnClick={false}
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>
                        {history.length > 1 && <Header onBack={onBack} title={currentTab.title} />}
                        <div className={cx('menu-content')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

Menu.prototype = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array
}

export default Menu
