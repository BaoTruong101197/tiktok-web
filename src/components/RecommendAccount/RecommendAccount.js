import classNames from 'classnames/bind'
import styles from './RecommendAccount.module.scss'

import Button from "~/components/Button";
import { BlueTick } from "~/components/Icons";

const cx = classNames.bind(styles)

function RecommandAccount() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1672365600&x-signature=zqCMLkhQq6zQF2acRJU0kJPV0zs%3D" alt="avatar" />
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
    );
}

export default RecommandAccount;