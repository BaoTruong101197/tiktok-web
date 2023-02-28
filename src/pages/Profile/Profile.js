import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './Profile.module.scss'
import Avatar from '~/components/Avatar'
import Button from '~/components/Button'
import ShareUser from '~/components/ShareUser'
import ProfileAction from './ProfileAction'
import TippyAnimation from '~/components/TippyAnimation'
import {
    FollowUser as FollowUserIcon,
    SharedProfileIcon,
    UserMoreIcon,
    SendMessageIcon,
    ReportIcon,
    BlockIcon,
    LockLikeIcon,
    LockProfileIcon
} from '~/components/Icons'
import { Popper as PopperWrapper } from '~/components/Popper'
import { getUser, followUser, unFollowUser } from '~/services'
import { useLocalStorage } from '~/hooks'

import VideoProfile from './VideoProfile'

const cx = classNames.bind(styles)

function Profile() {
    const [userInfo, setUserInfo] = useState([])
    const [isFollow, setIsFollow] = useState(false)
    const params = useParams()
    const userData = useLocalStorage()
    const [likedTab, setLikedTab] = useState(false)
    const tabActiveRef = useRef()

    useEffect(() => {
        localStorage.removeItem('profile-video-running')
        if (params) {
            getUser(params.nickname)
                .then(data => {
                    setUserInfo(data)
                    setIsFollow(data.is_followed)
                })
                .catch(error => console.log(error))
        }

        return () => setLikedTab(false)
    }, [params])

    const handleFollowUser = () => {
        if (isFollow) {
            unFollowUser(userInfo.id, userData.token).then(data => setIsFollow(!isFollow))
        } else {
            followUser(userInfo.id, userData.token).then(data => setIsFollow(!isFollow))
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-info')}>
                <div className={cx('information-header')}>
                    <Avatar
                        className={cx('avatar')}
                        width="116px"
                        height="116px"
                        src={userInfo.avatar}
                        alt={userInfo.nickname}
                    />
                    <div className={cx('wrap-info')}>
                        <h2 className={cx('username')}>{userInfo.nickname}</h2>
                        <p className={cx('name')}>{`${userInfo.first_name} ${userInfo.last_name}`}</p>
                        <div className={cx('button-wrap')}>
                            {isFollow ? (
                                <Button className={cx('user-btn')} type="small" primary outline>
                                    Message
                                </Button>
                            ) : (
                                <Button className={cx('follow-btn')} type="small" primary onClick={handleFollowUser}>
                                    Follow
                                </Button>
                            )}
                            {isFollow && (
                                <button className={cx('follow-user')} onClick={handleFollowUser}>
                                    <FollowUserIcon />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className={cx('count-info')}>
                    <div className={cx('status')}>
                        <strong className={cx('number')}>{userInfo.followings_count}</strong>
                        <p className={cx('text')}>Following</p>
                    </div>
                    <div className={cx('status')}>
                        <strong className={cx('number')}>{userInfo.followers_count}</strong>
                        <p className={cx('text')}>Followers</p>
                    </div>
                    <div className={cx('status')}>
                        <strong className={cx('number')}>{userInfo.likes_count}</strong>
                        <p className={cx('text')}>Likes</p>
                    </div>
                </div>
                <p className={cx('description')}>{userInfo.bio}</p>
                <ShareUser offset={[-230, 10]}>
                    <SharedProfileIcon className={cx('shared-icon')} />
                </ShareUser>
                <TippyAnimation
                    className={cx('menu-list')}
                    offset={[-155, 20]}
                    childrenTippy={
                        <PopperWrapper className={cx('menu-wrapper')}>
                            {isFollow && <ProfileAction icon={<SendMessageIcon />} text="Send message" />}
                            <ProfileAction icon={<ReportIcon />} text="Report" />
                            <ProfileAction icon={<BlockIcon />} text="Block" />
                        </PopperWrapper>
                    }
                >
                    <UserMoreIcon className={cx('user-more')} />
                </TippyAnimation>
            </div>
            <div className={cx('video-wrapper')}>
                <header className={cx('video-header')}>
                    <div
                        className={cx('videos-tab')}
                        onMouseEnter={() => (tabActiveRef.current.style.left = 0)}
                        onMouseLeave={() => (tabActiveRef.current.style.left = likedTab ? '50%' : 0)}
                        onClick={() => {
                            setLikedTab(false)
                        }}
                    >
                        <h2 className={cx('header-text', { 'unActive-text': likedTab })}>Videos</h2>
                    </div>
                    <div
                        className={cx('liked-tab')}
                        onMouseEnter={() => (tabActiveRef.current.style.left = '50%')}
                        onMouseLeave={() => (tabActiveRef.current.style.left = !likedTab ? 0 : '50%')}
                        onClick={() => {
                            setLikedTab(true)
                        }}
                    >
                        <LockLikeIcon className={cx('lock-icon', { 'unActive-text': !likedTab })} />
                        <h2 className={cx('header-text', { 'unActive-text': !likedTab })}>Liked</h2>
                    </div>
                    <div className={cx('tab-active')} ref={tabActiveRef} style={{ left: likedTab ? '50%' : 0 }}></div>
                </header>
                {likedTab ? (
                    <div className={cx('liked-container')}>
                        <LockProfileIcon className={cx('lock-profile')} />
                        <strong className={cx('lock-header')}>This user's liked videos are private</strong>
                        <p className={cx('lock-desc')}>Videos liked by {userInfo.nickname} are currently hidden</p>
                    </div>
                ) : (
                    <div className={cx('video-container')}>
                        {userInfo.videos &&
                            userInfo.videos.map(dataItem => <VideoProfile key={dataItem.id} data={dataItem} />)}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Profile
