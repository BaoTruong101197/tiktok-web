import { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Menu.module.scss'
import { Popper as PopperWrapper } from '~/components/Popper'
import TippyAnimation from '~/components/TippyAnimation'
import MenuItem from './MenuItem'
import Header from './Header'
import { useLocalStorage } from '~/hooks'
import { logout } from '~/services'

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }])

    const currentTab = history[history.length - 1]
    const userData = useLocalStorage()

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
                            logout(userData.token)
                                .then(response => {
                                    const userData = {
                                        signIn: false,
                                        nickname: '',
                                        token: ''
                                    }
                                    localStorage.setItem('user-sign-in', JSON.stringify(userData))
                                    window.location.reload()
                                })
                                .catch(error => {
                                    console.error('Error:', error)
                                })
                        }
                    }}
                />
            )
        })
    }

    console.log(userData.nickname)

    const onBack = () => {
        setHistory(history.slice(0, history.length - 1))
    }

    return (
        <TippyAnimation
            offset={[13, 8]}
            placement="bottom-end"
            childrenTippy={
                <PopperWrapper className={cx('menu-wrapper')}>
                    <PopperWrapper className={cx('menu-wrapper')}>
                        {history.length > 1 && <Header onBack={onBack} title={currentTab.title} />}
                        <nav className={cx('menu-content')}>{renderItem()}</nav>
                    </PopperWrapper>
                </PopperWrapper>
            }
        >
            {children}
        </TippyAnimation>
    )
}

Menu.prototype = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array
}

export default Menu
