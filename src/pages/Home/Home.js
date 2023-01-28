import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import RecommendVideo from '~/components/RecommendVideo'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home({ title }) {
    const [index, setIndex] = useState(1)
    const [videoData, setVideoData] = useState([])
    const navRef = useRef()

    let userId

    const userData = localStorage.getItem('user-sign-in')
    if (userData) {
        userId = JSON.parse(userData).id
    }

    localStorage.removeItem('volume')

    useEffect(() => {
        if (index > 1) {
            fetch(`https://tiktok.fullstack.edu.vn/api/videos?type=${title}&page=${index}`, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer' + JSON.parse(localStorage.getItem('user-sign-in')).token,
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setVideoData([...videoData, ...data.data.filter(video => video.user_id !== userId)])
                })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index])

    useEffect(() => {
        setVideoData([])
        fetch(`https://tiktok.fullstack.edu.vn/api/videos?type=${title}&page=1`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer' + JSON.parse(localStorage.getItem('user-sign-in')).token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVideoData(data.data.filter(video => video.user_id !== userId))
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
