import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/avatar-dep-cute.jpg"
                alt="Hoaa"
                loading="lazy"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    Nguyen Van A
                    <span className={cx('blue-tick')}>
                        <img src={images.blueTick} alt="blue-tick" loading="lazy" />
                    </span>
                </h4>
                <p className={cx('name')}>nguyenvanaa</p>
            </div>
        </div>
    )
}

export default AccountItem
