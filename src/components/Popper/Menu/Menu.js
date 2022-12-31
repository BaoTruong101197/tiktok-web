import { useState } from 'react'
import { useSpring, motion } from 'framer-motion'
import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import styles from './Menu.module.scss'
import { Popper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem'
import Header from './Header'
import { useContextProvider } from '~/hooks'
import { actions } from '~/store'

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {
    const [, dispatch] = useContextProvider()
    const [history, setHistory] = useState([{ data: items }])
    const currentTab = history[history.length - 1]

    // Animation
    const springConfig = { damping: 15, stiffness: 150 }
    const opacity = useSpring(0, springConfig)

    const renderItem = () => {
        return currentTab.data.map((item, index) => {
            const isChildren = !!item.children
            const isUserSignIn = !!item.logout
            return (
                <MenuItem
                    key={index}
                    data={item}
                    level={history.length}
                    onClick={() => {
                        if (isChildren) {
                            setHistory([...history, item.children])
                        } else if (isUserSignIn) {
                            dispatch(actions.setUserSignIn(false))
                        }
                    }}
                />
            )
        })
    }

    const onBack = () => {
        setHistory(history.slice(0, history.length - 1))
    }

    function onMount() {
        opacity.set(1)
    }

    function onHide({ unmount }) {
        opacity.set(0)
        setHistory(history.slice(0, 1))
    }

    return (
        <Tippy
            interactive
            offset={[13, 8]}
            placement="bottom-end"
            animation={true}
            onMount={onMount}
            onHide={onHide}
            delay={[0, 800]}
            hideOnClick={false}
            render={attrs => (
                <motion.div className={cx('menu-list')} tabIndex="-1" style={{ opacity }} {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>
                        {history.length > 1 && <Header onBack={onBack} title={currentTab.title} />}
                        <div className={cx('menu-content')}>{renderItem()}</div>
                    </PopperWrapper>
                </motion.div>
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
