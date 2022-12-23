import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import config from '~/config/routes'
import styles from './Header.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button'
import Image from '~/components/Image'
import { Message as MessageIcon, Inbox as InboxIcon } from '~/components/Icons'
import {
    SeeMore as SeeMoreIcon,
    Language as LanguageIcon,
    Question as QuestionIcon,
    Keyboard as KeyboardIcon,
    Theme as ThemeIcon,
    Profile as ProfileIcon,
    Live as LiveIcon,
    Settings as SettingsIcon,
    LogOut as LogOutIcon
} from '~/components/Icons'
import SeeMoreMenu from '~/components/Popper/Menu'
import Search from './Search'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        name: 'English',
        icon: LanguageIcon,
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    name: 'English'
                },
                {
                    code: 'vi',
                    name: 'Tiếng Việt (Việt Nam)'
                },
                {
                    code: 'la-3',
                    name: 'العربية'
                },
                {
                    code: 'la-4',
                    name: 'বাঙ্গালি (ভারত)'
                },
                {
                    code: 'la-5',
                    name: 'Cebuano (Pilipinas)'
                },
                {
                    code: 'la-6',
                    name: 'Čeština (Česká republika)'
                },
                {
                    code: 'la-7',
                    name: 'Deutsch'
                },
                {
                    code: 'la-8',
                    name: 'Ελληνικά (Ελλάδα)'
                },
                {
                    code: 'la-9',
                    name: 'Español'
                },
                {
                    code: 'la-10',
                    name: 'Suomi (Suomi)'
                },
                {
                    code: 'la-11',
                    name: 'Filipino (Pilipinas)'
                },
                {
                    code: 'la-12',
                    name: 'Français'
                },
                {
                    code: 'la-13',
                    name: 'עברית (ישראל)'
                }
            ]
        }
    },
    {
        name: 'Feedback and help',
        icon: QuestionIcon,
        to: '/feedback'
    },
    {
        name: 'Keyboard shortcuts',
        icon: KeyboardIcon
    },
    {
        name: 'Dark mode',
        icon: ThemeIcon,
        toggle: true
    }
]

const USER_MENU_ITEMS = [
    {
        name: 'View profile',
        icon: ProfileIcon,
        to: '/profile'
    },
    {
        name: 'Get Coins',
        icon: QuestionIcon,
        to: '/coins'
    },
    {
        name: 'LIVE Studio',
        icon: LiveIcon,
        to: '/live'
    },
    {
        name: 'Settings',
        icon: SettingsIcon,
        to: '/setting'
    },
    ...MENU_ITEMS,
    {
        name: 'Log out',
        icon: LogOutIcon,
        separate: true
    }
]

function Header() {
    const userSignIn = true

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to={config.home} style={{ display: 'flex' }}>
                    <Image src={images.logo} alt="Logo" className={cx('logo')} />
                </Link>
                <Search />
                <div className={cx('header-right')}>
                    <Button className={cx('upload-btn')} leftIcon={faPlus}>
                        Upload
                    </Button>
                    {userSignIn ? (
                        <>
                            <Tippy content="Message">
                                <span className={cx('message-icon')}>
                                    <MessageIcon />
                                </span>
                            </Tippy>
                            <Tippy content="Inbox">
                                <span className={cx('inbox-icon')}>
                                    <InboxIcon />
                                </span>
                            </Tippy>
                            <SeeMoreMenu items={USER_MENU_ITEMS}>
                                <span className={cx('avatar-wrapper')}>
                                    <Image
                                        className={cx('user-avatar')}
                                        src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/avatar-dep-cute.jpg"
                                        alt="Avatar"
                                    />
                                </span>
                            </SeeMoreMenu>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                            <SeeMoreMenu items={MENU_ITEMS}>
                                <button className={cx('see-more')}>
                                    <SeeMoreIcon className={cx('see-more-icon')} />
                                </button>
                            </SeeMoreMenu>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
