import { useReducer } from 'react'
import Context from './Context'
import reducer, { initValue } from './reducer'

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initValue)

    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}

export default Provider
