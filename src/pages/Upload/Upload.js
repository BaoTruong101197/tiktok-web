import { useCallback, useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'

import styles from './Upload.module.scss'
import Button from '~/components/Button'
import SwitchButton from '~/components/SwitchButton'
import { useLocalStorage } from '~/hooks'
import { getUser } from '~/services'
import VideoUpload from './VideoUpload'
import DivideVideo from './DivideVideo'
import AllowUser from './AllowUser'
import ModalOverlay from '~/components/Modal'
import { LoadingIcon } from '~/components/Icons'
import { createVideo } from '~/services'

const cx = classNames.bind(styles)

const allowString = ['Comment', 'Duet', 'Stitch']

function Upload() {
    const [showSelect, setShowSelect] = useState(false)
    const [captionValue, setCaptionValue] = useState('')
    const [thumbnailValue, setThumbnailValue] = useState()
    const [optionValue, setOptionValue] = useState('Public')
    const [allowValue, setAllowValue] = useState([0, 1, 2])
    const [showChangeVidModal, setShowChangeVidModal] = useState(false)
    const [showDiscardModal, setShowDiscardModal] = useState(false)
    const [showPostModal, setShowPostModal] = useState(false)
    const [video, setVideo] = useState()
    const [userData, setUserData] = useState()
    const [loading, setLoading] = useState(false)

    const inputFileRef = useRef()
    const user = useLocalStorage()
    const nickname = user && user.nickname

    useEffect(() => {
        if (video) {
            getUser(nickname)
                .then(data => {
                    setUserData(data)
                })
                .catch(error => console.log(error))
        } else {
            setCaptionValue('')
        }
    }, [nickname, video])

    const handleSelectVideo = e => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)
        setVideo(file)
        if (!captionValue) setCaptionValue(file.name.split('.')[0])
    }

    const handleAllowUsers = useCallback(
        index => {
            if (allowValue.includes(index)) {
                setAllowValue(allowValue.filter(item => item !== index))
            } else {
                setAllowValue([...allowValue, index])
            }
        },
        [allowValue]
    )

    const getFormDataForVideo = () => {
        let formData = new FormData()

        formData.append('description', captionValue)
        formData.append('upload_file', video)
        formData.append('thumbnail_time', thumbnailValue)
        formData.append('viewable', optionValue.toLowerCase())
        for (let index of allowValue) {
            formData.append('allows[]', allowString[index].toLowerCase())
        }

        return formData
    }

    const handleSetThumbnail = e => {
        if (isNaN(e.target.value)) return
        setThumbnailValue(e.target.value)
    }

    const handlePostVideo = e => {
        e.preventDefault()

        if (video) {
            setLoading(true)
            const fetchApi = async () => {
                let result = await createVideo(getFormDataForVideo(), user.token)
                console.log(result)
                if (result) {
                    setShowPostModal(true)
                }
                setLoading(false)
            }

            fetchApi()
        }
    }

    const handleChangeVideo = () => {
        setShowChangeVidModal(true)
    }

    return (
        <div className={cx('upload-wrapper')}>
            <div className={cx('upload-container')}>
                <div className={cx('upload-content')}>
                    <header className={cx('upload-header')}>Upload video</header>
                    <p className={cx('upload-desc')}>Post a video to your account</p>
                    <div className={cx('upload-body')}>
                        {video && userData && video.preview ? (
                            <VideoUpload video={video} userData={userData} handleChangeVideo={handleChangeVideo} />
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
                            <DivideVideo />
                            <div className={cx('form-wrap')}>
                                <label className={cx('form-label')}>Caption</label>
                                <input
                                    className={cx('caption-input')}
                                    value={captionValue}
                                    onChange={e => setCaptionValue(e.target.value)}
                                />
                            </div>
                            <div className={cx('form-wrap')}>
                                <label className={cx('form-label')}>Thumbnail Time (s)</label>
                                <input
                                    className={cx('caption-input')}
                                    style={{ width: '20%', paddingRight: '0' }}
                                    value={thumbnailValue ? `${thumbnailValue}` : ''}
                                    onChange={handleSetThumbnail}
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
                                            onClick={() => setShowSelect(!showSelect)}
                                            readOnly={true}
                                        />
                                        <span className={cx('select-text')}>{optionValue}</span>
                                    </div>
                                </HeadlessTippy>
                            </div>
                            <AllowUser
                                allowValue={allowValue}
                                allowString={allowString}
                                handleAllowUsers={handleAllowUsers}
                            />
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
                                <Button
                                    className={cx('btn-cancel')}
                                    type="large"
                                    onClick={() => setShowDiscardModal(true)}
                                >
                                    Discard
                                </Button>
                                <Button
                                    className={cx({
                                        'btn-disabled': !video
                                    })}
                                    type="large"
                                    primary={video}
                                    onClick={handlePostVideo}
                                >
                                    {loading ? <LoadingIcon className={cx('loading')} /> : 'Post'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ModalOverlay showModal={showChangeVidModal} className={cx('modal-change')}>
                <header className={cx('modal-header')}>
                    <h2 className={cx('modal-title')}>Replace this video</h2>
                    <p className={cx('modal-desc')}>Caption and video settings will still be saved</p>
                </header>
                <button
                    className={cx('replace-btn')}
                    onClick={() => {
                        setVideo()
                        setShowChangeVidModal(false)
                    }}
                >
                    Replace
                </button>
                <button className={cx('continue-btn')} onClick={() => setShowChangeVidModal(false)}>
                    Continue editing
                </button>
            </ModalOverlay>
            <ModalOverlay showModal={showDiscardModal} className={cx('modal-action')}>
                <h2 className={cx('modal-title')}>Discard this post?</h2>
                <p className={cx('modal-desc')}>The video and all edits will be discarded.</p>
                <div className={cx('modal-btn-wrapper')}>
                    <Button
                        primary
                        className={cx('another-video')}
                        type="large"
                        onClick={() => {
                            setVideo()
                            setShowDiscardModal(false)
                        }}
                    >
                        Discard
                    </Button>
                    <Button className={cx('view-profile')} type="large" onClick={() => setShowDiscardModal(false)}>
                        Continue editing
                    </Button>
                </div>
            </ModalOverlay>
            <ModalOverlay showModal={showPostModal} className={cx('modal-action')}>
                <h2 className={cx('modal-title')}>Your videos are being uploaded to TikTok!</h2>
                <div className={cx('modal-btn-wrapper')}>
                    <Button
                        primary
                        className={cx('another-video')}
                        type="large"
                        onClick={() => {
                            setVideo()
                            setShowPostModal(false)
                        }}
                    >
                        Upload another video
                    </Button>
                    <Button className={cx('view-profile')} type="large" to={`/@${user.nickname}`}>
                        View profile
                    </Button>
                </div>
            </ModalOverlay>
        </div>
    )
}

export default Upload
