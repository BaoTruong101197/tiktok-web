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
import { Message as MessageIcon, Inbox as InboxIcon } from '~/components/Icons'
import { SeeMore as SeeMoreIcon, Plus as PlusIcon } from '~/components/Icons'
import SeeMoreMenu from '~/components/Popper/Menu'
import Search from './Search'
import { useContextProvider } from '~/hooks'
import { actions } from '~/store'

const cx = classNames.bind(styles)

function Header() {
    const [state, dispatch] = useContextProvider()
    const { userSignIn } = state
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
                                    <span className={cx('inbox-number')}>12</span>
                                </span>
                            </Tippy>
                            <SeeMoreMenu items={config.USER_MENU_ITEMS}>
                                <span className={cx('avatar-wrapper')}>
                                    <Avatar
                                        className={cx('user-avatar')}
                                        src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/avatar-dep-cute.jpg"
                                        alt="Avatar"
                                    />
                                </span>
                            </SeeMoreMenu>
                        </>
                    ) : (
                        <>
                            <Button primary onClick={() => dispatch(actions.setUserSignIn(true))}>
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
