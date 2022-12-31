import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem'

const cx = classNames.bind(styles)

function SuggestedAccounts({ title }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('suggested-title')}>{title}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <div className={cx('see-all')}>See all</div>
        </div>
    )
}

SuggestedAccounts.propTypes = {
    title: PropTypes.string
}

export default SuggestedAccounts
