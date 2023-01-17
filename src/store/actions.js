import { SET_SHOW_MODAL } from './constants'

const setShowModal = payload => {
    return {
        type: SET_SHOW_MODAL,
        payload
    }
}

export { setShowModal }
