import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem'
import SeparateLine from '~/components/SeparateLine'

const cx = classNames.bind(styles)

function FollowingAccounts({ title }) {
    const [followingUser, setFollowingUser] = useState([])
    const currentData = useRef([])
    const index = useRef(1)
    const maxIndex = useRef(0)

    const getData = () => {
        fetch(`https://tiktok.fullstack.edu.vn/api/me/followings?page=${index.current}`, {
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY3Mjg0OTk3NywiZXhwIjoxNjc1NDQxOTc3LCJuYmYiOjE2NzI4NDk5NzcsImp0aSI6Ikl6MW9iRFZZY2xIb1BEd2EiLCJzdWIiOjQ4MDMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.OIj9PXiep7A6CECYkm_TRalvhQkD0DZeJoJOQ7sSvaY` // notice the Bearer before your token
            }
        })
            .then(response => response.json())
            .then(data => {

                if (index.current === 1) {
                    if (data.meta.pagination.total % data.meta.pagination.count === 0) {
                        maxIndex.current = parseInt(data.meta.pagination.total / data.meta.pagination.count)
                    } else {
                        maxIndex.current = parseInt(data.meta.pagination.total / data.meta.pagination.count + 1)
                    }
                }
                if (index.current <= maxIndex.current) {
                    currentData.current = [...followingUser, ...data.data]
                    setFollowingUser([...followingUser, ...data.data])
                }
            })

    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleGetMoreUser = () => {
        if (index.current < maxIndex.current) {
            index.current++
            getData()
        } else {
            if (followingUser.length === currentData.current.length) {
                if (currentData.current.length % 5 === 0) {
                    setFollowingUser(followingUser.slice(0, (currentData.current.length / 5 - 1) * 5))
                } else {
                    setFollowingUser(followingUser.slice(0, parseInt(currentData.current.length / 5) * 5))
                }
            } else {
                setFollowingUser(currentData.current)
            }
        }
    }

    return (
        <div className={cx('wrapper')}>
            <SeparateLine />
            <p className={cx('suggested-title')}>{title}</p>
            {followingUser.map(user => (
                <AccountItem key={user.id} data={user} />
            ))}
            <div className={cx('see-all')} onClick={handleGetMoreUser}>
                {index.current === maxIndex.current && followingUser.length === currentData.current.length ? 'See less' : 'See more'}
            </div>
        </div>
    )
}

FollowingAccounts.propTypes = {
    title: PropTypes.string
}

export default FollowingAccounts
