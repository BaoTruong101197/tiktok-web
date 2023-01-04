import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem'
import SeparateLine from '~/components/SeparateLine'
import { getSuggested } from '~/services'

const cx = classNames.bind(styles)

function SuggestedAccounts({ suggested, title }) {
    const suggestedUser = useRef([])
    const [seeMore, setSeeMore] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        getSuggested()
            .then(data => {
                suggestedUser.current = data
                setData(suggestedUser.current.slice(0, 5))
            })
            .catch(error => console.log(error))
    }, [])

    const handleGetMoreUser = () => {
        setSeeMore(!seeMore)
        if (seeMore) {
            setData(suggestedUser.current.slice(0, 5))
        } else {
            setData(suggestedUser.current)
        }
    }

    return (
        <div className={cx('wrapper')}>
            <SeparateLine />
            <p className={cx('suggested-title')}>{title}</p>
            {data.map(user => (
                <AccountItem key={user.id} suggested={suggested} data={user} />
            ))}
            <div className={cx('see-all')} onClick={handleGetMoreUser}>
                {seeMore ? 'See less' : 'See more'}
            </div>
        </div>
    )
}

SuggestedAccounts.propTypes = {
    suggested: PropTypes.bool,
    title: PropTypes.string
}

export default SuggestedAccounts
