import classNames from 'classnames/bind'
import Image from '~/components/Image'
import images from '~/assets/images'

import styles from './Footer.module.scss'
import { DropDownIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo-wrap')}>
                <Image src={images.logoFooter1} alt="Logo" className={cx('logo-1')} />
                <Image src={images.logoFooter2} alt="Logo" className={cx('logo-2')} />
            </div>
            <footer className={cx('footer-content')}>
                <div className={cx('content-column')}>
                    <p className={cx('content-title')}>Company</p>
                    <a href="!" className={cx('content-text')}>
                        About
                    </a>
                    <p className={cx('content-text')}>Newsroom</p>
                    <p className={cx('content-text')}>Contact</p>
                    <p className={cx('content-text')}>Careers</p>
                    <p className={cx('content-text')}>ByteDance</p>
                </div>
                <div className={cx('content-column')}>
                    <div className={cx('content-title')}>Programs</div>
                    <p className={cx('content-text')}>TikTok for Good</p>
                    <p className={cx('content-text')}>Advertise</p>
                    <p className={cx('content-text')}>Developers</p>
                    <p className={cx('content-text')}>TikTok Rewards</p>
                    <p className={cx('content-text')}>TikTok Browse</p>
                    <p className={cx('content-text')}>TikTok Embeds</p>
                </div>
                <div className={cx('content-column')}>
                    <div className={cx('content-title')}>Support</div>
                    <p className={cx('content-text')}>Help Center</p>
                    <p className={cx('content-text')}>Safety Center</p>
                    <p className={cx('content-text')}>Creator Portal</p>
                    <p className={cx('content-text')}>Community Guidelines</p>
                    <p className={cx('content-text')}>Transparency</p>
                    <p className={cx('content-text')}>Accessibility</p>
                </div>
                <div className={cx('content-column')}>
                    <div className={cx('content-title')}>Legal</div>
                    <p className={cx('content-text')}>Terms of Use</p>
                    <p className={cx('content-text')}>Privacy Policy</p>
                </div>
            </footer>
            <div className={cx('footer-bottom')}>
                <div className={cx('language-selection')}>
                    <p className={cx('language-text')}>English</p>
                    <DropDownIcon />
                    <select className={cx('select-language')}>
                        <option>العربية</option>
                        <option>বাঙ্গালি (ভারত)</option>
                        <option>Cebuano (Pilipinas)</option>
                        <option>Čeština (Česká republika)</option>
                        <option>Deutsch</option>
                        <option>Ελληνικά (Ελλάδα)</option>
                        <option>English</option>
                        <option>Español</option>
                        <option>Filipino (Pilipinas)</option>
                        <option>Français</option>
                        <option>עברית (ישראל)</option>
                        <option>हिंदी</option>
                        <option>Magyar (Magyarország)</option>
                        <option>Bahasa Indonesia (Indonesia)</option>
                        <option>Tiếng Việt (Việt Nam)</option>
                    </select>
                </div>
                <p className={cx('tiktok-intro')}>© 2023 TikTok</p>
            </div>
        </div>
    )
}

export default Footer
