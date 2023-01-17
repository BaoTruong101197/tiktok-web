import classNames from 'classnames/bind'
import styles from './RecommendAccount.module.scss'
import PropTypes from 'prop-types'

import Button from '~/components/Button'
import Avatar from '~/components/Avatar'
import { BlueTick } from '~/components/Icons'

const cx = classNames.bind(styles)

function RecommendAccount({ data }) {
    const handleFollowUser = () => {
        // handle in the next time
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Avatar
                    className={cx('avatar')}
                    width="44px"
                    height="44px"
                    src={data.avatar}
                    alt={data.nickname}
                />
                <Button primary onClick={handleFollowUser}>Follow</Button>
            </div>
            <h4 className={cx('username')}>
                {data.nickname}
                <span className={cx('blue-tick')}>
                    {data.tick && <BlueTick />}
                </span>
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
