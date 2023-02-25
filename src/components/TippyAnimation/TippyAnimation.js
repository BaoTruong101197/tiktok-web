import { useState } from 'react'
import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless'
import { useSpring, motion } from 'framer-motion'

function TippyAnimation({ className, offset = [-25, 5], placement = 'top-start', childrenTippy, children }) {
    const [show, setShow] = useState(false)
    const springConfig = { damping: 15, stiffness: 150 }
    const opacity = useSpring(0, springConfig)

    function onMount() {
        setShow(true)
        opacity.set(1)
    }

    function onHide({ unmount }) {
        setShow(false)
        opacity.set(0)
    }

    return (
        <Tippy
            interactive={show}
            offset={offset}
            placement={placement}
            delay={[0, 400]}
            animation={true}
            onMount={onMount}
            onHide={onHide}
            render={attrs => (
                <motion.div className={className} tabIndex="-1" style={{ opacity }} {...attrs}>
                    {childrenTippy}
                </motion.div>
            )}
        >
            {children}
        </Tippy>
    )
}

TippyAnimation.prototype = {
    className: PropTypes.string,
    offset: PropTypes.array,
    placement: PropTypes.string,
    childrenTippy: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired
}

export default TippyAnimation
