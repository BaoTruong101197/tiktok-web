import { memo } from 'react'
import classNames from 'classnames/bind'

import styles from './Upload.module.scss'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function DivideVideo() {
    return (
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
                        You can quickly divide videos into multiple parts, remove redundant parts and turn landscape
                        videos into portrait videos
                    </p>
                </div>
            </div>
            <Button className={cx('editor-btn')} primary>
                Edit
            </Button>
        </div>
    )
}

export default memo(DivideVideo)
