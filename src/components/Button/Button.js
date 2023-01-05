import PropTypes from 'prop-types'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    disabled = false,
    separate = false,
    discover = false,
    type = 'medium',
    LeftIcon,
    RightIcon,
    className,
    children,
    onClick,
    ...restProps
}) {
    let Comp = 'button'

    const props = {
        onClick,
        ...restProps
    }

    if (to) {
        Comp = Link
        props.to = to
    } else if (href) {
        Comp = 'a'
        props.href = href
    } else if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on' && typeof key === 'function')) {
                delete props[key]
            }
        })
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        rounded,
        disabled,
        separate,
        discover,
        [type]: type,
        [className]: className
    })

    return (
        <Comp {...props} className={classes}>
            {LeftIcon && <span className={cx('icon')}>{LeftIcon}</span>}
            <div className={cx('title')}>{children}</div>
            {RightIcon && <span className={cx('icon')}>{RightIcon}</span>}
        </Comp>
    )
}

Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    separate: PropTypes.bool,
    discover: PropTypes.bool,
    type: PropTypes.string.isRequired,
    LeftIcon: PropTypes.node,
    RightIcon: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}

export default Button
