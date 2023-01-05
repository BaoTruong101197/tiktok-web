import { useState } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { useSpring, motion } from 'framer-motion'

import styles from './RecommendVideo.module.scss'
import Avatar from '~/components/Avatar'
import Video from '~/components/Video'
import ActionItem from '~/components/ActionItem'
import Button from '~/components/Button'
import video from './tiktok.mp4'
import { Popper as PopperWrapper } from '~/components/Popper'
import {
    HeartIcon,
    CommentIcon,
    SharedIcon,
    BlueTick,
    MusicIcon,
    EmbedIcon,
    SendIcon,
    FacebookIcon,
    WhatsAppIcon,
    CopyLinkIcon,
    DownArrow
} from '~/components/Icons'

const cx = classNames.bind(styles)

function RecommendVideo() {
    const [heartVideo, setHeartVideo] = useState(false)
    const springConfig = { damping: 15, stiffness: 150 }
    const opacity = useSpring(0, springConfig)

    function onMount() {
        opacity.set(1)
    }

    function onHide({ unmount }) {
        opacity.set(0)
    }
    const handleHeartVideo = () => {
        setHeartVideo(!heartVideo)
    }

    return (
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
                <div className={cx('wrapper-header')}>
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
                </div>
                <p className={cx('description')}>Cute xỉu</p>
                <div className={cx('music-wrapper')}>
                    <div className={cx('music')}>
                        <MusicIcon />
                        <p className={cx('music-name')}>nhạc nền - Tình yêu 💞💞 - ⓛⓞⓥⓔ♡💞</p>
                    </div>
                </div>
                <div className={cx('video-wrapper')}>
                    <Video className={cx('video')} src={video} />
                    <div className={cx('action')}>
                        <ActionItem
                            icon={
                                <HeartIcon
                                    color={heartVideo ? 'rgb(254, 44, 85)' : 'rgb(22, 24, 35)'}
                                    className={heartVideo ? cx('heart-video') : cx('unheart-video')}
                                />
                            }
                            number="6869"
                            onClick={handleHeartVideo}
                        />
                        <ActionItem icon={<CommentIcon />} number="103" />
                        <Tippy
                            interactive
                            offset={[-25, 5]}
                            placement="top-start"
                            delay={[0, 400]}
                            animation={true}
                            onMount={onMount}
                            onHide={onHide}
                            render={attrs => (
                                <motion.div className={cx('menu-list')} tabIndex="-1" style={{ opacity }} {...attrs}>
                                    <PopperWrapper className={cx('menu-wrapper')}>
                                        <Button
                                            className={cx('menu-item')}
                                            LeftIcon={<EmbedIcon className={cx('item-icon')} />}
                                        >
                                            Embed
                                        </Button>{' '}
                                        <Button
                                            className={cx('menu-item')}
                                            LeftIcon={<SendIcon className={cx('item-icon')} />}
                                        >
                                            Send to friends
                                        </Button>
                                        <Button
                                            className={cx('menu-item')}
                                            LeftIcon={<FacebookIcon className={cx('item-icon')} />}
                                        >
                                            Share to Facebook
                                        </Button>
                                        <Button
                                            className={cx('menu-item')}
                                            LeftIcon={<WhatsAppIcon className={cx('item-icon')} />}
                                        >
                                            Share to WhatsApp
                                        </Button>
                                        <Button
                                            className={cx('menu-item')}
                                            LeftIcon={<CopyLinkIcon className={cx('item-icon')} />}
                                        >
                                            Copy link{' '}
                                        </Button>
                                        <Button className={cx('down-arrow')} LeftIcon={<DownArrow />}></Button>
                                    </PopperWrapper>
                                </motion.div>
                            )}
                        >
                            <ActionItem icon={<SharedIcon />} number="102" />
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendVideo
