import { useEffect, useState } from 'react'

import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem'
import SeparateLine from '~/components/SeparateLine'
import { getSuggested } from '~/services'


const cx = classNames.bind(styles)

function SuggestedAccounts({ suggested, title }) {
    const [suggestedUser, setSuggestedUser] = useState([])
    console.log(suggestedUser)

    useEffect(() => {
        getSuggested()
            .then(data => setSuggestedUser(data))
            .catch(error => console.log(error))
    }, [])

    const handleGetMoreUser = () => {

    }

    return (
        <div className={cx('wrapper')}>
            <SeparateLine />
            <p className={cx('suggested-title')}>{title}</p>
            {suggestedUser.map(user => (
                <AccountItem key={user.id} suggested={suggested} data={user} />
            ))}
            <div className={cx('see-all')} onClick={handleGetMoreUser}>See all</div>
        </div>
    )
}

SuggestedAccounts.propTypes = {
    suggested: PropTypes.bool,
    title: PropTypes.string
}

export default SuggestedAccounts
