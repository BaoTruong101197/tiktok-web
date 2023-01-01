import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './FooterSidebar.module.scss'
import config from '~/config'

const cx = classNames.bind(styles)

function FooterSidebar() {
    const footerData = config.footerData

    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-list')}>
                {footerData.footer_order_1.map(discoverItem => (
                    <Link key={discoverItem.id} to={discoverItem.to} className={cx('menu-item')}>
                        {discoverItem.title}
                    </Link>
                ))}
            </div>
            <div className={cx('menu-list')}>
                {footerData.footer_order_2.map(discoverItem => (
                    <Link key={discoverItem.id} to={discoverItem.to} className={cx('menu-item')}>
                        {discoverItem.title}
                    </Link>
                ))}
            </div>
            <div className={cx('menu-list')}>
                {footerData.footer_order_3.map(discoverItem => (
                    <Link key={discoverItem.id} to={discoverItem.to} className={cx('menu-item')}>
                        {discoverItem.title}
                    </Link>
                ))}
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
