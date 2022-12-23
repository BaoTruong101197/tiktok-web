import { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import images from '~/assets/images'

function Image({ src = images.noImage, alt, className, ...restProps }, ref) {
    const [imgSrc, setImgSrc] = useState(src)
    return (
        <img
            src={imgSrc}
            alt={alt}
            ref={ref}
            className={className}
            {...restProps}
            onError={() => setImgSrc(images.noImage)}
        />
    )
}

Image.prototype = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
}

export default forwardRef(Image)
