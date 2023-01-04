import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import styles from './SuggestedAccounts.module.scss'
import { Popper as PopperWrapper } from '~/components/Popper'
import { BlueTick } from '~/components/Icons'
import RecommendAccount from '~/components/RecommendAccount'
import Avatar from '~/components/Avatar'

const cx = classNames.bind(styles)

function AccountItem({ suggested, data }) {

    return (
        <div>
            <Tippy
                disabled={!suggested}
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
                <div className={cx('account-item')}>
                    <Avatar
                        className={cx('avatar')}
                        src={data.avatar}
                        alt={data.nickname}
                    />
                    <div className={cx('content')}>
                        <h4 className={cx('username')}>
                            {data.nickname}
                            <span className={cx('blue-tick')}>
                                {data.tick && <BlueTick />}
                            </span>
                        </h4>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    )
}

export default AccountItem
