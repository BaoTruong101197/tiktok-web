import classNames from 'classnames/bind'
import { useState } from 'react'
import styles from './Upload.module.scss'
import Button from '~/components/Button'
import { CheckIcon } from '~/components/Icons'
import SwitchButton from '~/components/SwitchButton'

const cx = classNames.bind(styles)

function Upload() {
    const [showSelect, setShowSelect] = useState(false)
    return (
        <div className={cx('upload-wrapper')}>
            <div className={cx('upload-container')}>
                <div className={cx('upload-content')}>
                    <header className={cx('upload-header')}>Upload video</header>
                    <p className={cx('upload-desc')}>Post a video to your account</p>
                    <div className={cx('upload-body')}>
                        <div className={cx('uploader')}>
                            <div className={cx('uploader-card')}>
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
                                <input className={cx('caption-input')} />
                            </div>
                            <div className={cx('form-wrap')}>
                                <label className={cx('form-label')}>Thumbnail Time</label>
                                <input className={cx('caption-input')} style={{ width: '20%' }} />
                            </div>
                            <div className={cx('select-wrap')}>
                                <label className={cx('auth-label')}>Who can watch this video</label>
                                <input
                                    className={cx('select-input')}
                                    onClick={() => setShowSelect(true)}
                                    onBlur={() => setShowSelect(false)}
                                    readOnly={true}
                                />
                                <span className={cx('select-text')}>Public</span>
                                {showSelect && (
                                    <div className={cx('option-wrap')}>
                                        <div className={cx('option-item')} value="0">
                                            Public
                                        </div>
                                        <div className={cx('option-item')} value="1">
                                            Friends
                                        </div>
                                        <div className={cx('option-item')} value="2">
                                            Private
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={cx('allow-wrap')}>
                                <label className={cx('allow-label')}>Allow users to:</label>
                                <div className={cx('allow-content')}>
                                    <div className={cx('allow-option')}>
                                        <input type="checkbox" className={cx('allow-checkbox')} />
                                        <div className={cx('custom-checkbox')}>
                                            <CheckIcon />
                                        </div>
                                        <span className={cx('allow-text')}>Comment</span>
                                    </div>
                                    <div className={cx('allow-option')}>
                                        <input type="checkbox" className={cx('allow-checkbox')} />
                                        <div className={cx('custom-checkbox')}>
                                            <CheckIcon />
                                        </div>
                                        <span className={cx('allow-text')}>Duet</span>
                                    </div>
                                    <div className={cx('allow-option')}>
                                        <input type="checkbox" className={cx('allow-checkbox')} />
                                        <div className={cx('custom-checkbox')}>
                                            <CheckIcon />
                                        </div>
                                        <span className={cx('allow-text')}>Stitch</span>
                                    </div>
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
