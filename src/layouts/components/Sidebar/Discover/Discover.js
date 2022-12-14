import classNames from 'classnames/bind'

import Button from '~/components/Button'
import config from '~/config'
import styles from './Discover.module.scss'
import SeparateLine from '~/components/SeparateLine'

const cx = classNames.bind(styles)

function Discover() {
    return (
        <div className={cx('wrapper')}>
            <SeparateLine />
            <p className={cx('discover-title')}>Discover</p>
            <div className={cx('discover-content')}>
                {config.sidebarDiscoverData.map(discoverItem => {
                    let Icon = discoverItem.leftIcon
                    return (
                        <Button
                            key={discoverItem.id}
                            discover
                            rounded
                            type="small"
                            LeftIcon={<Icon />}
                            className={cx('discover-item')}
                        >
                            <p className={cx('discover-text')}>{discoverItem.title}</p>
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default Discover
