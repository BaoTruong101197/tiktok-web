import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import RecommendVideo from '~/components/RecommendVideo'
import styles from './Home.module.scss'
import { useLocalStorage } from '~/hooks'

const cx = classNames.bind(styles)

function Home({ title }) {
    const [index, setIndex] = useState(1)
    const [videoData, setVideoData] = useState([])
    const navRef = useRef()

    const userData = useLocalStorage()

    localStorage.removeItem('volume')

    useEffect(() => {
        if (index > 1) {
            fetch(`https://tiktok.fullstack.edu.vn/api/videos?type=${title}&page=${index}`, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer' + userData.token,
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    setVideoData([...videoData, ...data.data.filter(video => video.user_id !== userData.id)])
                })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index])

    useEffect(() => {
        setVideoData([])
        fetch(`https://tiktok.fullstack.edu.vn/api/videos?type=${title}&page=1`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer' + userData.token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setVideoData(data.data.filter(video => video.user_id !== userData.id))
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title])

    const getMoreVideo = () => {
        setIndex(index + 1)
    }

    return (
        <nav className={cx('video-list')} ref={navRef}>
            {videoData.map((video, index) => (
                <RecommendVideo
                    key={video.id}
                    data={video}
                    index={index}
                    length={videoData.length}
                    getMoreVideo={getMoreVideo}
                />
            ))}
        </nav>
    )
}

export default Home
