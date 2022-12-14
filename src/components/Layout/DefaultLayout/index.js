import classNames from 'classnames/bind'
import Header from '~/components/Layout/components/Header'
import Sidebar from './Sidebar'
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <h1 className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                <Sidebar />
                <div className={cx('container')}>{children}</div>
            </div>
        </h1>
    )
}

export default DefaultLayout
