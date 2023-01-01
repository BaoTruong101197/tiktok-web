import classNames from 'classnames/bind'

import Button from '~/components/Button'
import config from '~/config'
import styles from './Discover.module.scss'

const cx = classNames.bind(styles)

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('discover-title')}>Discover</p>
            <div className={cx('discover-content')}>
                {config.sidebarDiscoverData.map(discoverItem => (
                    <Button
                        key={discoverItem.id}
                        discover
                        rounded
                        type="small"
                        leftIcon={discoverItem.leftIcon}
                        className={cx('discover-item')}
                    >
                        <p className={cx('discover-text')}>{discoverItem.title}</p>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Discover
