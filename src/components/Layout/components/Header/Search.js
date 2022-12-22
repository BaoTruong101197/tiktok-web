import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import { useDebounce } from '~/hooks'
import styles from './Header.module.scss'
import { Popper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import { Clear as ClearIcon, Loading as LoadingIcon, Search as SearchIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showTippy, setShowTippy] = useState(true)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()
    const debounce = useDebounce(searchValue, 800)

    useEffect(() => {
        if (debounce.trim() === '') {
            setSearchResult([])
            return
        }

        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }, [debounce])

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
        setSearchResult([])
    }

    return (
        <HeadlessTippy
            visible={searchResult.length && showTippy > 0 ? true : false}
            interactive={true}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <label className={cx('search-title')}>Accounts</label>
                        {searchResult.map(account => (
                            <AccountItem key={account.id} data={account} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={() => setShowTippy(false)}
        >
            <div className={cx('search')}>
                <input
                    placeholder="Search accounts and videos"
                    className={cx('search-input')}
                    value={searchValue}
                    ref={inputRef}
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={() => setShowTippy(true)}
                />
                {loading && <LoadingIcon className={cx('loading')} />}
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        {<ClearIcon />}
                    </button>
                )}
                <button className={cx('search-btn')}>
                    <SearchIcon className={cx('search-icon')} />
                </button>
            </div>
        </HeadlessTippy>
    )
}

export default Search
