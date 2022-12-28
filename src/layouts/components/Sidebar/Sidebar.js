import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

import config from '~/config'
import Menu, { MenuItem } from './Menu'
import { HomeIcon, HomeActiveIcon, PeopleGroupIcon, PeopleGroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/components/Icons'
import Login from './Login'
import SuggestedAccounts from '~/components/SuggestedAccounts'
import Discover from './Discover'

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')} style={{ height: '2000px', display: 'block' }}>
            <Menu>
                <MenuItem to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeActiveIcon />} title="For You" />
                <MenuItem to={`/${config.routes.following}`} icon={<PeopleGroupIcon />} iconActive={<PeopleGroupActiveIcon />} title="Following" />
                <MenuItem to={`/${config.routes.live}`} icon={<LiveIcon />} iconActive={<LiveActiveIcon />} title="LIVE" />
            </Menu>
            <Login />
            <SuggestedAccounts />
            <Discover />
        </aside>
    )
}

export default Sidebar
