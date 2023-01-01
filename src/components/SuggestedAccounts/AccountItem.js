import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import styles from './SuggestedAccounts.module.scss'
import { Popper as PopperWrapper } from '~/components/Popper'
import { BlueTick } from '~/components/Icons'
import RecommendAccount from '~/components/RecommendAccount'
import Avatar from '~/components/Avatar'

const cx = classNames.bind(styles)

function AccountItem({ suggested }) {
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
                            <RecommendAccount />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('account-item')}>
                    <Avatar
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/18c8ee61fed13b9a13d4e5154f047a60~c5_100x100.jpeg?x-expires=1672754400&x-signature=DaFb9MjZZlyyoYAPjvFfxqlPMf8%3D"
                        alt="avatar"
                    />
                    <div className={cx('content')}>
                        <h4 className={cx('username')}>
                            theanh28entertainment
                            <span className={cx('blue-tick')}>
                                <BlueTick />
                            </span>
                        </h4>
                        <p className={cx('name')}>Theanh28 Entertainment</p>
                    </div>
                </div>
            </Tippy>
        </div>
    )
}

export default AccountItem
