import classNames from 'classnames/bind'

import styles from './Sidebar.module.scss'
import config from '~/config'
import Menu, { MenuItem } from './Menu'
import Login from './Login'
import SuggestedAccounts from '~/components/SuggestedAccounts'
import Discover from './Discover'
import FooterSidebar from '~/layouts/components/Sidebar/FooterSidebar'
import { useContextProvider } from '~/hooks'

const cx = classNames.bind(styles)

function Sidebar() {
    const [state] = useContextProvider()
    const { userSignIn } = state

    return (
        <aside className={cx('wrapper')}>
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
            {!userSignIn && <Login />}
            <SuggestedAccounts suggested title="Suggested accounts" />
            {userSignIn && <SuggestedAccounts title="Following accounts" />}
            <Discover />
            <FooterSidebar />
        </aside>
    )
}

export default Sidebar
