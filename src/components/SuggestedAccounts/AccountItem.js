import { memo } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import PropTypes from 'prop-types'

import styles from './SuggestedAccounts.module.scss'
import { Popper as PopperWrapper } from '~/components/Popper'
import { BlueTickIcon } from '~/components/Icons'
import RecommendAccount from '~/components/RecommendAccount'
import Avatar from '~/components/Avatar'
import { useContext } from 'react'
import { Context } from '~/layouts/MainLayout/MainLayout'

const cx = classNames.bind(styles)

function AccountItem({ suggested, data }) {
    const { fullScreen } = useContext(Context)

    return (
        <div>
            <Tippy
                disabled={!suggested || fullScreen}
                interactive
                offset={[-100, 5]}
                placement="bottom-start"
                delay={[800, 0]}
                render={attrs => (
                    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-wrapper')}>
                            <RecommendAccount data={data} />
                        </PopperWrapper>
                    </div>
                )}
            >
                <Link className={cx('account-item')} to={`/@${data.nickname}`}>
                    <Avatar className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('content')}>
                        <h4 className={cx('username')}>
                            {data.nickname}
                            <span className={cx('blue-tick')}>{data.tick && <BlueTickIcon />}</span>
                        </h4>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    )
}

AccountItem.propTypes = {
    suggested: PropTypes.bool,
    data: PropTypes.object
}

export default memo(AccountItem)
