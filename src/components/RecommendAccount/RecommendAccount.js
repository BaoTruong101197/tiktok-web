import classNames from 'classnames/bind'
import styles from './RecommendAccount.module.scss'

import Button from '~/components/Button'
import Avatar from '~/components/Avatar'
import { BlueTick } from '~/components/Icons'

const cx = classNames.bind(styles)

function RecommendAccount() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Avatar
                    className={cx('avatar')}
                    width="44px"
                    height="44px"
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/18c8ee61fed13b9a13d4e5154f047a60~c5_100x100.jpeg?x-expires=1672754400&x-signature=DaFb9MjZZlyyoYAPjvFfxqlPMf8%3D"
                    alt="avatar"
                />
                <Button primary>Follow</Button>
            </div>
            <h4 className={cx('username')}>
                theanh28entertainment
                <span className={cx('blue-tick')}>
                    <BlueTick />
                </span>
            </h4>
            <p className={cx('name')}>Theanh28 Entertainment</p>
            <div className={cx('account-status')}>
                <div className={cx('status')}>
                    <p className={cx('number')}>8.3M</p>
                    <p className={cx('text')}>Followers</p>
                </div>
                <div className={cx('status')}>
                    <p className={cx('number')}>625.7M</p>
                    <p className={cx('text')}>Likes</p>
                </div>
            </div>
        </div>
    )
}

export default RecommendAccount
