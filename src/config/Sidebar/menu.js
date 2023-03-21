import {
    HomeIcon,
    HomeActiveIcon,
    PeopleGroupIcon,
    PeopleGroupActiveIcon,
    LiveMenuIcon,
    LiveActiveIcon
} from '~/components/Icons'

export const menu = [
    {
        id: 1,
        to: '/',
        icon: <HomeIcon />,
        iconActive: <HomeActiveIcon />,
        title: 'For You'
    },
    {
        id: 2,
        to: '/following',
        icon: <PeopleGroupIcon />,
        iconActive: <PeopleGroupActiveIcon />,
        title: 'Following'
    },
    {
        id: 3,
        to: '/live',
        icon: <LiveMenuIcon />,
        iconActive: <LiveActiveIcon />,
        title: 'LIVE'
    }
]
