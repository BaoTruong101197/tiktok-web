import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Profile.module.scss'
import { VideoProfileIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function VideoProfile({ data }) {
    const [videoRunningId, setVideoRunningId] = useState(false)
    const videoRef = useRef()

    useEffect(() => {
        if (videoRef.current) {
            if (videoRunningId) {
                videoRef.current.play()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoRunningId])

    useEffect(() => {
        if (!localStorage.getItem('profile-video-running')) {
            localStorage.setItem('profile-video-running', data.id)
            setVideoRunningId(data.id)
        }

        window.addEventListener('change-localStorage', () => {
            if (data.id !== parseInt(localStorage.getItem('profile-video-running'))) {
                setVideoRunningId(false)
            } else {
                setVideoRunningId(true)
            }
        })
    }, [])

    return (
        <div
            className={cx('user-video')}
            onMouseEnter={() => {
                localStorage.setItem('profile-video-running', data.id)
                window.dispatchEvent(
                    new CustomEvent('change-localStorage', {
                        detail: data.id
                    })
                )
            }}
        >
            <div className={cx('video-content')}>
                <img className={cx('video-placeholder')} alt="video" src={data.thumb_url} />
                {parseInt(localStorage.getItem('profile-video-running')) === data.id && (
                    <video className={cx('video')} src={data.file_url} ref={videoRef} loop muted />
                )}
                <div className={cx('video-info')}>
                    <VideoProfileIcon />
                    <strong className={cx('video-text')}>18.3K</strong>
                </div>
            </div>
            <div className={cx('video-padding')}></div>
        </div>
    )
}

export default VideoProfile
