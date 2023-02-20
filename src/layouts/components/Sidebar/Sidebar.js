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

const cx = classNames.bind(styles)

function Sidebar({ fullScreen }) {
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
                    {!useLocalStorage().signIn && <Login />}
                    <SuggestedAccounts title="Suggested accounts" />
                    {useLocalStorage().signIn && <FollowingAccounts title="Following accounts" />}
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
