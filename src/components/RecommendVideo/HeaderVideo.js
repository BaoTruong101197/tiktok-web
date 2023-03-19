import { memo } from 'react'
import classNames from 'classnames/bind'

import styles from './RecommendVideo.module.scss'
import { BlueTickIcon, MusicIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function HeaderVideo({ data }) {
    const getTime = () => {
        return data.created_at.split(' ')[0]
    }
    return (
        <>
            <div className={cx('wrapper-header')}>
                <header className={cx('header')}>
                    <h3 className={cx('username')}>
                        {data.user.nickname}
                        {data.tick && (
                            <span className={cx('blue-tick')}>
                                <BlueTickIcon />
                            </span>
                        )}
                    </h3>
                    <h4 className={cx('name')}>{`${data.user.first_name} ${data.user.last_name}`} </h4>
                    <span className={cx('point')}>.</span>
                    <p className={cx('time')}>{getTime()}</p>
                </header>
            </div>
            <p className={cx('description')}>{data.description}</p>
            <div className={cx('music-wrapper')}>
                <div className={cx('music')}>
                    <MusicIcon />
                    <p className={cx('music-name')}>{!data.music ? `Nhạc nền` : data.music}</p>
                </div>
            </div>
        </>
    )
}

export default memo(HeaderVideo)
