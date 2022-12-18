import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={images.blueTick} alt="Hoaa" loading="lazy" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>Nguyen Van A</h4>
                <p className={cx('username')}>nguyenvanaa</p>
            </div>
        </div>
    )
}

export default AccountItem
