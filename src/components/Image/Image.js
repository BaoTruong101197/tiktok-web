import { forwardRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import images from '~/assets/images'

function Image({ src = images.noImage, alt, className, width, height, ...restProps }, ref) {
    const [imgSrc, setImgSrc] = useState(src)
    
    useEffect(() => {
        setImgSrc(src);
    }, [src])
    
    return (
        <img
            src={imgSrc}
            alt={alt}
            ref={ref}
            className={className}
            width={width}
            height={height}
            {...restProps}
            onError={() => setImgSrc(images.noImage)}
        />
    )
}

Image.prototype = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
}

export default forwardRef(Image)
