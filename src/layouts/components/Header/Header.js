import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import config from '~/config'
import styles from './Header.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button'
import Image from '~/components/Image'
import { Message as MessageIcon, Inbox as InboxIcon } from '~/components/Icons'
import { SeeMore as SeeMoreIcon } from '~/components/Icons'
import SeeMoreMenu from '~/components/Popper/Menu'
import Search from './Search'

const cx = classNames.bind(styles)

function Header() {
    const userSignIn = false

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to={config.routes.home} style={{ display: 'flex' }}>
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
                            <SeeMoreMenu items={config.USER_MENU_ITEMS}>
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
