import classNames from 'classnames/bind'
import AccountItem from './AccountItem';
import styles from './SuggestedAccounts.module.scss'
const cx = classNames.bind(styles)

function SuggestedAccounts() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('suggested-title')}>Suggested accounts</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <div className={cx('see-all')}>See all</div>
        </div>
    );
}

export default SuggestedAccounts;