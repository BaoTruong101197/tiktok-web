import config from '~/config'

// Layout
import { HeaderOnly } from '~/layouts'

import Home from '~/pages/Home'
import Upload from '~/pages/Upload'
import Profile from '~/pages/Profile'
import Live from '~/pages/Live'

const publicRoutes = [
    { path: config.routes.home, component: Home, title: 'for-you' },
    { path: config.routes.following, component: Home, title: 'following' },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly }
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
