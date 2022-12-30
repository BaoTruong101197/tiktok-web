import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './FooterSidebar.module.scss'

const cx = classNames.bind(styles)

function FooterSidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-list')}>
                <Link to="/" className={cx('menu-item')}>
                    About
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    Newsroom
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    Contact
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    Careers
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    ByteDance
                </Link>
            </div>
            <div className={cx('menu-list')}>
                <Link to="/" className={cx('menu-item')}>
                    TikTok for Good
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    Advertise
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    Developers
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    Transparency
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    TikTok Rewards
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    TikTok Browse
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    TikTok Embeds
                </Link>
            </div>
            <div className={cx('menu-list')}>
                <Link to="/" className={cx('menu-item')}>
                    Help
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    Safety
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    Terms
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    Privacy
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    Creator Portal
                </Link>
                <Link to="/" className={cx('menu-item')}>
                    Community Guidelines
                </Link>
            </div>
            <div className={cx('footer')}>
                <Link to="/" className={cx('footer-name')}>
                    @ 2022 TikTok
                </Link>
            </div>
        </div>
    )
}

export default FooterSidebar
