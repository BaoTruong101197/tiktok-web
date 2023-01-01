import classNames from 'classnames/bind'
import styles from './RecommendVideo.module.scss'
import Avatar from '~/components/Avatar'
import Video from '~/components/Video'
import ActionItem from '~/components/ActionItem'
import video from './tiktok.mp4'
import { HeartIcon, CommentIcon, SharedIcon, BlueTick, MusicIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function RecommendVideo() {
    return (
        <>
            <div className={cx('wrapper')}>
                <Avatar
                    className={cx('avatar')}
                    src={require('./kelly.jpeg')}
                    alt="kelly"
                    width="56px"
                    height="56px"
                    loading="lazy"
                />
                <div className={cx('content')}>
                    <header className={cx('header')}>
                        <h3 className={cx('username')}>
                            duongkelly96
                            <span className={cx('blue-tick')}>
                                <BlueTick />
                            </span>
                        </h3>
                        <h4 className={cx('name')}>kelly </h4>
                        <span className={cx('point')}>.</span>
                        <p className={cx('time')}>2022-12-29</p>
                    </header>
                    <p className={cx('description')}>Cute xỉu</p>
                    <div className={cx('music')}>
                        <MusicIcon />
                        <p className={cx('music-name')}>nhạc nền - Tình yêu 💞💞 - ⓛⓞⓥⓔ♡💞</p>
                    </div>
                    <div className={cx('video-wrapper')}>
                        <Video className={cx('video')} src={video} height="600px" />
                        <div className={cx('action')}>
                            <ActionItem icon={<HeartIcon />} number="6869" />
                            <ActionItem icon={<CommentIcon />} number="103" />
                            <ActionItem icon={<SharedIcon />} number="102" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecommendVideo
