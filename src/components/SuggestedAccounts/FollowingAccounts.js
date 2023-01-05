import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem'
import SeparateLine from '~/components/SeparateLine'

const cx = classNames.bind(styles)

function FollowingAccounts({ title }) {
    const [followingUser, setFollowingUser] = useState([])
    const [seeMore, setSeeMore] = useState(false)
    const newData = useRef([])
    const index = useRef(1)

    const getData = () => {
        fetch(`https://tiktok.fullstack.edu.vn/api/me/followings?page=${index}`, {
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY3Mjg0OTk3NywiZXhwIjoxNjc1NDQxOTc3LCJuYmYiOjE2NzI4NDk5NzcsImp0aSI6Ikl6MW9iRFZZY2xIb1BEd2EiLCJzdWIiOjQ4MDMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.OIj9PXiep7A6CECYkm_TRalvhQkD0DZeJoJOQ7sSvaY` // notice the Bearer before your token
            }
        })
            .then(response => response.json())
            .then(data => {
                if (index === 1) {
                    newData.current = data.data
                }
                setFollowingUser(data.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleGetMoreUser = () => {}

    return (
        <div className={cx('wrapper')}>
            <SeparateLine />
            <p className={cx('suggested-title')}>{title}</p>
            {followingUser.map(user => (
                <AccountItem key={user.id} data={user} />
            ))}
            <div className={cx('see-all')} onClick={handleGetMoreUser}>
                {seeMore ? 'See less' : 'See more'}
            </div>
        </div>
    )
}

FollowingAccounts.propTypes = {
    title: PropTypes.string
}

export default FollowingAccounts
