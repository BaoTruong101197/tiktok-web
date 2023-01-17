import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Menu.module.scss'
import { BackButton as BackButtonIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

function Header({ title, onBack }) {
    return (
        <header className={cx('header-wrapper')}>
            <span className={cx('back-icon')} onClick={onBack}>
                <BackButtonIcon />
            </span>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    )
}

Header.prototype = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired
}

export default Header
