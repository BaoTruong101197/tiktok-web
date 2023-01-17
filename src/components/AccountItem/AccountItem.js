import { memo } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './AccountItem.module.scss'
import { BlueTick } from '~/components/Icons'
import Avatar from '~/components/Avatar'

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    console.log('re-render');
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Avatar
                className={cx('avatar')}
                width="40px"
                height="40px"
                src={data.avatar}
                alt={data.nickname}
                loading="lazy"
            />
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

AccountItem.propTypes = {
    data: PropTypes.object
}

export default memo(AccountItem)
