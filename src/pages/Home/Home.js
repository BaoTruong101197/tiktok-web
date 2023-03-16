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
    const [indexAPI, setIndexAPI] = useState(1)
    const navHeight = useRef(0)

    localStorage.removeItem('volume')

    useEffect(() => {
        if (userData) {
            getVideoList(title, indexAPI, userData.token).then(data => {
                setVideoData([...videoData, ...data.data.filter(video => video.user_id !== userData.id)])
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indexAPI])

    useEffect(() => {
        navHeight.current = navRef.current.clientHeight
    }, [videoData])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY + 1000 > navRef.current.clientHeight) {
                setIndexAPI(prev => prev + 1)
            }
        })
    }, [])

    return (
        <nav className={cx('video-list')} ref={navRef}>
            {videoData.map((video, index) => (
                <RecommendVideo
                    key={video.id}
                    data={video}
                    index={index}
                    length={videoData.length}
                    followingFeature={title === 'following' ? true : false}
                />
            ))}
        </nav>
    )
}

export default Home
