import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import styles from './Header.module.scss'
import config from '~/config'
import images from '~/assets/images'
import Button from '~/components/Button'
import Image from '~/components/Image'
import Avatar from '~/components/Avatar'
import {
    Message as MessageIcon,
    Inbox as InboxIcon,
    SeeMore as SeeMoreIcon,
    Plus as PlusIcon
} from '~/components/Icons'
import SeeMoreMenu from '~/components/SeeMoreMenu'
import Search from './Search'
import { getUser } from '~/services'
import { actions } from '~/store'
import { useContextProvider } from '~/hooks'

const cx = classNames.bind(styles)

function Header() {
    const [user, setUser] = useState({})
    const [, dispatch] = useContextProvider()

    let signIn = false
    let nickname = ''

    const userData = localStorage.getItem('user-sign-in')
    if (userData) {
        signIn = JSON.parse(userData).signIn
        nickname = JSON.parse(userData).nickname
    }

    useEffect(() => {
        if (signIn) {
            getUser(nickname)
                .then(data => {
                    setUser(data)
                })
                .catch(error => console.log(error))
        }
    }, [nickname, signIn])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to={config.routes.home}>
                    <Image src={images.logo} alt="Logo" className={cx('logo')} />
                </Link>
                <Search />
                <div className={cx('header-right')}>
                    <Button className={cx('upload-btn')} LeftIcon={<PlusIcon />}>
                        Upload
                    </Button>
                    {signIn ? (
                        <>
                            <Tippy content="Message">
                                <span className={cx('message-icon')}>
                                    <MessageIcon />
                                </span>
                            </Tippy>
                            <Tippy content="Inbox">
                                <span className={cx('inbox-icon')}>
                                    <InboxIcon />
                                    <span className={cx('inbox-number')}>12</span>
                                </span>
                            </Tippy>
                            <SeeMoreMenu items={config.USER_MENU_ITEMS}>
                                <span className={cx('avatar-wrapper')}>
                                    <Avatar className={cx('user-avatar')} src={user.avatar} alt="Avatar" />
                                </span>
                            </SeeMoreMenu>
                        </>
                    ) : (
                        <>
                            <Button primary onClick={() => dispatch(actions.setShowModal(true))}>
                                Log in
                            </Button>
                            <SeeMoreMenu items={config.MENU_ITEMS}>
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
