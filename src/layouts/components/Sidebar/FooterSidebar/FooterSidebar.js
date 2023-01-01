import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './FooterSidebar.module.scss'
import config from '~/config'
import SeparateLine from '~/components/SeparateLine'

const cx = classNames.bind(styles)

function FooterSidebar() {
    const footerData = config.footerData

    return (
        <div className={cx('wrapper')}>
            <SeparateLine />
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
                <p to="/" className={cx('footer-name')}>
                    @ 2023 TikTok
                </p>
            </div>
        </div>
    )
}

export default FooterSidebar
