import { useContext } from 'react'
import { StoreContext } from '~/store'

function useContextProvider() {
    const [state, dispatch] = useContext(StoreContext)

    return [state, dispatch]
}

export default useContextProvider
