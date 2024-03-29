import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem'
import SeparateLine from '~/components/SeparateLine'
import { getSuggested } from '~/services'

const cx = classNames.bind(styles)

function SuggestedAccounts({ title }) {
    const [seeMore, setSeeMore] = useState(false)
    const [data, setData] = useState([])
    const suggestedUser = useRef([])

    useEffect(() => {
        getSuggested()
            .then(data => {
                suggestedUser.current = data.filter(item => item.is_followed !== true)
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
                <AccountItem key={user.id} suggested data={user} />
            ))}
            <div className={cx('see-all')} onClick={handleGetMoreUser}>
                {seeMore ? 'See less' : 'See more'}
            </div>
        </div>
    )
}

SuggestedAccounts.propTypes = {
    title: PropTypes.string
}

export default SuggestedAccounts
