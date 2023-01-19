import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import RecommendVideo from '~/components/RecommendVideo'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {
    const [videoData, setVideoData] = useState([])

    let userId

    const userData = localStorage.getItem('user-sign-in')
    if (userData) {
        userId = JSON.parse(userData).id
    }

    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1')
            .then(res => res.json())
            .then(data => {
                setVideoData(data.data.filter(video => video.user_id !== userId))
            })
    }, [userId])

    return (
        <nav className={cx('video-list')}>
            {videoData.map(video => (
                <RecommendVideo key={video.id} data={video} />
            ))}
        </nav>
    )
}

export default Home
