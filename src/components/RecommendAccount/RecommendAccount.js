import { useState } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './RecommendAccount.module.scss'
import Button from '~/components/Button'
import Avatar from '~/components/Avatar'
import { BlueTick } from '~/components/Icons'
import { useLocalStorage } from '~/hooks'

const cx = classNames.bind(styles)

function RecommendAccount({ data }) {
    const [isFollow, setIsFollow] = useState(false)
    const userData = useLocalStorage()

    const handleFollowUser = () => {
        // handle in the next time
        if (isFollow) {
            fetch(`https://tiktok.fullstack.edu.vn/api/users/${data.id}/unfollow`, {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer' + userData.token,
                    'Content-Type': 'application/json'
                }
            }).then(res => setIsFollow(!isFollow))
        } else {
            fetch(`https://tiktok.fullstack.edu.vn/api/users/${data.id}/follow`, {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer' + userData.token,
                    'Content-Type': 'application/json'
                }
            }).then(res => setIsFollow(!isFollow))
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Avatar className={cx('avatar')} width="44px" height="44px" src={data.avatar} alt={data.nickname} />
                {isFollow ? (
                    <Button className={cx('following-btn')} onClick={handleFollowUser}>
                        Following
                    </Button>
                ) : (
                    <Button primary onClick={handleFollowUser}>
                        Follow
                    </Button>
                )}
            </div>
            <h4 className={cx('username')}>
                {data.nickname}
                <span className={cx('blue-tick')}>{data.tick && <BlueTick />}</span>
            </h4>
            <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
            <div className={cx('account-status')}>
                <div className={cx('status')}>
                    <p className={cx('number')}>{data.followings_count}</p>
                    <p className={cx('text')}>Followers</p>
                </div>
                <div className={cx('status')}>
                    <p className={cx('number')}>{data.likes_count}</p>
                    <p className={cx('text')}>Likes</p>
                </div>
            </div>
        </div>
    )
}

RecommendAccount.propTypes = {
    data: PropTypes.object.isRequired
}

export default RecommendAccount
