import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import styles from './Header.module.scss'
import images from '~/assets/images'
import ProperWrapper from '~/components/Proper'
import AccountItem from '~/components/AccountItem'

const cx = classNames.bind(styles)

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
                            <ProperWrapper>
                                <label className={cx('search-title')}>Accounts</label>
                                <AccountItem />
                            </ProperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" name="text" className={cx('search-input')} />
                        <img src={images.loading} alt="loading" className={cx('loading')} />
                        <button className={cx('clear')}>
                            <img src={images.clear} alt="clear" />
                        </button>
                        <button className={cx('search-btn')}>
                            <img src={images.search} alt="search" className={cx('search-icon')} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('header-right')}></div>
            </div>
        </header>
    )
}

export default Header
