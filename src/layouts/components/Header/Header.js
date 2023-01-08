import { useState } from 'react'
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
import Modal from '~/components/Modal'
import { Message as MessageIcon, Inbox as InboxIcon } from '~/components/Icons'
import {
    SeeMore as SeeMoreIcon,
    Plus as PlusIcon,
    ClearForm as ClearFormIcon,
    BackButton as BackButtonIcon
} from '~/components/Icons'
import SeeMoreMenu from '~/components/Popper/Menu'
import Search from './Search'
import { useContextProvider } from '~/hooks'

const cx = classNames.bind(styles)

function Header() {
    const [state] = useContextProvider()
    const { userSignIn } = state
    const [showModal, setShowModal] = useState(false)

    const handleCloseOverlay = () => {
        setShowModal(false)
    }

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
                            <Button primary onClick={() => setShowModal(true)}>
                                Log in
                            </Button>
                            <Modal showModal={showModal} className={cx('modal')}>
                                <div className={cx('login-form')}>
                                    <div className={cx('login-content')}>
                                        <h2 className={cx('login-title')}>Log in</h2>
                                        <div className={cx('login-desc')}>
                                            <p className={cx('email-username')}>Email or username</p>
                                            <a href="#!" className={cx('login-link')}>
                                                Log in with phone
                                            </a>
                                        </div>
                                        <input className={cx('login-input')} placeholder="Email or username" />
                                        <input type="password" className={cx('login-input')} placeholder="Password" />
                                        <a href="#!" className={cx('login-link')}>
                                            Forgot password
                                        </a>
                                        <Button className={cx('login-btn')} type="large">
                                            Log in
                                        </Button>
                                    </div>
                                    <div className={cx('login-footer')}>
                                        <p className="login-sign-up">
                                            Don’t have an account?{' '}
                                            <a href="#!" className={cx('sign-up')}>
                                                Sign up
                                            </a>
                                        </p>
                                    </div>
                                    <div className={cx('back-btn-login')}>
                                        <BackButtonIcon width="24px" height="24px" />
                                    </div>
                                    <div className={cx('clear-login')} onClick={handleCloseOverlay}>
                                        <ClearFormIcon />
                                    </div>
                                </div>
                            </Modal>
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
