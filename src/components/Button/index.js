import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    disabled = false,
    separate = false,
    type = 'medium',
    leftIcon,
    rightIcon,
    className,
    children,
    onClick,
    ...restProps
}) {
    let Comp = 'button'
    let LeftIcon, RightIcon

    if (typeof leftIcon === 'function') {
        LeftIcon = leftIcon
    } else if (typeof rightIcon === 'function') {
        RightIcon = rightIcon
    }

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
        [type]: type,
        leftIcon,
        rightIcon,
        [className]: className
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && (
                <span className={cx('icon')}>{LeftIcon ? <LeftIcon /> : <FontAwesomeIcon icon={leftIcon} />}</span>
            )}
            <span className={cx('title')}>{children}</span>
            {rightIcon && (
                <span className={cx('icon')}>{RightIcon ? <RightIcon /> : <FontAwesomeIcon icon={rightIcon} />}</span>
            )}
        </Comp>
    )
}

export default Button
