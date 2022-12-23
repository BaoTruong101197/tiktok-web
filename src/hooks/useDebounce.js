import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value)

    if (value === '') {
        delay = 0
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => clearTimeout(handler)
    }, [value, delay])

    return debounceValue
}

useDebounce.prototype = {
    value: PropTypes.node.isRequired,
    delay: PropTypes.number.isRequired
}

export default useDebounce
