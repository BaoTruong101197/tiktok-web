import classNames from 'classnames/bind'
import Button from '~/components/Button'
import styles from './Discover.module.scss'

import { HashTagIcon, MusicIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('discover-title')}>Discover</p>
            <div className={cx('discover-content')}>
                <Button discover rounded type="small" leftIcon={HashTagIcon} className={cx('discover-item')}>
                    <p className={cx('discover-text')}>suthatla</p>
                </Button>
                <Button discover rounded type="small" leftIcon={HashTagIcon} className={cx('discover-item')}>
                    <p className={cx('discover-text')}>mackedoi</p>
                </Button>
                <Button discover rounded type="small" leftIcon={HashTagIcon} className={cx('discover-item')}>
                    <p className={cx('discover-text')}>sansangthaydoi</p>
                </Button>
                <Button discover rounded type="small" leftIcon={MusicIcon} className={cx('discover-item')}>
                    <p className={cx('discover-text')}>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia</p>
                </Button>
                <Button discover rounded type="small" leftIcon={MusicIcon} className={cx('discover-item')}>
                    <p className={cx('discover-text')}>
                        Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng
                    </p>
                </Button>
                <Button discover rounded type="small" leftIcon={MusicIcon} className={cx('discover-item')}>
                    <p className={cx('discover-text')}>Thiên Thần Tình Yêu - RICKY STAR</p>
                </Button>
                <Button discover rounded type="small" leftIcon={HashTagIcon} className={cx('discover-item')}>
                    <p className={cx('discover-text')}>7749hieuung</p>
                </Button>
                <Button discover rounded type="small" leftIcon={HashTagIcon} className={cx('discover-item')}>
                    <p className={cx('discover-text')}>genzlife</p>
                </Button>
                <Button discover rounded type="small" leftIcon={MusicIcon} className={cx('discover-item')}>
                    <p className={cx('discover-text')}>Tình Đã Đầy Một Tim - Huyền Tâm Môn</p>
                </Button>
                <Button discover rounded type="small" leftIcon={MusicIcon} className={cx('discover-item')}>
                    <p className={cx('discover-text')}>Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham</p>
                </Button>
            </div>
        </div>
    )
}

export default Discover
