import { SET_SHOW_MODAL } from './constants'

const initValue = {
    showModal: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_SHOW_MODAL: {
            return { ...state, showModal: action.payload }
        }
        default:
            throw new Error('Invalid Action')
    }
}

export { initValue }
export default reducer
