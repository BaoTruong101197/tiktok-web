import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import RecommendVideo from '~/components/RecommendVideo'
import styles from './Home.module.scss'
import { useLocalStorage } from '~/hooks'
import { getVideoList } from '~/services'

const cx = classNames.bind(styles)

function Home({ title }) {
    const [videoData, setVideoData] = useState([])
    const navRef = useRef()
    const userData = useLocalStorage()

    localStorage.removeItem('volume')

    useEffect(() => {
        setVideoData([])
        getVideoList(title, 1).then(data => setVideoData(data.data.filter(video => video.user_id !== userData.id)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title])

    return (
        <nav className={cx('video-list')} ref={navRef}>
            {videoData.map((video, index) => (
                <RecommendVideo key={video.id} data={video} index={index} length={videoData.length} />
            ))}
        </nav>
    )
}

export default Home
