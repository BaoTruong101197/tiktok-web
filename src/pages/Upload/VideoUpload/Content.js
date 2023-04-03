import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from '../Upload.module.scss'
import Avatar from '~/components/Avatar'

const cx = classNames.bind(styles)

function Content({ video, userData }) {
    return (
        <>
            <header className={cx('video-header')}>
                <img
                    className={cx('live-icon')}
                    alt="live-icon"
                    src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/live.8475fdb2.svg"
                />
                <div className={cx('header-content')}>
                    <span className={cx('following-text')}>Following</span>
                    <span className={cx('for-you-text')}>For you</span>
                </div>
                <img
                    className={cx('live-icon')}
                    alt="live-icon"
                    src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/search.25de602f.svg"
                />
            </header>
            <div className={cx('video-data')}>
                <div className={cx('video-username')}>{`@ ${userData.first_name} ${userData.last_name}`}</div>
                <div className={cx('video-caption')}>{video.name}</div>
                <div className={cx('video-sound')}>
                    <div className={cx('sound-icon')}></div>
                    <div
                        className={cx('sound-text')}
                    >{`Original sound - ${userData.first_name} ${userData.last_name}`}</div>
                </div>
            </div>
            <Avatar className={cx('avatar-user')} src={userData.avatar} width="40px" height="40px" />
            <div className={cx('music-bar-icon')}>
                <img
                    src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/iconbar_right.8fa90e26.svg"
                    alt="music-bar-icon"
                />
            </div>
            <div className={cx('album-container')}>
                <div className={cx('album')}></div>
                <Avatar className={cx('album-avatar')} src={userData.avatar} width="24px" height="24px" />
            </div>
            <div className={cx('video-home')}></div>
        </>
    )
}

Content.propTypes = {
    video: PropTypes.object,
    userData: PropTypes.object
}

export default Content
