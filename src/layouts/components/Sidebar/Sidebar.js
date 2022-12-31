import classNames from 'classnames/bind'

import styles from './Sidebar.module.scss'
import config from '~/config'
import Menu, { MenuItem } from './Menu'
import {
    HomeIcon,
    HomeActiveIcon,
    PeopleGroupIcon,
    PeopleGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon
} from '~/components/Icons'
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
                <MenuItem to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeActiveIcon />} title="For You" />
                <MenuItem
                    to={`/${config.routes.following}`}
                    icon={<PeopleGroupIcon />}
                    iconActive={<PeopleGroupActiveIcon />}
                    title="Following"
                />
                <MenuItem
                    to={`/${config.routes.live}`}
                    icon={<LiveIcon />}
                    iconActive={<LiveActiveIcon />}
                    title="LIVE"
                />
            </Menu>
            {!userSignIn && <Login />}
            <SuggestedAccounts title="Suggested accounts" />
            {userSignIn && <SuggestedAccounts title="Following accounts" />}
            <Discover />
            <FooterSidebar />
        </aside>
    )
}

export default Sidebar
