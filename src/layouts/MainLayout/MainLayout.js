import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './MainLayout.module.scss'
import Header from '~/layouts/components/Header'
import Sidebar from '~/layouts/components/Sidebar'

const cx = classNames.bind(styles)

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                <Sidebar />
                <div className={cx('container')}>{children}</div>
            </div>
        </div>
    )
}

MainLayout.prototype = {
    children: PropTypes.node.isRequired
}

export default MainLayout
