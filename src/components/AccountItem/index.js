import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { BlueTick } from '~/components/Icons'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} loading="lazy" />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    {data.nickname}
                    {data.tick && (
                        <span className={cx('blue-tick')}>
                            <BlueTick />
                        </span>
                    )}
                </h4>
                <p className={cx('name')}>{data.full_name}</p>
            </div>
        </Link>
    )
}

export default AccountItem
