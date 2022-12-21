import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { BlueTick } from '~/components/Icons'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/avatar-dep-cute.jpg"
                alt="Hoaa"
                loading="lazy"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    cciinnn
                    <span className={cx('blue-tick')}>
                        <BlueTick />
                    </span>
                </h4>
                <p className={cx('name')}>CiiN</p>
            </div>
        </div>
    )
}

export default AccountItem
