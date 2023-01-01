import classNames from 'classnames/bind'
import RecommendVideo from '~/components/RecommendVideo'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('video-list')}>
            <RecommendVideo />
        </div>
    )
}

export default Home
