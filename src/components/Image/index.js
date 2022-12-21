import { forwardRef, useState } from 'react'
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

export default forwardRef(Image)
