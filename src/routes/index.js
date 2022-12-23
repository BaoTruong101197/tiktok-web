import config from '~/config/routes'

// Layout
import { HeaderOnly } from '~/components/Layout'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Profile from '~/pages/Profile'

const publicRoutes = [
    { path: config.home, component: Home },
    { path: config.following, component: Following },
    { path: config.profile, component: Profile },
    { path: config.upload, component: Upload, layout: HeaderOnly }
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
