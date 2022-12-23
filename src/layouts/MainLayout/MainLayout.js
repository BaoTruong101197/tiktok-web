import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import Header from '~/layouts/components/Header'
import Sidebar from './Sidebar'
import styles from './MainLayout.module.scss'

const cx = classNames.bind(styles)

function MainLayout({ children }) {
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

MainLayout.prototype = {
    children: PropTypes.node.isRequired
}

export default MainLayout
