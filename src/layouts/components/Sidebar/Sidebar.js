import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './Sidebar.module.scss'
import config from '~/config'
import Menu, { MenuItem } from './Menu'
import Login from './Login'
import { SuggestedAccounts, FollowingAccounts } from '~/components/SuggestedAccounts'
import Discover from './Discover'
import FooterSidebar from '~/layouts/components/Sidebar/FooterSidebar'
import { useLocalStorage } from '~/hooks'
import { useContext } from 'react'
import { Context } from '~/layouts/MainLayout/MainLayout'

const cx = classNames.bind(styles)

function Sidebar() {
    const userData = useLocalStorage()
    const { fullScreen } = useContext(Context)

    return (
        <div className={cx('wrapper', { 'full-sidebar': fullScreen })}>
            <div className={cx('sidebar', { 'full-sidebar': fullScreen })}>
                <div className={cx('content')}>
                    <Menu>
                        {config.sidebarMenuData.map(menuItem => (
                            <MenuItem
                                key={menuItem.id}
                                to={menuItem.to}
                                icon={menuItem.icon}
                                iconActive={menuItem.iconActive}
                                title={menuItem.title}
                            />
                        ))}
                    </Menu>
                    {userData && !userData.signIn && <Login />}
                    <SuggestedAccounts title="Suggested accounts" />
                    {userData && userData.signIn && <FollowingAccounts title="Following accounts" />}
                    <Discover />
                    <FooterSidebar />
                </div>
            </div>
        </div>
    )
}

Sidebar.prototype = {
    fullScreen: PropTypes.bool.isRequired
}

export default Sidebar
