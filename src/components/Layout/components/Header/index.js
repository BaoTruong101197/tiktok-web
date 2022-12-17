import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to="/" style={{ display: 'flex' }}>
                    <img src={images.logo} alt="Logo" className={cx('logo')} />
                </Link>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} className={cx('search-input')} />
                    {/* times icon */}
                    {/* Loading icon */}
                    {/* <button className={cx('search-btn')}>
                    </button> */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('header-right')}></div>
            </div>
        </header>
    )
}

export default Header
