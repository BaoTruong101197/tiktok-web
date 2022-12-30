import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.module.scss'
import Tippy from '@tippyjs/react/headless'

import { Popper as PopperWrapper } from '~/components/Popper'
import { BlueTick } from '~/components/Icons';
import RecommendAccount from '~/components/RecommendAccount';

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div>
            <Tippy
                interactive
                offset={[-10, 5]}
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
                    <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1672542000&x-signature=Wes9Gj9GBFCBvvYPWFr6fEzRGME%3D" alt="avatar" />
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
    );
}

export default AccountItem;