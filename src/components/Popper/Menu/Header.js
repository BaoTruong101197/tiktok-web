import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import { BackButton as BackButtonIcon } from '~/components/Icons';

const cx = classNames.bind(styles)

function Header({ title, onBack }) {
    return (
        <header className={cx('header-wrapper')}>
            <span className={cx('back-icon')} onClick={onBack}>
                <BackButtonIcon />
            </span>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

export default Header;