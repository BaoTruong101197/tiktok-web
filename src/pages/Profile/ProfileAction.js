import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './Profile.module.scss'

const cx = classNames.bind(styles)

function ProfileAction({ icon, text }) {
    return (
        <div className={cx('action-item')}>
            {icon}
            <p className={cx('action-text')}>{text}</p>
        </div>
    )
}

ProfileAction.propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string
}

export default ProfileAction
