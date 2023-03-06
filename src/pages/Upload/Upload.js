import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'

import styles from './Upload.module.scss'
import Button from '~/components/Button'
import { CheckIcon } from '~/components/Icons'
import SwitchButton from '~/components/SwitchButton'
import { useLocalStorage } from '~/hooks'
import { getUser } from '~/services'
import VideoUpload from './VideoUpload'

const cx = classNames.bind(styles)

const allowString = ['Comment', 'Duet', 'Stitch']

function Upload() {
    const [showSelect, setShowSelect] = useState(false)
    const [captionValue, setCaptionValue] = useState('')
    const [thumbnailValue, setThumbnailValue] = useState(0)
    const [optionValue, setOptionValue] = useState('Public')
    const [allowValue, setAllowValue] = useState([])
    const [video, setVideo] = useState()
    const inputFileRef = useRef()

    const user = useLocalStorage()
    const nickname = user && user.nickname
    const [userData, setUserData] = useState()

    useEffect(() => {
        // console.log(captionValue, thumbnailValue, optionValue)
    }, [captionValue, thumbnailValue, optionValue])

    useEffect(() => {
        if (video) {
            getUser(nickname)
                .then(data => {
                    setUserData(data)
                })
                .catch(error => console.log(error))
        }
    }, [nickname, video])

    const handleSelectVideo = e => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)
        setVideo(file)
    }

    const handleAllowUsers = index => {
        if (allowValue.includes(index)) {
            setAllowValue(allowValue.filter(item => item !== index))
        } else {
            setAllowValue([...allowValue, index])
        }
    }

    return (
        <div className={cx('upload-wrapper')}>
            <div className={cx('upload-container')}>
                <div className={cx('upload-content')}>
                    <header className={cx('upload-header')}>Upload video</header>
                    <p className={cx('upload-desc')}>Post a video to your account</p>
                    <div className={cx('upload-body')}>
                        {video && userData && video.preview ? (
                            <VideoUpload video={video} userData={userData} />
                        ) : (
                            <div className={cx('uploader')}>
                                <input
                                    type="file"
                                    accept="video/*"
                                    style={{ display: 'none' }}
                                    ref={inputFileRef}
                                    onChange={handleSelectVideo}
                                />
                                <div className={cx('uploader-card')} onClick={() => inputFileRef.current.click()}>
                                    <img
                                        src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"
                                        className={cx('upload-img')}
                                        alt="upload"
                                    />
                                    <h3 className={cx('uploader-heading')}>Select video to upload</h3>
                                    <p className={cx('uploader-text')}>Or drag and drop a file</p>
                                    <div className={cx('uploader-info')}>
                                        <p className={cx('uploader-subtext')}>MP4 or WebM</p>
                                        <p className={cx('uploader-subtext')}>720x1280 resolution or higher</p>
                                        <p className={cx('uploader-subtext')}>Up to 30 minutes</p>
                                        <p className={cx('uploader-subtext')}>Less than 2 GB</p>
                                    </div>
                                    <Button className={cx('uploader-btn')} primary>
                                        Select file
                                    </Button>
                                </div>
                            </div>
                        )}

                        <form className={cx('form')}>
                            <div className={cx('divide-video')}>
                                <div className={cx('editor-introduction-wrap')}>
                                    <img
                                        className={cx('editor-img')}
                                        src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/divide_black.e1e40d5b.svg"
                                        alt="editor-img"
                                    />
                                    <div className={cx('editor-introduction')}>
                                        <strong className={cx('editor-title')}>Divide videos and edit</strong>
                                        <p className={cx('editor-subtitle')}>
                                            You can quickly divide videos into multiple parts, remove redundant parts
                                            and turn landscape videos into portrait videos
                                        </p>
                                    </div>
                                </div>
                                <Button className={cx('editor-btn')} primary>
                                    Edit
                                </Button>
                            </div>
                            <div className={cx('form-wrap')}>
                                <label className={cx('form-label')}>Caption</label>
                                <input
                                    className={cx('caption-input')}
                                    value={captionValue}
                                    onChange={e => setCaptionValue(e.target.value)}
                                />
                            </div>
                            <div className={cx('form-wrap')}>
                                <label className={cx('form-label')}>Thumbnail Time</label>
                                <input
                                    className={cx('caption-input')}
                                    style={{ width: '20%' }}
                                    value={`${thumbnailValue}s`}
                                    onChange={e => setThumbnailValue(e.target.value)}
                                />
                            </div>
                            <div className={cx('select-container')}>
                                <HeadlessTippy
                                    visible={showSelect}
                                    interactive
                                    offset={[0, 0]}
                                    placement="bottom-start"
                                    render={attrs => (
                                        <div className={cx('option-wrap')} tabIndex="-1" {...attrs}>
                                            <div
                                                className={cx('option-item')}
                                                onClick={() => {
                                                    setOptionValue('Public')
                                                    setShowSelect(false)
                                                }}
                                            >
                                                Public
                                            </div>
                                            <div
                                                className={cx('option-item')}
                                                onClick={() => {
                                                    setOptionValue('Friends')
                                                    setShowSelect(false)
                                                }}
                                            >
                                                Friends
                                            </div>
                                            <div
                                                className={cx('option-item')}
                                                onClick={() => {
                                                    setOptionValue('Private')
                                                    setShowSelect(false)
                                                }}
                                            >
                                                Private
                                            </div>
                                        </div>
                                    )}
                                    onClickOutside={() => setShowSelect(false)}
                                >
                                    <div className={cx('select-wrap')}>
                                        <label className={cx('auth-label')}>Who can watch this video</label>
                                        <input
                                            className={cx('select-input')}
                                            onClick={() => setShowSelect(true)}
                                            readOnly={true}
                                        />
                                        <span className={cx('select-text')}>{optionValue}</span>
                                    </div>
                                </HeadlessTippy>
                            </div>
                            <div className={cx('allow-wrap')}>
                                <label className={cx('allow-label')}>Allow users to:</label>
                                <div className={cx('allow-content')}>
                                    {allowString.map((item, index) => {
                                        return (
                                            <div
                                                className={cx('allow-option')}
                                                key={index}
                                                onClick={() => handleAllowUsers(index)}
                                            >
                                                <div
                                                    className={cx('custom-checkbox', {
                                                        'checkbox-checked': allowValue.includes(index)
                                                    })}
                                                >
                                                    {allowValue.includes(index) && <CheckIcon />}
                                                </div>
                                                <span className={cx('allow-text')}>{item}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={cx('switch-wrap')}>
                                <span className={cx('switch-text')}>Run a copyright check</span>
                                <SwitchButton className={cx('switch-btn')} />
                            </div>
                            <p className={cx('form-desc')}>
                                We'll check your video for potential copyright infringements on used sounds. If
                                infringements are found, you can edit the video before posting.
                                <span className={cx('learn-more')}>Learn more</span>
                            </p>
                            <div className={cx('btn-wrap')}>
                                <Button className={cx('btn-cancel')} type="large">
                                    Discard
                                </Button>
                                <Button className={cx('btn-post')} type="large">
                                    Post
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload
