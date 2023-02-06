import classNames from 'classnames/bind'

import styles from './Sidebar.module.scss'
import config from '~/config'
import Menu, { MenuItem } from './Menu'
import Login from './Login'
import { SuggestedAccounts, FollowingAccounts } from '~/components/SuggestedAccounts'
import Discover from './Discover'
import FooterSidebar from '~/layouts/components/Sidebar/FooterSidebar'
import { useLocalStorage } from '~/hooks'

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <aside className={cx('sidebar')}>
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
            </aside>
        </div>
    )
}

export default Sidebar
