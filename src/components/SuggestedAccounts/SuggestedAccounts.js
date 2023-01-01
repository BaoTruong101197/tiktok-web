import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem'
import SeparateLine from '~/components/SeparateLine'

const cx = classNames.bind(styles)

function SuggestedAccounts({ suggested, title }) {
    return (
        <div className={cx('wrapper')}>
            <SeparateLine />
            <p className={cx('suggested-title')}>{title}</p>
            <AccountItem suggested={suggested} />
            <AccountItem suggested={suggested} />
            <AccountItem suggested={suggested} />
            <AccountItem suggested={suggested} />
            <AccountItem suggested={suggested} />
            <div className={cx('see-all')}>See all</div>
        </div>
    )
}

SuggestedAccounts.propTypes = {
    suggested: PropTypes.bool,
    title: PropTypes.string
}

export default SuggestedAccounts
