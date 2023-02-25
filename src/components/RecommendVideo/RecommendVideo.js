import { useState } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './RecommendVideo.module.scss'
import { followUser, unFollowUser } from '~/services'
import { useLocalStorage } from '~/hooks'
import Avatar from '~/components/Avatar'
import Video from '~/components/Video'
import ActionItem from '~/components/ActionItem'
import Button from '~/components/Button'
import ShareUser from '~/components/ShareUser'
import { HeartIcon, CommentIcon, BlueTick, MusicIcon, SharedIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function RecommendVideo({ data, index, length }) {
    const [heartVideo, setHeartVideo] = useState(false)
    const [isFollow, setIsFollow] = useState(data.user.is_followed)
    const userData = useLocalStorage()

    const handleHeartVideo = () => {
        setHeartVideo(!heartVideo)
    }

    const getTime = () => {
        return data.created_at.split(' ')[0]
    }

    const handleFollowUser = () => {
        if (isFollow) {
            unFollowUser(data.user_id, userData.token).then(data => setIsFollow(!isFollow))
        } else {
            followUser(data.user_id, userData.token).then(data => setIsFollow(!isFollow))
        }
    }

    return (
        <div className={cx('wrapper')}>
            <Avatar
                className={cx('avatar')}
                src={data.user.avatar}
                alt={data.description}
                width="56px"
                height="56px"
                loading="lazy"
            />
            <div className={cx('content')}>
                <div className={cx('wrapper-header')}>
                    <header className={cx('header')}>
                        <h3 className={cx('username')}>
                            {data.user.nickname}
                            {data.tick && (
                                <span className={cx('blue-tick')}>
                                    <BlueTick />
                                </span>
                            )}
                        </h3>
                        <h4 className={cx('name')}>{`${data.user.first_name} ${data.user.last_name}`} </h4>
                        <span className={cx('point')}>.</span>
                        <p className={cx('time')}>{getTime()}</p>
                    </header>
                </div>
                {isFollow ? (
                    <Button className={cx('following-btn')} outline type="small" onClick={handleFollowUser}>
                        Following
                    </Button>
                ) : (
                    <Button className={cx('follow-btn')} primary outline type="small" onClick={handleFollowUser}>
                        Follow
                    </Button>
                )}
                <p className={cx('description')}>{data.description}</p>
                <div className={cx('music-wrapper')}>
                    <div className={cx('music')}>
                        <MusicIcon />
                        <p className={cx('music-name')}>{!data.music ? `Nhạc nền` : data.music}</p>
                    </div>
                </div>
                <div className={cx('video-wrapper')}>
                    <Video className={cx('video')} src={data.file_url} index={index} length={length} />
                    <div className={cx('action')}>
                        <ActionItem
                            icon={
                                <HeartIcon
                                    color={heartVideo ? 'rgb(254, 44, 85)' : 'rgb(22, 24, 35)'}
                                    className={heartVideo ? cx('heart-video') : cx('unheart-video')}
                                />
                            }
                            number={data.likes_count}
                            onClick={handleHeartVideo}
                        />
                        <ActionItem icon={<CommentIcon />} number={data.comments_count} />
                        <ShareUser>
                            <ActionItem icon={<SharedIcon />} number={data.shares_count} />
                        </ShareUser>
                    </div>
                </div>
            </div>
        </div>
    )
}

RecommendVideo.propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number,
    length: PropTypes.number
}

export default RecommendVideo
