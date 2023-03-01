import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Header from '~/layouts/components/Header'
import styles from './HeaderOnly.module.scss'
import Footer from '~/components/Footer/Footer'

const cx = classNames.bind(styles)

function HeaderOnly({ children }) {
    return (
        <h1 className={cx('container')}>
            <Header fullScreen />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </h1>
    )
}

HeaderOnly.prototype = {
    children: PropTypes.node.isRequired
}

export default HeaderOnly
