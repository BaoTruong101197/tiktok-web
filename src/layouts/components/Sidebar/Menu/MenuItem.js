import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ to, icon, iconActive, title }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', {
            active: nav.isActive
        })}>
            <span className={cx('icon')}>
                {icon}
            </span>
            <span className={cx('active-icon')}>
                {iconActive}
            </span>
            <span className={cx('menu-label')}>{title}</span>
        </NavLink>
    );
}

MenuItem.prototype = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    iconActive: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
}

export default MenuItem;