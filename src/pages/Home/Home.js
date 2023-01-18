import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import RecommendVideo from '~/components/RecommendVideo'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {
    const [videoData, setVideoData] = useState([])

    useEffect(() => {
        fetch('https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1')
            .then(res => res.json())
            .then(data => setVideoData(data.data))
    }, [])

    console.log(videoData)

    return (
        <nav className={cx('video-list')}>
            {videoData.map(video => <RecommendVideo key={video.id} data={video} />)}
        </nav>
    )
}

export default Home
