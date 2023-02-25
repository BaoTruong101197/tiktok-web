import routes from './routes'
import { MENU_ITEMS, USER_MENU_ITEMS } from './Header/seeMoreMenu'
import { menu as sidebarMenuData } from './Sidebar/menu'
import { discover as sidebarDiscoverData } from './Sidebar/discover'
import * as footerData from './Sidebar/footer'
import { share_user } from './Profile/shareUser'

const config = {
    routes,
    MENU_ITEMS,
    USER_MENU_ITEMS,
    sidebarMenuData,
    sidebarDiscoverData,
    footerData,
    share_user
}

export default config
