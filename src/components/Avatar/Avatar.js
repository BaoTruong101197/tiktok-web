import { Fragment, memo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Avatar.module.scss'
import Image from '~/components/Image'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Avatar({ className, width = '32px', height = '32px', src, alt, to, ...restProps }) {
    let Comp = Fragment
    const linkProps = {}

    if (to) {
        Comp = Link
        linkProps.to = to
    }

    return (
        <Comp {...linkProps} className={cx('image-link')}>
            <Image src={src} alt={alt} className={cx('avatar', { [className]: className })} width={width} height={height} {...restProps} />
        </Comp>
    );
}

Avatar.prototype = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    to: PropTypes.string,
}

export default memo(Avatar)