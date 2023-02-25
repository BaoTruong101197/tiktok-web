import { useRef, useState } from 'react'
import styles from './Profile.module.scss'
import classNames from 'classnames/bind'
import { LockLikeIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function HeaderVideo() {
    const [likedTab, setLikedTab] = useState(false)
    const tabActiveRef = useRef()

    return (
        <div className={cx('video-header')}>
            <div
                className={cx('videos-tab')}
                onMouseEnter={() => (tabActiveRef.current.style.left = 0)}
                onMouseLeave={() => (tabActiveRef.current.style.left = likedTab ? '50%' : 0)}
                onClick={() => {
                    setLikedTab(false)
                }}
            >
                <h2 className={cx('header-text', { 'unActive-text': likedTab })}>Videos</h2>
            </div>
            <div
                className={cx('liked-tab')}
                onMouseEnter={() => (tabActiveRef.current.style.left = '50%')}
                onMouseLeave={() => (tabActiveRef.current.style.left = !likedTab ? 0 : '50%')}
                onClick={() => {
                    setLikedTab(true)
                }}
            >
                <LockLikeIcon className={cx('lock-icon', { 'unActive-text': !likedTab })} />
                <h2 className={cx('header-text', { 'unActive-text': !likedTab })}>Liked</h2>
            </div>
            <div className={cx('tab-active')} ref={tabActiveRef} style={{ left: likedTab ? '50%' : 0 }}></div>
        </div>
    )
}

export default HeaderVideo
