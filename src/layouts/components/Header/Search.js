import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import * as searchService from '~/services'
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

        const fetchApi = async () => {
            setLoading(true)

            const result = await searchService.search(debounce)

            setSearchResult(result)
            setLoading(false)
        }

        fetchApi()
    }, [debounce])

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
        setSearchResult([])
    }

    const handleChange = e => {
        const inputValue = e.target.value
        if (inputValue.startsWith(' ')) {
            return
        }
        setSearchValue(e.target.value)
    }

    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context
        <div>
            <HeadlessTippy
                visible={searchResult.length > 0 && showTippy ? true : false}
                interactive={true}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('scrollable')}>
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
                        onChange={handleChange}
                        onFocus={() => setShowTippy(true)}
                    />
                    {loading && <LoadingIcon className={cx('loading')} />}
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            {<ClearIcon />}
                        </button>
                    )}
                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <SearchIcon className={cx('search-icon')} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    )
}

export default Search
