import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './Video.module.scss'
import { StartVideoIcon, PauseVideoIcon, VolumeOn, VolumeOff, FlagIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function Video({ className, src }) {
    const [playVideo, setPlayVideo] = useState(true)
    const [volumeOn, setVolumeOn] = useState(false)

    const videoRef = useRef()
    const progressRef = useRef()
    const currentPosition = useRef()
    const volumeRef = useRef()
    const previousVolume = useRef(0)
    const volumeInput = useRef()

    useEffect(() => {
        videoRef.current.play()
    }, [])

    const handlePlay = () => {
        if (!playVideo) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }

    const handleTurnVolume = () => {
        if (!volumeOn) {
            videoRef.current.muted = false
            setVolumeOn(true)
            if (previousVolume.current === 0) {
                previousVolume.current = 1
                volumeRef.current.value = 1
            } else {
                volumeRef.current.value = previousVolume.current
            }
        } else {
            videoRef.current.muted = true
            setVolumeOn(false)
            volumeRef.current.value = 0
        }
    }

    const updateProgressBar = () => {
        let percentage = (100 / videoRef.current.duration) * videoRef.current.currentTime
        progressRef.current.value = percentage
        currentPosition.current.style.left = `${percentage}%`
    }

    const handleSeeked = e => {
        var percent = e.nativeEvent.offsetX / progressRef.current.offsetWidth
        videoRef.current.currentTime = percent * videoRef.current.duration
    }

    const onPlay = () => {
        setPlayVideo(true)
    }

    const onPause = () => {
        setPlayVideo(false)
    }

    const changeVolume = e => {
        videoRef.current.volume = e.target.value
        if (videoRef.current.volume > 0) {
            previousVolume.current = e.target.value
            setVolumeOn(true)
            videoRef.current.muted = false
        } else {
            previousVolume.current = 1
            videoRef.current.volume = 1
            setVolumeOn(false)
            videoRef.current.muted = true
        }
    }

    return (
        <div className={cx('wrapper')}>
            <video
                className={cx('video', { [className]: className })}
                ref={videoRef}
                src={src}
                loop
                muted
                onTimeUpdate={updateProgressBar}
                onPause={onPause}
                onPlay={onPlay}
            />
            <p className={cx('flag-video')}>
                <FlagIcon className={cx('flag-icon')} />
                Report
            </p>
            <button className={cx('toggle-video')} onClick={handlePlay}>
                {playVideo ? <StartVideoIcon /> : <PauseVideoIcon />}
            </button>
            <div className={cx('volume-wrapper')}>
                <button className={cx('toggle-volume')} onClick={handleTurnVolume}>
                    {volumeOn ? <VolumeOn /> : <VolumeOff />}
                </button>
                <div className={cx('volume-input')} ref={volumeInput}>
                    <input
                        ref={volumeRef}
                        type="range"
                        className={cx('volume-bar')}
                        min="0"
                        max="1"
                        step="0.01"
                        defaultValue={previousVolume.current}
                        onChange={changeVolume}
                    />
                </div>
            </div>
            <div className={cx('progress-wrapper')} onClick={handleSeeked}>
                <progress className={cx('progress')} max={100} ref={progressRef}></progress>
                <div className={cx('current-position')} ref={currentPosition}></div>
            </div>
            <div className={cx('no-focus')}></div>
        </div>
    )
}

Video.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired
}

export default Video
