import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'
import images from '~/assets/images'
import { Popper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'
import { Clear as ClearIcon, Loading as LoadingIcon, Search as SearchIcon } from '~/components/Icons'
import {
    Language as LanguageIcon,
    Question as QuestionIcon,
    Keyboard as KeyboardIcon,
    Theme as ThemeIcon
} from '~/components/Icons'
import SeeMoreMenu from '~/components/Popper/Menu'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        title: 'English',
        icon: LanguageIcon
    },
    {
        title: 'Feedback and help',
        icon: QuestionIcon,
        to: '/feedback'
    },
    {
        title: 'Keyboard shortcuts',
        icon: KeyboardIcon
    },
    {
        title: 'Dark mode',
        icon: ThemeIcon,
        toggle: true
    }
]

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setSearchResult([1, 2, 3])
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to="/" style={{ display: 'flex' }}>
                    <img src={images.logo} alt="Logo" className={cx('logo')} />
                </Link>
                <Tippy
                    visible={searchResult.length > 0 ? true : false}
                    interactive={true}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <label className={cx('search-title')}>Accounts</label>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" name="text" className={cx('search-input')} />
                        {<LoadingIcon className={cx('loading')} />}
                        <button className={cx('clear')}>{<ClearIcon />}</button>
                        <button className={cx('search-btn')}>
                            <SearchIcon className={cx('search-icon')} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('header-right')}>
                    <Button className={cx('upload-btn')} leftIcon={faPlus}>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                    <SeeMoreMenu items={MENU_ITEMS}>
                        <button className={cx('see-more')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} className={cx('see-more-icon')} />
                        </button>
                    </SeeMoreMenu>
                </div>
            </div>
        </header>
    )
}

export default Header
