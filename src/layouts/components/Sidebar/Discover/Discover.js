import classNames from 'classnames/bind'
import Button from '~/components/Button';
import styles from './Discover.module.scss'

import { HashTagIcon } from '~/components/Icons'

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
                    <p className={cx('discover-text')}>suthatla</p>
                </Button>            
                <Button discover rounded type="small" leftIcon={HashTagIcon} className={cx('discover-item')}>
                    <p className={cx('discover-text')}>suthatla</p>
                </Button>            <Button discover rounded type="small" leftIcon={HashTagIcon} className={cx('discover-item')}>
                    <p className={cx('discover-text')}>suthatla</p>
                </Button>            
                <Button discover rounded type="small" leftIcon={HashTagIcon} className={cx('discover-item')}>
                    <p className={cx('discover-text')}>suthatla</p>
                </Button>
                
            </div>
        </div>
    );
}

export default Discover;