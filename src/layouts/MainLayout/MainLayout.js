import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './MainLayout.module.scss'
import Header from '~/layouts/components/Header'
import LoginForm from '~/components/LoginForm'
import ModalOverlay from '~/components/Modal'
import Sidebar from '~/layouts/components/Sidebar'
import { useContextProvider } from '~/hooks'
import { actions } from '~/store'

const cx = classNames.bind(styles)

function MainLayout({ children }) {
    const [state, dispatch] = useContextProvider()
    const { showModal } = state

    const handleCloseOverlay = () => {
        dispatch(actions.setShowModal(false))
    }

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                <Sidebar />
                <div className={cx('container')}>{children}</div>
            </div>
            <ModalOverlay showModal={showModal} className={cx('modal')}>
                <LoginForm handleCloseOverlay={handleCloseOverlay} />
            </ModalOverlay>
        </div>
    )
}

MainLayout.prototype = {
    children: PropTypes.node.isRequired
}

export default MainLayout
