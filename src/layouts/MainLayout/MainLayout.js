import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './MainLayout.module.scss'
import Header from '~/layouts/components/Header'
import LoginForm from '~/components/LoginForm'
import ModalOverlay from '~/components/Modal'
import Sidebar from '~/layouts/components/Sidebar'
import { useContextProvider } from '~/hooks'
import { actions } from '~/store'
import { createContext } from 'react'

export const Context = createContext()

const cx = classNames.bind(styles)

function MainLayout({ children, path }) {
    const [state, dispatch] = useContextProvider()
    const [fullScreen, setFullScreen] = useState(false)
    const params = useParams()
    const { showModal } = state

    useEffect(() => {
        if (params.nickname) {
            setFullScreen(true)
        } else {
            setFullScreen(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path])

    const handleCloseOverlay = () => {
        dispatch(actions.setShowModal(false))
    }

    return (
        <Context.Provider value={{ fullScreen }}>
            <div className={cx('wrapper')}>
                <Header fullScreen={fullScreen} />
                <main className={cx('content', { 'full-content': fullScreen })}>
                    <Sidebar />
                    <div className={cx('container')}>{children}</div>
                </main>
                <ModalOverlay showModal={showModal} className={cx('modal')}>
                    <LoginForm handleCloseOverlay={handleCloseOverlay} />
                </ModalOverlay>
            </div>
        </Context.Provider>
    )
}

MainLayout.prototype = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string
}

export default MainLayout
