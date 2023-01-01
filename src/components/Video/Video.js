import { useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Video.module.scss'
import { StartVideoIcon, PauseVideoIcon, VolumeOn, VolumeOff } from '~/components/Icons'

const cx = classNames.bind(styles)

function Video({ className, src, width = '360px', height }) {
    const [playVideo, setPlayVideo] = useState(true)
    const [volumeOn, setVolumeOn] = useState(false)
    const videoRef = useRef()

    const handlePlay = () => {
        if (!playVideo) {
            videoRef.current.play()
            setPlayVideo(true)
        } else {
            videoRef.current.pause()
            setPlayVideo(false)
        }
    }

    const handleTurnVolume = () => {
        if (!volumeOn) {
            videoRef.current.muted = false
            setVolumeOn(true)
        } else {
            videoRef.current.muted = true
            setVolumeOn(false)
        }
    }

    return (
        <div className={cx('wrapper')}>
            <video
                className={cx('video', { [className]: className })}
                ref={videoRef}
                src={src}
                width={width}
                height={height}
                loop
                autoPlay
                muted
            />
            <button className={cx('start-video')} onClick={handlePlay}>
                {playVideo ? <StartVideoIcon /> : <PauseVideoIcon />}
            </button>
            <button className={cx('volume-on')} onClick={handleTurnVolume}>
                {volumeOn ? <VolumeOn /> : <VolumeOff />}
            </button>
        </div>
    )
}

export default Video
