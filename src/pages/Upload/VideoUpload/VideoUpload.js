import { memo, useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from '../Upload.module.scss'
import Content from './Content'

const cx = classNames.bind(styles)

function VideoUpload({ video, userData }) {
    const [videoControlShow, setVideoControlShow] = useState(false)
    const [soundVolume, setSoundVolume] = useState(true)
    const [playVideo, setPlayVideo] = useState(false)
    const [currentTimeText, setCurrentTimeText] = useState('00:00:00')
    const [totalTimeText, setTotalTimeText] = useState('00:00:00')

    const videoRef = useRef()
    const progressRef = useRef()
    const currentPosition = useRef()

    useEffect(() => {
        videoRef.current.muted = !soundVolume
    }, [soundVolume])

    useEffect(() => {
        if (playVideo) {
            videoRef.current.play()
            return
        }
        videoRef.current.pause()
    }, [playVideo])

    useEffect(() => {
        const time = videoRef.current.duration
        if (time / 60 >= 10) {
            if (time % 60 >= 10) {
                setTotalTimeText(`00:${Math.floor(time / 60)}:${Math.floor(time % 60)}`)
            } else {
                setTotalTimeText(`00:${Math.floor(time / 60)}:0${Math.floor(time % 60)}`)
            }
        } else {
            if (time % 60 >= 10) {
                setTotalTimeText(`00:0${Math.floor(time / 60)}:${Math.floor(time % 60)}`)
            } else {
                setTotalTimeText(`00:0${Math.floor(time / 60)}:0${Math.floor(time % 60)}`)
            }
        }
    }, [])

    const updateProgressBar = () => {
        updateVideoTime(videoRef.current.currentTime)
        let percentage = (100 / videoRef.current.duration) * videoRef.current.currentTime
        progressRef.current.value = percentage
        currentPosition.current.style.left = `${percentage}%`
    }

    const handleSeeked = e => {
        var percent = e.nativeEvent.offsetX / progressRef.current.offsetWidth
        videoRef.current.currentTime = percent * videoRef.current.duration
        setPlayVideo(false)
    }

    const updateVideoTime = time => {
        if (time / 60 >= 10) {
            if (time % 60 >= 10) {
                setCurrentTimeText(`00:${Math.floor(time / 60)}:${Math.floor(time % 60)}`)
            } else {
                setCurrentTimeText(`00:${Math.floor(time / 60)}:0${Math.floor(time % 60)}`)
            }
        } else {
            if (time % 60 >= 10) {
                setCurrentTimeText(`00:0${Math.floor(time / 60)}:${Math.floor(time % 60)}`)
            } else {
                setCurrentTimeText(`00:0${Math.floor(time / 60)}:0${Math.floor(time % 60)}`)
            }
        }
    }

    return (
        <div
            className={cx('video-wrap')}
            onMouseEnter={() => setVideoControlShow(true)}
            onMouseLeave={() => setVideoControlShow(false)}
        >
            <div className={cx('video-content')}>
                <Content video={video} userData={userData} />
                <div
                    className={cx('control-container', {
                        'show-control': videoControlShow
                    })}
                >
                    <div className={cx('control-operation')}>
                        <div className={cx('control-wrap')}>
                            <div
                                className={cx({ 'pause-video': !playVideo, 'play-video': playVideo })}
                                onClick={() => setPlayVideo(!playVideo)}
                            ></div>
                            <span className={cx('time-video')}>
                                {currentTimeText} / {totalTimeText}
                            </span>
                        </div>
                        <div className={cx('setting-video')}>
                            <div
                                className={cx({ 'volume-off-video': !soundVolume, 'volume-video': soundVolume })}
                                onClick={() => setSoundVolume(!soundVolume)}
                            ></div>
                            <div className={cx('zoom-video')}></div>
                        </div>
                    </div>
                    <div className={cx('progress-wrapper')} onClick={handleSeeked}>
                        <progress className={cx('progress')} max={100} ref={progressRef}></progress>
                        <div className={cx('current-position')} ref={currentPosition}></div>
                    </div>
                </div>
                <div className={cx('video-user')}>
                    <video
                        className={cx('video')}
                        ref={videoRef}
                        alt=""
                        src={video.preview}
                        onTimeUpdate={updateProgressBar}
                        onEnded={() => setPlayVideo(false)}
                    />
                </div>
            </div>
            <footer className={cx('video-footer')}></footer>
        </div>
    )
}

VideoUpload.propTypes = {
    video: PropTypes.object,
    userData: PropTypes.object
}

export default memo(VideoUpload)
